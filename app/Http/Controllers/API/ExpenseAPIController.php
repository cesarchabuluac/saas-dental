<?php

namespace App\Http\Controllers\API;

use App\Exports\ExpenseReport;
use App\Exports\UserExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateExpenseRequest;
use App\Http\Requests\UpdateExpenseRequest;
use App\Repositories\ExpenseCategoryRepository;
use App\Repositories\ExpenseRepository;
use App\Services\StorageService;
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
    protected $expenseCategoryRepository;
    protected $storageService;

    public function __construct(ExpenseRepository $expenseRepo, ExpenseCategoryRepository $expenseCategoryRepository, StorageService $storageService)
    {
        $this->expenseRepository = $expenseRepo;
        $this->expenseCategoryRepository = $expenseCategoryRepository;
        $this->storageService = $storageService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $searchTerm = '%' . $request->search . '%';

        $query = $this->expenseRepository->query()
            ->with(['user', 'branch', 'category'])
            ->where(function ($query) use ($searchTerm) {
                $query->where('date', 'LIKE', $searchTerm)
                    ->orWhere('reference', 'LIKE', $searchTerm)
                    ->orWhere('note', 'LIKE', $searchTerm);
            })
            ->when($request->filled('expense_category_id'), function ($query) use ($request) {
                return $query->where('expense_category_id', $request->expense_category_id);
            })
            ->when($request->filled('start') && $request->filled('end'), function ($query) use ($request) {
                $startAt = Carbon::parse($request->start);
                $endAt = Carbon::parse($request->end);
                return $query->whereBetween('date', [$startAt, $endAt]);
            });

        if (request()->filled('isDownload')) {
            $expenses = $query->get();
            return Excel::download(new ExpenseReport($expenses), 'Expenses.xlsx');
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
        $input = $request->except('file');
        $input['user_id'] = $request->user()->id;
        $input['slug'] = \Str::slug($request->reason);

        try {
            return DB::transaction(function () use ($input, $request) {
                $expense = $this->expenseRepository->create($input);

                if ($request->hasFile('file')) {
                    $this->storageService->setTenant(tenant());
                    $path = $this->storageService->saveFile($request, "file", "expenses", $expense->id);
                    $expense->update(['file' => global_asset("/storage/" . $path)]);
                }

                return $this->sendResponse($expense->load('category'), __('lang.saved_successfully', ['operator' => __('lang.expense')]));
            });
        } catch (Exception $e) {
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
        $oldExpense = $this->expenseRepository->find($id);
        $input = $request->except('created_at', 'updated_at', 'user', 'branch', '_method');
        $input['slug'] = \Str::slug($request->reason);

        if (empty($oldExpense)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.expense')]));
        }

        try {
            return DB::transaction(function () use ($input, $request, $id, $oldExpense) {
                if ($request->hasFile('file')) {
                    $this->storageService->setTenant(tenant());
                    $path = $this->storageService->saveFile($request, "file", "expenses", $id);
                    $input['file'] = global_asset("/storage/" . $path);
                    if (!empty($oldExpense)) {
                        if ($oldExpense->file) {
                            $this->storageService->removeFile($oldExpense->file);
                        }
                    }
                }
                $expense = $this->expenseRepository->update($input, $id);
                return $this->sendResponse($expense->load('category'), __('lang.saved_successfully', ['operator' => __('lang.expense')]));
            });
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
            if ($expense->file) {
                $this->storageService->removeFile($expense->file);
            }
            $expense->delete();


            return $this->sendResponse($expense, __("lang.deleted_successfully", ['operator' => __('lang.expense')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function categoriesAll(Request $request)
    {
        $categories = $this->expenseCategoryRepository->whereIsActive(1)->get(['id', 'name']);
        return $this->sendResponse($categories, "Expense categories retrievied successfully");
    }
}
