<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Adjustment;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class AdjustmentRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class AdjustmentRepository extends BaseRepository
{

    protected $fieldSearchable = [
        'user_id',
        'warehouse_id',
        'date',
        'reference',
        'note',
    ];
    
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Adjustment::class;
    }   
}
