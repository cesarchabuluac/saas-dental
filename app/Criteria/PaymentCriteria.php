<?php

namespace App\Criteria;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class PaymentCriteria.
 *
 * @package namespace App\Criteria;
 */
class PaymentCriteria implements CriteriaInterface
{
    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        if (auth()->user()->hasRole(4)) {
            return $model->join('action_payments', 'payments.id', 'action_payments.payment_id')
            ->where('action_payments.professional_id', auth()->user()->id);
        }
        return $model; 
    }
}
