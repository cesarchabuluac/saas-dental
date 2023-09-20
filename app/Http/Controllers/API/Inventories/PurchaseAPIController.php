<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePurchaseRequest;
use App\Http\Requests\UpdatePurchaseRequest;
use App\Repositories\Inventories\MedicineRepository;
use App\Repositories\Inventories\PurchaseRepository;
use App\Repositories\Inventories\StockRepository;
use App\Repositories\Inventories\WarehouseRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PurchaseAPIController extends Controller
{

    /** @var  MeidcineRepository */
    private $medicineRepository;

    /** @var WarehouseRepository */
    private $warehouseRepository;

    /** @var PurchaseRepository */
    private $purchaseRepository;

    /** @var StockRepository */
    private $stockRepository;

    public function __construct(StockRepository $stockRepository, MedicineRepository $medicineRepository, WarehouseRepository $warehouseRepository, PurchaseRepository $purchaseRepository)
    {        
        $this->medicineRepository = $medicineRepository;
        $this->warehouseRepository = $warehouseRepository;
        $this->purchaseRepository = $purchaseRepository;
        $this->stockRepository = $stockRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchases = $this->purchaseRepository->query()
            ->with(['warehouse', 'supplier', 'user', 'items.stock'])
            ->whereHas('warehouse', function($query) {
                $query->where('name', request('search'));
            })
            ->orWhereHas('supplier', function($query) {
                $query->where('name', request('search'));
            })
            ->orWhere('reference', 'like', '%'.request('search').'%')    
            ->orderBy('purchase_date', 'desc')
            ->paginate(request('perPage'));
        return $this->sendResponse($purchases, 'Purchases retrieved successfully');            
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
    public function store(CreatePurchaseRequest $request)
    {
        
        $input = $request->all();
        $input['purchase_date'] = date('Y-m-d', strtotime($input['purchase_date']));
        $input['items'] = collect($input['items']);
        $input['subtotal'] = 0;
        $input['tax'] = 0;
        $input['discount'] = 0;
        $input['total'] = 0;
        $stocks = [];
        $childs = [];

        foreach ($input['items'] as $item) {
            $input['subtotal'] += $item['subtotal'];
            $input['tax'] += $item['tax'];
            $input['discount'] += $item['discount'];
            $input['total'] += $item['subtotal'] + $item['tax'] - $item['discount'];
            
            $stocks[] = [
                'user_id' => auth()->user()->id,
                'warehouse_id' => $input['warehouse_id'],
                'medicine_id' => $item['medicine_id'],
                'quantity' => $item['quantity'],
            ];

            unset($item['description']);
            $childs[] = $item;
        }
        
        unset($input['items']);
        try {
            
            DB::beginTransaction();
            $purchase = $this->purchaseRepository->create($input);
            $purchase->items()->createMany($childs);             
            
            // Increment Stock
            if($purchase->status == 'received') {
                foreach ($stocks as $key => $stock) {   

                    //decrement quantity from warehouse                    
                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $stock['warehouse_id'],
                        'medicine_id' => $stock['medicine_id'],
                    ])->first();

                    $stocky->increment('quantity', $stock['quantity']);

                    $stocky->movements()->create([
                        'user_id' => $stock['user_id'],
                        'warehouse_id' => $stock['warehouse_id'],
                        'movement_type_id' => 4, // Ticket by purchase
                        'quantity' => $stock['quantity'],
                    ]);
                }
            }

            DB::commit();

            return $this->sendResponse($purchase, 'Purchase saved successfully');
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
        $purchase = $this->purchaseRepository->with(['warehouse', 'supplier', 'user', 'items'])->find($id);
        if (empty($purchase)) {
            return $this->sendError('Purchase not found');
        }
        return $this->sendResponse($purchase, 'Purchase retrieved successfully');
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
    public function update(UpdatePurchaseRequest $request, $id)
    {
        $oldPurchase = $this->purchaseRepository->with(['items'])->find($id);
        if (empty($oldPurchase)) {
            return $this->sendError('Purchase not found');
        }

        $input = $request->except('id', 'deleted_at', 'created_at', 'updated_at');
        $input['purchase_date'] = date('Y-m-d', strtotime($input['purchase_date']));
        $input['items'] = collect($input['items']);
        $input['subtotal'] = 0;
        $input['tax'] = 0;
        $input['discount'] = 0;
        $input['total'] = 0;
        $stocks = [];
        $oldStocks = [];
        $childs = [];
        foreach ($input['items'] as $item) {
            $input['subtotal'] += $item['subtotal'];
            $input['tax'] += $item['tax'];
            $input['discount'] += $item['discount'];
            $input['total'] += $item['subtotal'] + $item['tax'] - $item['discount'];

            if(!isset($item['id'])) {
                $stocks[] = [
                    'medicine_id' => $item['medicine_id'],
                    'quantity' => $item['quantity'],
                ];
            }

            unset($item['id'], $item['deleted_at'], $item['updated_at'], $item['created_at']);
            $childs[] = $item;
        }
        
        unset($input['items']);
        try {
       
            DB::beginTransaction();            
            
            $purchase = $this->purchaseRepository->update($input, $id);
            $purchase->items()->delete();
            $purchase->items()->createMany($childs);    
            
            if ($input['status'] == 'received') {
                foreach ($stocks as $key => $stock) {
                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $purchase->warehouse_id,
                        'medicine_id' => $stock['medicine_id'],
                    ])->first();

                    $stocky->increment('quantity', $stock['quantity']);
                    $stocky->movements()->create([
                        'user_id' => auth()->user()->id,
                        'warehouse_id' => $purchase->warehouse_id,
                        'movement_type_id' => 4, // Ticket by purchase
                        'quantity' => $stock['quantity'],
                    ]);
                }
            }

            if($oldPurchase->status != $request->status) {
                if ($request->status == 'received') {                    
                    foreach ($oldPurchase->items as $key => $stock) {                        
                        
                        $stocky = $this->stockRepository->findWhere([
                            'warehouse_id' => $purchase->warehouse_id,
                            'medicine_id' => $stock['medicine_id'],
                        ])->first();                        
    
                        $stocky->increment('quantity', $stock['quantity']);
                        $stocky->movements()->create([
                            'user_id' => auth()->user()->id,
                            'warehouse_id' => $purchase->warehouse_id,
                            'movement_type_id' => 4, // Ticket by purchase
                            'quantity' => $stock['quantity'],
                        ]);
                    }
                } else {
                    foreach ($oldPurchase->items as $key => $stock) {

                        $stocky = $this->stockRepository->findWhere([
                            'warehouse_id' => $purchase->warehouse_id,
                            'medicine_id' => $stock['medicine_id'],
                        ])->first();

                        $stocky->decrement('quantity', $stock['quantity']);

                        $stocky->movements()->create([
                            'user_id' => auth()->user()->id,
                            'warehouse_id' => $purchase->warehouse_id,
                            'movement_type_id' => 5, // Cancel ticket by purchase
                            'quantity' => $stock['quantity'],
                        ]);   
                    }
                }                
            }
          
            DB::commit();
            return $this->sendResponse($oldPurchase, 'Purchase updated successfully');
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
        $purchase = $this->purchaseRepository->with('items')->find($id);
        if (empty($purchase)) {
            return $this->sendError('Purchase not found');
        }

        try {
            DB::beginTransaction();

            if ($purchase->status == 'received') {
                foreach ($purchase->items as $key => $item) {

                    $stocky = $this->stockRepository->findWhere([
                        'warehouse_id' => $purchase->warehouse_id,
                        'medicine_id' => $item['medicine_id'],
                    ])->first();

                    if($stocky && $stocky->quantity >= $item['quantity'] && $stocky->quantity > 0) {
                        
                        $stocky->decrement('quantity', $item['quantity']);

                        $stocky->movements()->create([
                            'user_id' => auth()->user()->id,
                            'warehouse_id' => $purchase->warehouse_id,
                            'movement_type_id' => 5, // Cancel ticket by purchase
                            'quantity' => $item['quantity'] * -1,
                        ]);

                    } else {
                        DB::rollBack();
                        return $this->sendError('Stock not available', 201);
                    }
                }
            }

            $purchase->items()->delete();
            $purchase->delete();

            DB::commit();
            return $this->sendResponse($purchase, 'Purchase deleted successfully');
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    public function markAsReceived ($id) {
        $purchase = $this->purchaseRepository->with('items')->where(['id' => $id, 'status' => 'pending'])->first();

        if(empty($purchase)) {
            return $this->sendError('Purchase not found or has already been marked as received');
        }

        $stocks = [];

        foreach ($purchase->items as $item) {
            $stocks[] = [
                'medicine_id' => $item['medicine_id'],
                'quantity' => $item['quantity'],
            ];
        }

        try {
            DB::beginTransaction();

            $purchase->update([
                'status' => 'received',
            ]);

            foreach ($stocks as $key => $stock) {
                $stocky = $this->stockRepository->findWhere([
                    'warehouse_id' => $purchase->warehouse_id,
                    'medicine_id' => $stock['medicine_id'],
                ])->first();

                $stocky->increment('quantity', $stock['quantity']);
                $stocky->movements()->create([
                    'user_id' => auth()->user()->id,
                    'warehouse_id' => $purchase->warehouse_id,
                    'movement_type_id' => 4, // Ticket by purchase
                    'quantity' => $stock['quantity'],
                ]);
            }

            DB::commit();

            $purchase->load(['warehouse', 'supplier', 'user', 'items']);
            return $this->sendResponse($purchase, "The purchase has been marked as received therefore it has affected the inventory");

        }catch(Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }
}
