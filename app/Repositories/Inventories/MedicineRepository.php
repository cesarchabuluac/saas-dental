<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Medicine;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class MedicineRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class MedicineRepository extends BaseRepository
{

    /**
     * @var array
    */
    protected $fieldSearchable = [
        'name' => 'like',
        'description' => 'like',
        'sku' => 'like',
        'brand_id',
        'category_id',
        'subcategory_id',
        // 'supplier_id',
        // 'warehouse_id',
        'unit_id',
        'is_taxable',
        'manage_stock',
        'stock_min',
        'price',
        'tax',
        'expiration_date',
    ];
    
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Medicine::class;
    }
}
