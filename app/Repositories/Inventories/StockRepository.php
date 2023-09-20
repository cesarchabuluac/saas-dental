<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Stock;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class StockRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class StockRepository extends BaseRepository
{

    public $fieldSearchable = [
        'warehouse_id',
        'medicine_id',        
        'quantity',
    ];
    
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Stock::class;
    }  
    
    public function decrementStock($warehouse_id, $medicine_id, $quantity){
        return $this->model->where('warehouse_id', $warehouse_id)
            ->where('medicine_id', $medicine_id)
            ->decrementStock($quantity);
    }
}
