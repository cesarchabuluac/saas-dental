<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class TaskUserCriteriaCriteria.
 *
 * @package namespace App\Criteria;
 */
class TaskUserCriteria implements CriteriaInterface
{
    /**
     * @var User
     */
    private $userId;
    private $roles = array(1, 2);

    /**
     * OrdersOfUserCriteria constructor.
     */
    public function __construct()
    {
        
    }

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
        if (in_array(auth()->user()->roles[0]->id, $this->roles)) {
            return $model;
        } else {
            return $model->where('user_id', auth()->user()->id);
        }
    }
}
