<?php

namespace App\Repositories;

use App\Models\BudgetAction;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface BudgetActionRepository.
 *
 * @package namespace App\Repositories;
 */
class BudgetActionRepository extends BaseRepository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'budget_id',
        'action_id',
        'action_group_id',
        'price',
        'action_type',
        'area',
        'status',
        'medical_history_id',
        'discount',
        'action_name',
        'action_group_name',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return BudgetAction::class;
    }
}
