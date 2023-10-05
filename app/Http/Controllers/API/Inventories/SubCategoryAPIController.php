<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateSubCategoryRequest;
use App\Http\Requests\UpdateSubCategoryRequest;
use App\Repositories\Inventories\CategoryRepository;
use App\Repositories\Inventories\SubCategoryRepository;
use Exception;
use Illuminate\Http\Request;

class SubCategoryAPIController extends Controller
{

    /** @var  CategoryRepository */
    private $categoryRepository;

    /** @var  SubCategoryRepository */
    private $subCategoryRepository;


    public function __construct(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->subCategoryRepository = $subCategoryRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subcategory = $this->subCategoryRepository->query()
            ->with('category')
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('description', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
        return $this->sendResponse($subcategory, 'SubCategories retrieved successfully.');
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
    public function store(CreateSubCategoryRequest $request)
    {
        try {
            $input = $request->all();
            $subcategory = $this->subCategoryRepository->create($input);
            $subcategory->load('category');
            return $this->sendResponse($subcategory, __('lang.saved_successfully', ['operator' => __('lang.inventories.medicines.subcategory')]));
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
    public function update(UpdateSubCategoryRequest $request, $id)
    {
        $input = $request->except('id');
        $subcategory = $this->subCategoryRepository->find($id);
        if (empty($subcategory)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.subcategory')]), 201);
        }

        try {

            $subcategory = $this->subCategoryRepository->update($input, $id);
            $subcategory->load('category');
            return $this->sendResponse($subcategory, __('lang.updated_successfully', ['operator' => __('lang.inventories.medicines.subcategory')]), 201);
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
        $subcategory = $this->subCategoryRepository->withTrashed()->find($id);
        if (empty($subcategory)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.subcategory')]), 201);
        }

        try {
            if ($subcategory->deleted_at) {
                $subcategory->restore();
                return $this->sendResponse($subcategory->load('category'), __('lang.restored_successfully', ['operator' => __('lang.inventories.medicines.subcategory')]));
            } else {

                if ($subcategory->medicines()->exists()) {
                    return $this->sendError(__('lang.item_associate', ['operator' => __('lang.inventories.medicines.brand'), 'model' => __('lang.inventories.medicines.medicine')]), 201);
                }

                $subcategory->delete();
                return $this->sendResponse($subcategory->load('category'), __('lang.deleted_successfully', ['operator' => __('lang.inventories.medicines.subcategory')]));
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
