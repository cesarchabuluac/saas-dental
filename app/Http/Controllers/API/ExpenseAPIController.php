<?php

namespace App\Http\Controllers\API;

use App\Exports\ExpenseReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateExpenseRequest;
use App\Http\Requests\UpdateExpenseRequest;
use App\Repositories\ExpenseRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class ExpenseAPIController extends Controller
{
    /** @var  ExpenseRepository */
    private $expenseRepository;

    public function __construct(ExpenseRepository $expenseRepo)
    {
        $this->expenseRepository = $expenseRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchTerm = '%' . $request->search . '%';
        $startAt = $request->filled('start') ? Carbon::parse($request->start) : null;
        $endAt = $request->filled('end') ? Carbon::parse($request->end) : null;

        $query = $this->expenseRepository->query()
            ->with(['user', 'branch'])
            ->where(function ($query) use ($searchTerm) {
                $query->where('date', 'LIKE', $searchTerm)
                    ->orWhere('reference', 'LIKE', $searchTerm)
                    ->orWhere('note', 'LIKE', $searchTerm);
            });

        if ($startAt && $endAt) {
            $query->whereBetween('date', [$startAt, $endAt]);
        }

        if (request()->filled('isDownload')) {
            return Excel::download(new ExpenseReport($request), 'Expenses.xlsx');
        }

        $expenses = $query->orderBy('date', 'DESC')
            ->paginate(request('perPage'));

        return $expenses;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateExpenseRequest $request)
    {
        $input = $request->all();
        try {
            DB::beginTransaction();
            $expense = $this->expenseRepository->create($input);
            DB::commit();
            return $this->sendResponse($expense, __('lang.saved_successfully', ['operator' => __('lang.expense')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExpenseRequest $request, $id)
    {
        $expense = $this->expenseRepository->find($id);
        $input = $request->only('branch_office_id', 'user_id', 'date', 'reference', 'amount', 'note');

        if (empty($expense)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.expense')]));
        }

        try {
            DB::beginTransaction();
            $expense->update($input);
            DB::commit();
            return $this->sendResponse($expense, __('lang.saved_successfully', ['operator' => __('lang.expense')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $expense = $this->expenseRepository->withTrashed()->where('id', $id)->first();
            if (empty($expense)) {
                return $this->sendError(__('lang.not_found', ['operator' => __('lang.expense')]));
            }

            $expense->delete();

            // $message = "";
            // if (empty($expense->deleted_at)) {
            //     $expense->delete($id);
            //     $message = "lang.inactived_successfully";
            // } else {
            //     $expense->restore();
            //     $message = "lang.activated_successfully";
            // }
            return $this->sendResponse($expense, __("lang.deleted_successfully", ['operator' => __('lang.expense')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
