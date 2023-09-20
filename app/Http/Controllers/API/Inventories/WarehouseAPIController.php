<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;
use App\Repositories\Inventories\WarehouseRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WarehouseAPIController extends Controller
{

    /** @var  WarehouseRepository */
    private $warehouseRepository;

    public function __construct(WarehouseRepository $warehouseRepository)
    {
        $this->warehouseRepository = $warehouseRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {        
        if(request('all')) {
            return $this->sendResponse($this->warehouseRepository->with('branchOffice')->orderBy('name', 'ASC')->get(['id', 'name']), 'Warehouses retrieved successfully.');
        }
        
        $warehouses = $this->warehouseRepository->query()->with('branchOffice')
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('description', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
        return $this->sendResponse($warehouses, 'Warehouses retrieved successfully.');
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
    public function store(CreateWarehouseRequest $request)
    {
        try {
            $warehouse = $this->warehouseRepository->create($request->all());
            $warehouse->load('branchOffice');
            return $this->sendResponse($warehouse, 'Warehouse created successfully.');
        } catch (\Exception $e) {
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
    public function update(UpdateWarehouseRequest $request, $id)
    {
        $warehouse = $this->warehouseRepository->find($id);
        if (empty($warehouse)) {
            return $this->sendError('Warehouse not found');
        }

        try {
            $warehouse = $this->warehouseRepository->update($request->except('id'), $id);
            $warehouse->load('branchOffice');
            return $this->sendResponse($warehouse, 'Warehouse updated successfully.');
        } catch (\Exception $e) {
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
        $warehouse = $this->warehouseRepository->withTrashed()->find($id);
        if (empty($warehouse)) {
            return $this->sendError('Warehouse not found');
        }

        try {
            if ($warehouse->trashed()) {
                $warehouse->restore();
                return $this->sendResponse($warehouse->load('branchOffice'), 'Warehouse restored successfully.');
            } else {
                $warehouse->delete();
                return $this->sendResponse($warehouse->load('branchOffice'), 'Warehouse deleted successfully.');
            }
            
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
