<?php

namespace App\Repositories;

use App\Models\Anamnesi;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Interface AnamnesiRepository.
 *
 * @package namespace App\Repositories;
 */
class AnamnesiRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;
    
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