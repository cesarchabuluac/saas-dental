<?php

namespace App\Repositories;

use App\Models\Anamnesi;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface AnamnesiRepository.
 *
 * @package namespace App\Repositories;
 */
class AnamnesiRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'patient_id',
        'first_reason_consultation',
        'medical_history',
        'allergies',
        'medicines',
        'habits',
        'family_background',
        'others',
        'pregnancy',
        'coagulation_problems',
        'local_analgesic_problems',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Anamnesi::class;
    }
}