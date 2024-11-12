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
        // Obtener los IDs de los roles del usuario
        $userRoleIds = auth()->user()->roles->pluck('id')->toArray();

        // Verificar si el usuario tiene al menos uno de los roles requeridos
        if (array_intersect($userRoleIds, $this->roles)) {
            // El usuario tiene al menos uno de los roles requeridos
            return $model;
        } else {
            // El usuario no tiene ninguno de los roles requeridos, aplicar filtro
            return $model->where('user_id', auth()->user()->id);
        }

        // if (in_array(auth()->user()->roles[0]->id, $this->roles)) {
        //     return $model;
        // } else {
        //     return $model->where('user_id', auth()->user()->id);
        // }
    }
}
