<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Inventories\Categorie;
use App\Repositories\Inventories\CategoryRepository;
use Exception;
use Illuminate\Http\Request;

class CategoryAPIController extends Controller
{

    /** @var  CategoryRepository */
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (request('all')) {
            $categories = $this->categoryRepository->with('subcategories')
                ->orderBy('name', 'ASC')->get(['id', 'name']);
            return $this->sendResponse($categories, 'Categories retrieved successfully.');
        }

        $categories = $this->categoryRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('description', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
        return $this->sendResponse($categories, 'Categories retrieved successfully.');
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
    public function store(CreateCategoryRequest $request)
    {
        $input = $request->all();
        try {

            $category = $this->categoryRepository->create($input);
            return $this->sendResponse($category, __('lang.saved_successfully', ['operator' => __('lang.inventories.medicines.category')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inventories\Categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function show(Categorie $categorie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inventories\Categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function edit(Categorie $categorie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Inventories\Categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        $input = $request->except('id');
        $categorie = $this->categoryRepository->find($id);

        if (empty($categorie)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.category')]), 201);
        }

        try {
            $categorie = $this->categoryRepository->update($input, $id);
            return $this->sendResponse($categorie, __('lang.updated_successfully', ['operator' => __('lang.inventories.medicines.category')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inventories\Categorie  $categorie
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categorie = $this->categoryRepository->withTrashed()->find($id);
        if (empty($categorie)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.category')]), 201);
        }

        try {

            if ($categorie->deleted_at) {
                $categorie->restore();
                return $this->sendResponse($categorie, __('lang.restored_successfully', ['operator' => __('lang.inventories.medicines.category')]));
            } else {

                if ($categorie->medicines()->exists()) {
                    return $this->sendError(__('lang.item_associate', ['operator' => __('lang.inventories.medicines.category'), 'model' => __('lang.inventories.medicines.medicine')]), 201);
                }

                $categorie->delete();
                return $this->sendResponse($categorie, __('lang.deleted_successfully', ['operator' => __('lang.inventories.medicines.category')]));
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
