<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateAdjustmentRequest;
use App\Repositories\Inventories\AdjustmentRepository;
use App\Repositories\Inventories\MedicineRepository;
use App\Repositories\Inventories\StockRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdjustmentAPIController extends Controller
{

    /** @var  MeidcineRepository */
    private $medicineRepository;

    /** @var AdjustmentRepository */
    private $adjustmentRepository;

    /** @var StockRepository */
    private $stockRepository;

    public function __construct(MedicineRepository $medicineRepository, AdjustmentRepository $adjustmentRepository, StockRepository $stockRepository)
    {
        $this->medicineRepository = $medicineRepository;
        $this->adjustmentRepository = $adjustmentRepository;
        $this->stockRepository = $stockRepository;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $adjustments = $this->adjustmentRepository->query()
            ->with(['warehouse', 'user', 'items'])
            ->whereHas('warehouse', function($query) {
                $query->where('name', request('search'));
            })
            ->orWhere('reference', 'like', '%'.request('search').'%')    
            ->orderBy('date', 'desc')
            ->paginate(request('perPage'));

        return $this->sendResponse($adjustments, 'Adjustments retrieved successfully');
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
    public function store(CreateAdjustmentRequest $request)
    {
        $input = $request->all();
        $input['date'] = date('Y-m-d', strtotime($input['date']));
        $childs = collect($input['items'])->map(function ($item) {
            unset($item['stock'], $item['description']);
            return $item;
        });
        unset($input['items']);

        try {
            DB::beginTransaction();

            $adjustment = $this->adjustmentRepository->create($input);
            $adjustment->items()->createMany($childs);

            $adjustment->items->each(function($item) use ($input){
                if($item['type'] == 'addition') {
                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $input['warehouse_id'],
                        'medicine_id' => $item['medicine_id'],
                    ])->first();
                    $stocky->increment('quantity', $item['quantity']);

                    $stocky->movements()->create([
                        'user_id' => $input['user_id'],
                        'warehouse_id' => $input['warehouse_id'],
                        'movement_type_id' => 38, //Entrada por ajuste
                        'quantity' => $item['quantity'],
                        'comment' => $item['comment'] ?? null,
                    ]);

                } else if ($item['type'] == 'subtraction') {                            
                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $input['warehouse_id'],
                        'medicine_id' => $item['medicine_id'],
                    ])->first();
                    $stocky->decrement('quantity', $item['quantity']);   
                    
                    $stocky->movements()->create([
                        'user_id' => $input['user_id'],
                        'warehouse_id' => $input['warehouse_id'],
                        'movement_type_id' => 40, //Salida por ajuste
                        'quantity' => $item['quantity'] * -1,
                        'comment' => $item['comment'] ?? null,
                    ]);
                } else {
                    DB::rollBack();
                    return $this->sendError('Failed to create adjustment');
                }
            });   
            
            DB::commit();

            return $this->sendResponse($adjustment, 'Adjustment created successfully');
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
        $adjustment = $this->adjustmentRepository->with(['warehouse', 'user', 'items.stock'])->find($id);
        if (empty($adjustment)) {
            return $this->sendError('Adjustment not found');
        }

        return $this->sendResponse($adjustment, 'Adjustment retrieved successfully');
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $adjustment = $this->adjustmentRepository->with('items')->find($id);

        if (empty($adjustment)) {
            return $this->sendError('Adjustment not found');
        }

        try {
            DB::beginTransaction();

            $adjustment->items->each(function($item) use ($adjustment){
                if($item['type'] == 'addition') {
                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $adjustment->warehouse_id,
                        'medicine_id' => $item['medicine_id'],
                    ])->first();

                    if ($stocky->quantity >= $item['quantity']) {
                        $stocky->decrement('quantity', $item['quantity']);
                        $stocky->movements()->create([
                            'user_id' => $adjustment->user_id,
                            'warehouse_id' => $adjustment->warehouse_id,
                            'movement_type_id' => 39, //Anulacion entrada ajuste inv. fisico
                            'quantity' => $item['quantity'] * -1,
                            'comment' => 'Anulación de entrada por ajuste',
                        ]);
                    } else {
                        DB::rollBack();
                        return $this->sendError('No se puede eliminar el ajuste, la cantidad de medicamentos es menor a la cantidad de ajuste');
                    }

                } else if ($item['type'] == 'subtraction') {                            
                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $adjustment->warehouse_id,
                        'medicine_id' => $item['medicine_id'],
                    ])->first();
                    $stocky->increment('quantity', $item['quantity']);   
                    
                    $stocky->movements()->create([
                        'user_id' => $adjustment->user_id,
                        'warehouse_id' => $adjustment->warehouse_id,
                        'movement_type_id' => 41, //Anulación de salida por ajuste
                        'quantity' => $item['quantity'],
                        'comment' => 'Anulación de salida por ajuste',
                    ]);
                } else {
                    DB::rollBack();
                    return $this->sendError('Error al eliminar el ajuste');
                }

                $item->delete();
            });   
            
            $adjustment->delete();
            DB::commit();

            return $this->sendResponse($adjustment, 'Adjustment deleted successfully');
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }
}
