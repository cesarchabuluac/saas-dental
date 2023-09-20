<?php

namespace App\Criteria;

use App\Models\Tenant;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class TenantCriteria.
 *
 * @package namespace App\Criteria;
 */
class TenantCriteria implements CriteriaInterface
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
        if (Tenant::isMainDomain()) {
            return $model;
        }        
        return $model->whereNotIn('id', [1]);
    }
}
