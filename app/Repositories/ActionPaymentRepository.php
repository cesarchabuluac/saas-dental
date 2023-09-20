<?php

namespace App\Repositories;

use App\Models\ActionPayment;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface ActionPaymentRepository.
 *
 * @package namespace App\Repositories;
 */
class ActionPaymentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'payment_id',
        'budget_action_id',
        'user_id',
        'professional_id',
        'amount',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ActionPayment::class;
    }
}
