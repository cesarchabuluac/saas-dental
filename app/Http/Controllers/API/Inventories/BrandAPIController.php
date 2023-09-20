<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Repositories\Inventories\BrandRepository;
use Exception;
use Illuminate\Http\Request;

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

        if(request('all')) {
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
            return $this->sendResponse($brand, 'Brand saved successfully.');
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
            return $this->sendError('Brand not found.');
        }

        try {
            $brand = $this->brandRepository->update($request->except('id'), $id);
            return $this->sendResponse($brand, 'Brand updated successfully.');
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
            return $this->sendError('Brand not found.');
        }

        try {
            if ($brand->trashed()) {
                $brand->restore();
                return $this->sendResponse($brand, 'Brand restored successfully.');
            } else {
                $brand->delete();
                return $this->sendResponse($brand, 'Brand deleted successfully.');
            }
            
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
