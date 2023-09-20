<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Warehouse;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class WarehouseRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class WarehouseRepository extends BaseRepository
{
    /*
    * @var array
    */
    protected $fieldSearchable = [
        'branch_office_id',
        'name',
        'description',
    ];
    
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Warehouse::class;
    }  
}
