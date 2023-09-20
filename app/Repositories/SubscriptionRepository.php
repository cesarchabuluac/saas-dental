<?php

namespace App\Repositories;

use App\Models\Subscription;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class SubscriptionRepository
 * @package App\Repositories
 * @version Feb 21, 2023, 11:56 pm UTC
 *
 * @method Role findWithoutFail($id, $columns = ['*'])
 * @method Role find($id, $columns = ['*'])
 * @method Role first($columns = ['*'])
 */
class SubscriptionRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'active_until',
        'user_id',
        'plan_id',
        'subscription_order_id',
        'order_id',
        'response',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Subscription::class;
    }
}
