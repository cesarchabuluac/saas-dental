<?php

namespace App\Repositories;

use App\Models\Plan;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class PlanRepository.
 *
 * @package namespace App\Repositories;
 */
class PlanRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'api_id',
        'image',
        'name',
        'amount',
        'currency',
        'interval',
        'product_id',
        'description',
        'limit_doctor',
        'limit_assistant',
        'limit_receptionist',
        'limit_patient',
        'limit_domains',
        'limit_purchases',
        'limit_invoices',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Plan::class;
    }
}
