<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use App\Jobs\SendEmail;
use App\Mail\BudgetMail;
use App\Mail\BudgetSend;
use App\Models\Budget;
use App\Repositories\BudgetActionRepository;
use App\Repositories\BudgetRepository;
use Dompdf\Dompdf;
use Dompdf\Options;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx\Rels;
use Carbon\Carbon;

class BudgetAPIController extends Controller
{
    /** @var  BudgetRepository */
    private $budgetRepository;

    /** @var  BudgetActionRepository */
    private $budgetActionRepository;

    public function __construct(BudgetRepository $budgetRepo, BudgetActionRepository $budgetActionRepo)
    {
        $this->budgetRepository = $budgetRepo;
        $this->budgetActionRepository = $budgetActionRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = request('search');
        $isBudget = boolval(request('isBudget'));
        return $this->budgetRepository->with(['patient', 'branch', 'payments', 'user', 'budgetActions'])
            ->whereHas('patient', function ($q) use ($search) {
                $q->where(
                    DB::raw(
                        // REPLACE will remove the double white space with single (As defined)
                        "REPLACE(
                    /* CONCAT will concat the columns with defined separator */
                    CONCAT(
                        /* COALESCE operator will handle NUll values as defined value. */
                        COALESCE(name,''),' ',
                        COALESCE(last_name,''),' ',
                        COALESCE(mother_last_name,'')
                    ),
                '  ',' ')"
                    ),
                    'LIKE',
                    '%' . $search . '%'
                )->orWhere(function ($q) use ($search) {
                    $q->orWhere('rut', 'LIKE', '%' . $search . '%')
                        ->orWhere('phone', 'LIKE', '%' . $search . '%')
                        ->orWhere('cellphone', 'LIKE', '%' . $search . '%')
                        ->orWhere('email', 'LIKE', '%' . $search . '%');
                });
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('filter_by'), function ($query) use ($request) {
                    if ($request->filter_by == 'approved') {
                        return $query->where('approved', 1);
                    } else if ($request->filter_by == 'not_approved') {
                        return $query->where('approved', 0);
                    }
                });
            })
            ->select('budgets.*', DB::raw('(SELECT round((budgets.total - IFNULL(SUM(ap.amount), 0))) FROM payments p INNER JOIN action_payments ap on p.id = ap.payment_id
                WHERE budgets.id = p.budget_id and p.deleted_at is null and ap.deleted_at is null) as balance'))
            ->when(!$isBudget, function ($q) {
                return $q->having('balance', '>', 0);
            })
            ->orderBy('id', 'DESC')
            ->paginate(request('perPage'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateBudgetRequest $request)
    {
        $input = $request->except('items');
        $input['approved'] = 0;
        $inputAction = [];

        try {

            DB::beginTransaction();
            $budget = $this->budgetRepository->create($input);

            if ($budget) {
                collect($request->items)->each(function ($action) use ($budget, &$inputAction) {
                    $inputAction[] = [
                        'budget_id' => $budget->id,
                        'action_id' => $action['selectedAction']['id'],
                        'action_group_id' => $action['type'] === 'clinical' ? $action['selectedAction']['action_group_id'] : null,
                        'action_name' => $action['selectedAction']['name'],
                        'action_group_name' => $action['type'] === 'clinical' ? $action['selectedAction']['group'] : null,
                        'action_type' => $action['type'],
                        'area' => $action['area'],
                        'price' => $action['cost'],
                        'discount' => $action['discount'],
                        'status' => 'Pendiente',
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ];
                });

                $this->budgetActionRepository->insert($inputAction);

                DB::commit();
            }
            return $this->sendResponse($budget, __('lang.saved_successfully', ['operator' => __('lang.budget')]));
        } catch (Exception $e) {
            DB::rollback();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Budget  $budget
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $budget = $this->budgetRepository->find($id);
        $budget->load(['patient', 'budgetActions', 'branch', 'payments', 'user']);
        $budget->clinical_actions = collect($budget->budgetActions)->filter(function ($el) {
            return $el->action_type == 'clinical';
        });
        $budget->laboratory_actions = collect($budget->budgetActions)->filter(function ($el) {
            return $el->action_type == 'laboratory';
        })->values();

        return $this->sendResponse($budget, __('lang.retrievied_successfully', ['operator' => __('lang.budget')]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Budget  $currency
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $budget = $this->budgetRepository->find($id);
        $actions = collect($request->items);
        $actionsInRequest = collect([]);

        if (empty($budget)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.budget')]));
        }

        try {

            DB::beginTransaction();
            $actions->each(function ($action) use ($budget, $actionsInRequest) {
                if (isset($action['budget_id']) && !empty($action['budget_id'])) {
                    $actionToStore = $this->budgetActionRepository->find($action['id']);
                    $actionToStore->price = $action['price'];
                    $actionToStore->area = $action['area'];
                    $actionToStore->discount = $action['discount'];
                    $actionToStore->save();
                    $actionsInRequest->push($actionToStore->id);
                } else {
                    $inputAction['budget_id'] = $budget->id;
                    $inputAction['action_id'] = $action['selectedAction']['id'];
                    $inputAction['action_group_id'] = $action['action_type'] === 'clinical' ? $action['selectedAction']['action_group_id'] : null;
                    $inputAction['action_name'] = $action['selectedAction']['name'];
                    $inputAction['action_group_name'] =  $action['action_type'] === 'clinical' ? $action['selectedAction']['group'] : null;
                    $inputAction['price'] = $action['price'];
                    $inputAction['action_type'] = $action['action_type'];
                    $inputAction['area'] = $action['area'];
                    $inputAction['discount'] = $action['discount'];
                    $inputAction['status'] = 'Pendiente';
                    $newAction = $this->budgetActionRepository->create($inputAction);
                    $actionsInRequest->push($newAction->id);
                }
            });

            $allActions = collect($budget->getActionsIds());
            $actionsToDelete = $allActions->diff($actionsInRequest)->values();
            if ($actionsToDelete->isNotEmpty()) {
                $this->budgetActionRepository->whereIn('id', $actionsToDelete)->delete(); //delete($actionsToDelete);
            }

            $input = $request->only('subtotal', 'discount', 'tax', 'total', 'comments', 'name');
            $budget = $this->budgetRepository->update($input, $id);
            DB::commit();
            return $this->sendResponse($budget, __('lang.updated_successfully', ['operator' => __('lang.budget')]));
        } catch (Exception $e) {
            DB::rollback();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $budget = $this->budgetRepository->find($id);
        if (empty($budget)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.budget')]));
        }

        try {
            DB::beginTransaction();
            $budget->budgetActions()->delete();
            $budget->delete($id);
            DB::commit();
            return $this->sendResponse($budget, __('lang.deleted_successfully', ['operator' => __('lang.budget')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     *
     */
    public function approve(Request $request, $id)
    {
        $budget = $this->budgetRepository->with(['budgetActions', 'branch', 'user', 'patient'])->find($id);
        if (empty($budget)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.budget')]));
        }

        try {

            DB::beginTransaction();
            $budget->update(['approved' => true]);
            DB::commit();

            return $this->sendResponse($budget, __('lang.approved_successfully', ['operator' => __('lang.budget')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }

    public function sendEmail($id, Request $request)
    {
        try {
            $budget = $this->budgetRepository->withTrashed()->find($id);
            $budget->load(['patient', 'budgetActions', 'branch']);
            $budget->clinical_actions = collect($budget->budgetActions)->filter(function ($el) {
                return $el->action_type == 'clinical';
            });
            $budget->laboratory_actions = collect($budget->budgetActions)->filter(function ($el) {
                return $el->action_type == 'laboratory';
            })->values();

            if (config('settings.enable_email_notification')) {
                if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
                    // Mail::to($request->email)->send(new BudgetMail($budget));
                    dispatch(new SendEmail('budget', $request->email, $budget));
                }                
            }

            return $this->sendResponse($budget, __('lang.sended_successfully', ['operator' => __('lang.budget')]));
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
    }

    public function donwloadPDF(Request $request)
    {
        $budget = $this->budgetRepository->find($request->id);
        $budget->load(['patient', 'budgetActions', 'branch', 'payments', 'user']);
        $budget->clinical_actions = collect($budget->budgetActions)->filter(function ($el) {
            return $el->action_type == 'clinical';
        });
        $budget->laboratory_actions = collect($budget->budgetActions)->filter(function ($el) {
            return $el->action_type == 'laboratory';
        })->values();

        $pdf = \PDF::loadView('pdf.budget', ['budget' => $budget]);
        $pdf->setPaper('letter', 'portrait');

        if ($request->boolean('isPrint')) {
            $pdf->render();
            return response($pdf->output(), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="budget.pdf"',
            ]);
        }

        $pdf->getDomPDF()->set_option("enable_php", true);
        return $pdf->download("Budget.pdf");
    }
}
