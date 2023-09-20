<?php

namespace App\Repositories;

use App\Models\SubscriptionOrder;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class SubscriptionRepository
 * @package App\Repositories
 * @version Feb 21, 2023, 12:01 pm UTC
 *
 * @method Role findWithoutFail($id, $columns = ['*'])
 * @method Role find($id, $columns = ['*'])
 * @method Role first($columns = ['*'])
 */
class SubscriptionOrderRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'user_id',
        'plan_id',
        'payment_platform_id',
        'order_id',
        'status',
        'create_time',
        'approval',
        'links',
        'response',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return SubscriptionOrder::class;
    }
}
