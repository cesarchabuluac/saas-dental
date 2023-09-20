<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTransferRequest;
use App\Repositories\Inventories\MedicineRepository;
use App\Repositories\Inventories\TransferRepository;
use App\Repositories\Inventories\StockRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransferAPIController extends Controller
{

    /** @var  MeidcineRepository */
    private $medicineRepository;

    /** @var  TransferRepository */
    private $transferRepository;

    /** @var StockRepository */
    private $stockRepository;

    public function __construct(TransferRepository $transferRepository, MedicineRepository $medicineRepository, StockRepository $stockRepository)
    {
        $this->medicineRepository = $medicineRepository;
        $this->transferRepository = $transferRepository;
        $this->stockRepository = $stockRepository;
    }    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transfers = $this->transferRepository->query()
            ->with(['fromWarehouse', 'toWarehouse', 'user', 'items'])
            ->whereHas('fromWarehouse', function($query) {
                $query->where('name', request('search'));
            })
            ->whereHas('toWarehouse', function($query) {
                $query->where('name', request('search'));
            })
            ->orWhere('reference', 'like', '%'.request('search').'%')    
            ->orderBy('transfer_date', 'desc')
            ->paginate(request('perPage'));

        return $this->sendResponse($transfers, 'Transfers retrieved successfully');    
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
    public function store(CreateTransferRequest $request)
    {
        $input = $request->all();
        $input['transfer_date'] = date('Y-m-d', strtotime($input['transfer_date']));
        $childs = collect($input['items'])->map(function ($item) {
            unset($item['stock'], $item['description']);
            return $item;
        });
        $input['user_id'] = auth()->user()->id;
        // $input['subtotal'] = 0;
        // $input['tax'] = 0;
        // $input['discount'] = 0;
        // $input['total'] = 0;
        $stocks = [];
        unset($input['items']);

        foreach ($request->items as $item) {            
            $stocks[] = [
                'user_id' => auth()->user()->id,
                'from_warehouse_id' => $input['from_warehouse_id'],
                'to_warehouse_id' => $input['to_warehouse_id'],
                'medicine_id' => $item['medicine_id'],
                'quantity' => $item['quantity'],
            ];
        }

        try {
            DB::BeginTransaction();

            $transfer = $this->transferRepository->create($input);
            $transfer->items()->createMany($childs);

            if($input['status'] == 'completed'){

                foreach ($stocks as $stock) {
                    
                    //Decrease stock from from_warehouse
                    $fromStock = $this->stockRepository->query()
                        ->where('warehouse_id', $stock['from_warehouse_id'])
                        ->where('medicine_id', $stock['medicine_id'])
                        ->first();

                    if ($fromStock->quantity >= $item['quantity']) {
                        $fromStock->decrement('quantity', $stock['quantity']);
                        $fromStock->movements()->create([
                            'user_id' => $stock['user_id'],
                            'warehouse_id' => $stock['from_warehouse_id'],
                            'movement_type_id' => 64, //Salida por transferencia
                            'quantity' => $stock['quantity'] * -1,
                            'comment' => 'Salida por transferencia',
                        ]);                           
                        
                    } else {
                        DB::rollback();
                        return $this->sendError('Stock not enough');
                    }

                    //Increase stock to to_warehouse
                    $toStock = $this->stockRepository->query()
                        ->where('warehouse_id', $stock['to_warehouse_id'])
                        ->where('medicine_id', $stock['medicine_id'])
                        ->first();
                    
                    if ($toStock) {

                        $toStock->increment('quantity', $stock['quantity']);
                        $toStock->movements()->create([
                            'user_id' => $stock['user_id'],
                            'warehouse_id' => $stock['to_warehouse_id'],
                            'movement_type_id' => 8, //Entrada por transferencia
                            'quantity' => $stock['quantity'],
                            'comment' => 'Entrada por transferencia',
                        ]);                           
                        
                    } else {
                        $toStock = $this->stockRepository->create([
                            // 'user_id' => $stock['user_id'],
                            'warehouse_id' => $stock['to_warehouse_id'],
                            'medicine_id' => $stock['medicine_id'],
                            'quantity' => $stock['quantity'],
                        ]);
                        $toStock->movements()->create([
                            'user_id' => $stock['user_id'],
                            'warehouse_id' => $stock['to_warehouse_id'],
                            'movement_type_id' => 8, //Entrada por transferencia
                            'quantity' => $stock['quantity'],
                            'comment' => 'Entrada por transferencia',
                        ]);                           
                    }
                }
            }            

            DB::commit();

            return $this->sendResponse($transfer, 'Transfer created successfully');
            
        } catch (Exception $e) {
            DB::rollback();
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
        $transfer = $this->transferRepository->query()
            ->with(['fromWarehouse', 'toWarehouse', 'user', 'items.medicine', 'items.stock'])
            ->find($id);

        if (empty($transfer)) {
            return $this->sendError('Transfer not found');
        }

        return $this->sendResponse($transfer, 'Transfer retrieved successfully');
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
        $transfer = $this->transferRepository->with('items')->find($id);

        if (empty($transfer)) {
            return $this->sendError('Transfer not found');
        }

        try {
            DB::BeginTransaction();

            if($transfer->status == 'completed') {
                foreach ($transfer->items as $item) {
                    
                    $stockIn = $this->stockRepository->query()
                        ->where('warehouse_id', $transfer->from_warehouse_id)
                        ->where('medicine_id', $item->medicine_id)
                        ->first();

                    $stockIn->increment('quantity', $item->quantity);
                    $stockIn->movements()->create([
                        'user_id' => auth()->user()->id,
                        'warehouse_id' => $transfer->from_warehouse_id,
                        'movement_type_id' => 65, //Anulacion salida por transferencia
                        'quantity' => $item->quantity,
                        'comment' => 'Anulacion salida por transferencia',
                    ]); 

                    $stockOut = $this->stockRepository->query()
                        ->where('warehouse_id', $transfer->to_warehouse_id)
                        ->where('medicine_id', $item->medicine_id)
                        ->first();

                    if ($stockOut && $stockOut->quantity >= $item->quantity && $stockOut->quantity > 0) {
                        $stockOut->decrement('quantity', $item->quantity);
                        $stockOut->movements()->create([
                            'user_id' => auth()->user()->id,
                            'warehouse_id' => $transfer->to_warehouse_id,
                            'movement_type_id' => 9, //Anulacion entrada por transferencia
                            'quantity' => $item->quantity * -1,
                            'comment' => 'Anulacion entrada por transferencia',
                        ]); 
                    } else {
                        DB::rollback();
                        return $this->sendError('Insufficient stock', 201);
                    }
                }
            }

            $transfer->items()->delete();
            $transfer->delete();

            DB::commit();

            return $this->sendResponse($id, 'Transfer deleted successfully');
            
        } catch (Exception $e) {
            DB::rollback();
            return $this->sendError($e->getMessage());
        }
    }
}
