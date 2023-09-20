<?php

namespace App\Repositories;

use App\Models\MedicalHistory;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class MedicalHistoryRepository.
 *
 * @package namespace App\Repositories;
 */
class MedicalHistoryRepository extends BaseRepository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'user_id',
        'patient_id',
        'comments',
        'budget_action_id',
        'parent_id',
        'action_type'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return MedicalHistory::class;
    }
}