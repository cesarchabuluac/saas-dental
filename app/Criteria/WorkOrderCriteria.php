<?php

namespace App\Criteria;

use Illuminate\Http\Request;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class WorkOrderCriteriaCriteria.
 *
 * @package namespace App\Criteria;
 */
class WorkOrderCriteria implements CriteriaInterface
{
    /**
     * @var array
     */
    private $request;

    /**
     * NearCriteria constructor.
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
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
        if ($this->request->has('filter')) {
            if ($this->request->filter === 'process') {
                return $model->where('status', 'En proceso');
            } else if ($this->request->filter === 'sending') {
                return $model->where('status', 'Enviado');
            } else if ($this->request->filter === 'received') {
                return $model->where('status', 'Recibido');
            } else {
                return $model;
            }
        }
        return $model;
    }
}
