<?php

namespace App\Http\Controllers\API\Inventories;

use App\Entities\Inventories\Warehouse;
use App\Exports\MedicineReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateMedicineRequest;
use App\Http\Requests\UpdateMedicineRequest;
use App\Repositories\Inventories\MedicineRepository;
use App\Repositories\Inventories\WarehouseRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class MedicineAPIController extends Controller
{

    /** @var  MeidcineRepository */
    private $medicineRepository;

    /** @var WarehouseRepository */
    private $warehouseRepository;

    public function __construct(MedicineRepository $medicineRepository, WarehouseRepository $warehouseRepository)
    {
        $this->medicineRepository = $medicineRepository;
        $this->warehouseRepository = $warehouseRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchTerm = '%' . $request->search . '%';
        $sortDesc = $request->boolean('sortDesc') ? 'ASC' : 'DESC';
        $sortBy = $request->sortBy ?? "name";
        $isAll = $request->boolean('all');
        $perPage = $request->perPage ?? 10;

        if ($request->boolean('isDownload')) {
            return Excel::download(new MedicineReport($request), 'Medicines.xlsx');
        }

        $query = $this->medicineRepository->query()
            ->with(['unit', 'brand', 'category', 'subCategory', 'stocks.warehouse'])
            ->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', '%' . $searchTerm . '%')
                    ->orWhere('sku', 'like', '%' . $searchTerm . '%');
            })
            ->when($request->filled('unit_id'), fn ($query) => $query->where('unit_id', $request->unit_id))
            ->when($request->filled('brand_id'), fn ($query) => $query->where('brand_id', $request->brand_id))
            ->when($request->filled('category_id'), fn ($query) => $query->where('category_id', $request->patient_id));
            // ->when($request->filled('warehouse_id'), function ($query) use ($request) {
            //     return $query->whereHas('stocks', function ($query) use ($request) {
            //         return $query->where('warehouse_id', $request->warehouse_id);
            //     });
            // });

        if ($isAll) {
            $medicines = $query->orderBy('name', 'ASC')->get();
        } else {
            $medicines = $query->orderBy($sortBy, $sortDesc)
                ->withTrashed()
                ->paginate($perPage);
        }

        return $this->sendResponse($medicines, 'Medicines retrieved successfully');
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
    public function store(CreateMedicineRequest $request)
    {
        $warehouses = $this->warehouseRepository->withTrashed()->get(['id']);

        try {
            DB::beginTransaction();
            $medicine = $this->medicineRepository->create($request->all());


            //Create stocks 
            $stocks = [];
            foreach ($warehouses as $warehouse) {
                $stocks[] = [
                    'medicine_id' => $medicine->id,
                    'warehouse_id' => $warehouse['id'],
                    'quantity' => 0,
                ];
            }
            $medicine->stocks()->createMany($stocks);

            $medicine->load(['unit', 'brand', 'category', 'subCategory']);
            DB::commit();
            return $this->sendResponse($medicine, 'Medicine saved successfully');
        } catch (Exception $e) {
            DB::rollBack();
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
        $medicine = $this->medicineRepository->find($id);
        if (empty($medicine)) {
            return $this->sendError('Medicine not found');
        }

        return $this->sendResponse($medicine, 'Medicine retrieved successfully');
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
    public function update(UpdateMedicineRequest $request, $id)
    {
        $medicine = $this->medicineRepository->find($id);
        if (empty($medicine)) {
            return $this->sendError('Medicine not found');
        }

        try {
            DB::beginTransaction();
            $medicine = $this->medicineRepository->update($request->except('id'), $id);
            $medicine->load(['unit', 'brand', 'category', 'subCategory']);
            DB::commit();
            return $this->sendResponse($medicine, 'Medicine updated successfully');
        } catch (Exception $e) {
            DB::rollBack();
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
        $medicine = $this->medicineRepository->withTrashed()->find($id);
        if (empty($medicine)) {
            return $this->sendError('Medicine not found');
        }

        try {

            DB::beginTransaction();
            if ($medicine->deleted_at) {
                $medicine->restore();
                DB::commit();
                return $this->sendResponse($medicine->load(['unit', 'brand', 'category', 'subCategory']), 'Medicine restored successfully');
            } else {
                $medicine->delete();
                DB::commit();
                return $this->sendResponse($medicine->load(['unit', 'brand', 'category', 'subCategory']), 'Medicine deleted successfully');
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }
}
