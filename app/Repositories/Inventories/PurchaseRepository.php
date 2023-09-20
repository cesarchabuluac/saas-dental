<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Purchase;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class PurchaseRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class PurchaseRepository extends BaseRepository
{    
    public $fieldSearchable = [
        'supplier_id',
        'user_id',
        'reference',
        'purchase_date',
        'comments',
        'status',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */    
    public function model()
    {
        return  Purchase::class;
    }
    
}
