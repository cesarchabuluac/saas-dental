<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Repositories\Inventories\BrandRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BrandAPIController extends Controller
{
    /** @var  BrandRepository */
    private $brandRepository;

    public function __construct(BrandRepository $brandRepository)
    {
        $this->brandRepository = $brandRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (request('all')) {
            return $this->sendResponse($this->brandRepository->orderBy('name', 'ASC')->get(['id', 'name']), 'Brands retrieved successfully.');
        }

        $brands = $this->brandRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('description', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
        return $this->sendResponse($brands, 'Brands retrieved successfully.');
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
    public function store(CreateBrandRequest $request)
    {
        try {
            $brand = $this->brandRepository->create($request->all());
            return $this->sendResponse($brand, __('lang.saved_successfully', ['operator' => __('lang.inventories.medicines.brand')]));
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
    public function update(UpdateBrandRequest $request, $id)
    {
        $brand = $this->brandRepository->find($id);
        if (empty($brand)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.brand')]), 201);
        }

        try {
            $brand = $this->brandRepository->update($request->except('id'), $id);
            return $this->sendResponse($brand, __('lang.updated_successfully', ['operator' => __('lang.inventories.medicines.brand')]));
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
        $brand = $this->brandRepository->withTrashed()->find($id);
        if (empty($brand)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.brand')]), 201);
        }

        try {
            if ($brand->trashed()) {
                $brand->restore();
                return $this->sendResponse($brand, __('lang.restored_successfully', ['operator' => __('lang.inventories.medicines.brand')]));
            } else {

                if ($brand->medicines()->exists()) {
                    return $this->sendError(__('lang.item_associate', ['operator' => __('lang.inventories.medicines.brand'), 'model' => __('lang.inventories.medicines.medicine')]), 201);
                }

                $brand->delete();
                return $this->sendResponse($brand, __('lang.deleted_successfully', ['operator' => __('lang.inventories.medicines.brand')]));
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
