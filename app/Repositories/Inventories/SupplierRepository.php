<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Supplier;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class SupplierRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class SupplierRepository extends BaseRepository
{
    
    /**
     * @var array
    */
    protected $fieldSearchable = [
        'name' => 'like',
        'email' => 'like',
        'phone' => 'like',
        'address' => 'like',
        'city' => 'like',
        'state' => 'like',
        'country' => 'like',
        'zip' => 'like',
    ];
    
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Supplier::class;
    }
}
