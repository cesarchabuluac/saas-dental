<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateExpenseCategoryRequest;
use App\Http\Requests\UpdateExpenseCategoryRequest;
use App\Repositories\ExpenseCategoryRepository;
use Exception;
use Illuminate\Http\Request;

class ExpenseCategoryAPIController extends Controller
{
    protected $expenseCategoryRepository;

    public function __construct(ExpenseCategoryRepository $expenseCategoryRepository)
    {
        $this->expenseCategoryRepository = $expenseCategoryRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('all')) {
            return $this->expenseCategoryRepository
                ->orderBy('name', 'ASC')
                ->get(['id', 'name']);
        }

        return $this->expenseCategoryRepository
            // ->withTrashed()
            ->where('name', 'like', '%' . request('search') . '%')
            ->orderBy('name', 'ASC')
            ->paginate(request('perPage'));
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
    public function store(CreateExpenseCategoryRequest $request)
    {
        $input = $request->all();
        try {

            $category = $this->expenseCategoryRepository->create($input);
            return $this->sendResponse($category, __('lang.saved_successfully', ['operator', __('lang.categories.category')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExpenseCategoryRequest $request, $id)
    {
        $input = $request->except('id');
        $category = $this->expenseCategoryRepository->find($id);

        if (empty($category)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.categories.category')]));
        }

        try {
            $category = $this->expenseCategoryRepository->update($input, $id);
            return $this->sendResponse($category, __('lang.updated_successfully', ['operator' => __('lang.categories.category')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = $this->expenseCategoryRepository->find($id);
        if (empty($category)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.categories.category')]), 201);
        }

        try {

            if ($category->is_active) {

                if ($category->expenses()->exists()) {
                    return $this->sendError(__('lang.item_associate', ['operator' => __('lang.categories.category'), 'model' => __('lang.expense')]), 201);
                }

                $category->update(['is_active' => 0]);
                return $this->sendResponse($category, __('lang.disabled_successfully', ['operator' => __('lang.categories.category')]));
            } else {
                $category->update(['is_active' => 1]);
                return $this->sendResponse($category, __('lang.enabled_successfully', ['operator' => __('lang.categories.category')]));
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
