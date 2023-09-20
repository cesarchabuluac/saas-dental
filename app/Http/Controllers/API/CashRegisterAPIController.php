<?php

namespace App\Http\Controllers\API;

use App\Exports\CashRegister;
use App\Exports\CashRegisterPreview;
use App\Http\Controllers\Controller;
use App\Repositories\ActionPaymentRepository;
use App\Repositories\CashRegisterRepository;
use App\Repositories\CashRegisterDetailRepository;
use App\Repositories\ExpenseRepository;
use App\Repositories\PaymentRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
// use Maatwebsite\Excel\Facades\Excel;
use Excel;

class CashRegisterAPIController extends Controller
{
    /** @var CashRegisterRepository */
    private $cashRegisterRepository;

    /** @var CashRegisterDetailRepository */
    private $cashRegisterDetailRepository;

    /** @var  PaymentRepository */
    private $paymentRepository;

    /** @var  ActionPaymentRepository */
    private $actionPaymentRepository;

    /** @var  ExpenseRepository */
    private $expenseRepository;

    public function __construct(
        CashRegisterRepository $cashRegisterRepo,
        CashRegisterDetailRepository $cashRegisterDetailRepo,
        PaymentRepository $paymentRepo,
        ActionPaymentRepository $actionPaymentRepo,
        ExpenseRepository $expenseRepo
    ) {
        $this->cashRegisterRepository = $cashRegisterRepo;
        $this->cashRegisterDetailRepository = $cashRegisterDetailRepo;
        $this->paymentRepository = $paymentRepo;
        $this->actionPaymentRepository = $actionPaymentRepo;
        $this->expenseRepository = $expenseRepo;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->cashRegisterRepository->query()
            ->with('cashRegisterDetails')
            ->where('id', 'LIKE', '%' . request('search') . '%')
            ->orWhere('closing_date', '%' . request('search') . '%')
            ->orderBy('id', 'DESC')
            ->paginate(request('perPage'));
    }

    /**
     *
     */
    public function generate(Request $request)
    {

        $dateInitial = Carbon::createFromFormat('d/m/Y', $request->date)->format('Y-m-d');
        $dateEnd = (isset($request->date_end) && !empty($request->date_end)) ?  Carbon::createFromFormat('d/m/Y', $request->date_end)->format('Y-m-d') : null;

        $dateInitial = Carbon::parse($dateInitial)->startOfDay();
        $dateEnd = $dateEnd ? Carbon::parse($dateEnd)->endOfDay() : Carbon::parse($dateInitial)->endOfDay();

        $expenses = $this->expenseRepository
            ->where(function ($q) use ($dateInitial, $dateEnd) {
                $q->whereBetween('date', [$dateInitial, $dateEnd]);
            })
            ->where('is_closed', false)
            ->get();

        $payments = $this->paymentRepository->with(['actionPayments', 'check_data'])
            ->join('action_payments as ap', 'payments.id', '=', 'ap.payment_id')
            ->join('budget_actions as ba', 'ap.budget_action_id', '=', 'ba.id')
            ->leftJoin('actions as a', 'ba.action_id', '=', 'a.id')
            ->leftJoin('users as u', 'ap.professional_id', 'u.id')
            ->leftJoin('checks as c', function ($q) {
                $q->on('payments.check_id', '=', 'c.id')
                    ->where('c.charged', 1);
            })
            ->join('budgets as b', 'payments.budget_id', '=', 'b.id')
            ->join('patients as p', 'b.patient_id', '=', 'p.id')
            ->where('payments.is_closed', 0)
            ->where('payments.check_paid', 1)
            ->whereNull('payments.deleted_at')
            ->whereNull('ap.deleted_at')
            ->where(function ($q) {
                $q->whereNull('payments.has_partials')
                    ->orWhere('payments.has_partials', 0);
            })
            ->where(function ($q) use ($dateInitial, $dateEnd) {
                $q->whereBetween('ap.payment_date', [$dateInitial, $dateEnd]);
            })
            ->where(function ($query) use ($request) {
                $query->when($request->filled('user_id'), function ($query) use ($request) {
                    return $query->where('u.id', $request->user_id);
                });
            })
            ->select(
                'payments.*',
                'a.group as action_group',
                'a.name as action_name',
                'a.cost as action_cost',
                'a.area as action_area',
                'ap.amount as ap_amount',
                'b.id as budget_id',
                'u.id as professional_id',
                'u.name as doctor',
                'c.bank',
                'c.reference',
                'c.serie',
                'c.date',
                'c.charged',
                'c.created_at as high_date',
                'c.updated_at as date_applied',
                DB::Raw('CONCAT(p.name, " " , p.last_name, " ", p.mother_last_name) as patient')
            )
            ->get();

        if (isset($request->donwload)) {

            return (new CashRegisterPreview(
                $request,
                $payments,
                $expenses,
                $dateInitial
            ))->download('corte.xls');
        }

        return $this->sendResponse(['expenses' => $expenses, 'payments' => $payments], __('lang.retrievied_successfully', ['operator' => __('lang.cash_register')]));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {

            $income = $request->totalCash + $request->totalDebitCard + $request->totalCreditCard + $request->totalCheck + $request->totalTransfer;
            $expenses = $request->totalExpenses;
            if (empty($request->comments)) {
                if (boolval($request->isRange)) {
                    $note = __('lang.cash_registers.comments_if_null') . ": " .
                        Carbon::createFromFormat('d/m/Y', $request->date)->format('d/m') . " " . __('lang.to') . " " . Carbon::createFromFormat('d/m/Y', $request->date_end)->format('d/m');
                } else {
                    $note =  __('lang.cash_registers.comments_if_null') . ": " . Carbon::createFromFormat('d/m/Y', $request->date)->format('d/m');
                }
            }


            $input = [
                'user_id' => auth()->user()->id,
                'branch_office_id' => 1,
                'closing_date' => Carbon::createFromFormat('d/m/Y', $request->date)->format('Y-m-d'),
                'closing_end_date' => ($request->isRange) ? Carbon::createFromFormat('d/m/Y', $request->date_end)->format('Y-m-d') : Carbon::createFromFormat('d/m/Y', $request->date)->format('Y-m-d'),
                'total_income' => $income,
                'total_expenses' => $expenses,
                'total_balance' => floatval($income - $expenses),
                'total_difference' => 0,
                'comments' => $note
            ];

            // create cash register
            DB::beginTransaction();
            $register = $this->cashRegisterRepository->create($input);

            // iterate expenses
            collect($request->expenses)->each(function ($row) use ($register) {
                $findExpense = $this->expenseRepository->find($row['id']);
                if ($findExpense) {
                    // update expense
                    $findExpense->update([
                        'is_closed' => 1,
                        'closed_by' => auth()->user()->id,
                        'closed_at' => now(),
                    ]);


                    // create detail cash register
                    $this->cashRegisterDetailRepository->create([
                        'cash_register_id' => $register->id,
                        'relation_id' => $findExpense->id,
                        'origin' => 'expense',
                        'user_id' => auth()->user()->id,
                    ]);
                }
            });

            // iterate incomes
            collect($request->payments)->each(function ($row) use ($register) {
                $findPayment = $this->paymentRepository->find($row['id']);
                if ($findPayment && $findPayment->check_paid) {

                    //Update payment
                    $findPayment->update([
                        'is_closed' => 1,
                        'closed_by' => auth()->user()->id,
                        'closed_at' => Carbon::now(),
                    ]);


                    // create detail cash register
                    $this->cashRegisterDetailRepository->create([
                        'cash_register_id' => $register->id,
                        'relation_id' => $findPayment->id,
                        'origin' => 'payment',
                        'professional_id' => ($row['professional_id']) ? $row['professional_id'] : null,
                        'user_id' => auth()->user()->id,
                    ]);
                }
            });

            DB::commit();
            return $this->sendResponse($register,  __('lang.saved_successfully', ['operator' => __('lang.cash_register')]));
        } catch (Exception $e) {
            DB::rollback();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CashRegister  $cashRegister
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $cashRegister = $this->cashRegisterRepository->with('user', 'details')->find($id);

        $expenses = $this->cashRegisterRepository
            ->join('cash_register_details as crd', 'crd.cash_register_id', '=', 'cash_registers.id')
            ->join('expenses as e', 'crd.relation_id', '=', 'e.id')
            ->where('cash_registers.id', $id)
            ->where('crd.origin', 'expense')
            ->where('e.is_closed', 1)
            ->select(
                'cash_registers.id',
                'cash_registers.closing_date',
                'cash_registers.comments',
                'e.id as expense_id',
                'e.reference',
                'e.amount',
                'e.note'
            )
            ->get();

        $payments = $this->cashRegisterRepository
            ->join('cash_register_details as crd', 'crd.cash_register_id', '=', 'cash_registers.id')
            ->join('payments as pymt', 'pymt.id', '=', 'crd.relation_id')
            ->join('action_payments as ap', 'ap.payment_id', '=', 'pymt.id')
            ->join('budget_actions as ba', 'ap.budget_action_id', '=', 'ba.id')
            ->join('actions as a', 'ba.action_id', '=', 'a.id')
            ->leftJoin('users as u', 'ap.professional_id', 'u.id')
            ->leftJoin('checks as c', 'pymt.check_id', '=', 'c.id')
            ->join('budgets as b', 'pymt.budget_id', '=', 'b.id')
            ->join('patients as p', 'b.patient_id', '=', 'p.id')
            ->where('cash_registers.id', $id)
            ->where('crd.origin', 'payment')
            ->where('pymt.is_closed', 1)
            ->select('pymt.*', 'a.group as action_group', 'a.name as action_name', 'a.cost as action_cost', 'a.area as action_area', 'ap.amount as ap_amount', 'b.id as budget_id', 'u.id as professional_id', 'u.name as doctor', 'c.bank', 'c.reference', 'c.serie', 'c.date', 'c.charged', 'c.created_at as high_date', 'c.updated_at as date_applied', DB::Raw('CONCAT(p.name, " " , p.last_name, " ", p.mother_last_name) as patient'))
            ->distinct()
            ->get();

        return $this->sendResponse([
            'expenses' => $expenses,
            'payments' => $payments,
            'register' => $cashRegister
        ], 'Load data retrieved successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CashRegister  $cashRegister
     * @return \Illuminate\Http\Response
     */
    public function edit(CashRegister $cashRegister)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CashRegister  $cashRegister
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CashRegister $cashRegister)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CashRegister  $cashRegister
     * @return \Illuminate\Http\Response
     */
    public function destroy(CashRegister $cashRegister)
    {
        //
    }

    public function donwload(Request $request)
    {
        return (new CashRegister(
            $request,
            $this->cashRegisterRepository,
            $this->cashRegisterDetailRepository,
            $this->paymentRepository,
            $this->actionPaymentRepository,
            $this->expenseRepository
        ))->download('corte.xls');
    }
}
