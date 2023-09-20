<?php

namespace App\Repositories;

use App\Models\PaymentPlatform;
use App\Models\Subscription;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class PaymentPlatformRepository
 * @package App\Repositories
 * @version Feb 21, 2023, 11:55 pm UTC
 *
 * @method Role findWithoutFail($id, $columns = ['*'])
 * @method Role find($id, $columns = ['*'])
 * @method Role first($columns = ['*'])
 */
class PaymentPlatformRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'image',
        'subscriptions_enabled',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return PaymentPlatform::class;
    }
}
