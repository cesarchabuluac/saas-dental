<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Repositories\Inventories\SupplierRepository;
use Exception;
use Illuminate\Http\Request;

class SupplierAPIController extends Controller
{

    /** @var  SupplierRepository */
    private $supplierRepository;

    public function __construct(SupplierRepository $supplierRepository)
    {        
        $this->supplierRepository = $supplierRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request('all')) {
            return $this->sendResponse($this->supplierRepository
            ->orderBy('name', 'ASC')
            ->get(['id', 'name']), 'Supplieres retrieved successfully.');
        }


        $supplieres = $this->supplierRepository->query()
            ->where('name', 'like', '%'.request('search').'%')
            ->orWhere('phone', 'like', '%'.request('search').'%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
        return $this->sendResponse($supplieres, 'Supplieres retrieved successfully');
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
    public function store(CreateSupplierRequest $request)
    {
        try {
            $input = $request->all();
            $supplier = $this->supplierRepository->create($input);
            return $this->sendResponse($supplier, 'Supplier created successfully.');
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
        $supplier = $this->supplierRepository->find($id);
        if (empty($supplier)) {
            return $this->sendError('Supplier not found');
        }
        return $this->sendResponse($supplier, 'Supplier retrieved successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSupplierRequest $request, $id)
    {
        $supplier = $this->supplierRepository->find($id);
        if (empty($supplier)) {
            return $this->sendError('Supplier not found');
        }
        try {
            $input = $request->except('id');
            $supplier = $this->supplierRepository->update($input, $id);
            return $this->sendResponse($supplier, 'Supplier updated successfully.');
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
        $supplier = $this->supplierRepository->withTrashed()->find($id);
        if (empty($supplier)) {
            return $this->sendError('Supplier not found');
        }

        try {
            if($supplier->deleted_at) {
                $supplier->restore();
                return $this->sendResponse($supplier, 'Supplier restored successfully.');
            } else {
                $supplier->delete();
                return $this->sendResponse($supplier, 'Supplier deleted successfully.');
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
