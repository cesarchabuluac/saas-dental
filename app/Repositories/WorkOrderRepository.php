<?php

namespace App\Repositories;

use App\Models\WorkOrder;
use Prettus\Repository\Eloquent\BaseRepository;



/**
 * Class WorkOrderRepository.
 *
 * @package namespace App\Repositories;
 */
class WorkOrderRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'patient',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return WorkOrder::class;
    }
}
