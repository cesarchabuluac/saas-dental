<?php

namespace App\Repositories;

use App\Models\AppointmentLog;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class AppoinmentLogRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class AppointmentLogRepository extends BaseRepository
{
   
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'appointment_id',
        'professional_id',
        'patient_id',
        'user_id',
        'comments',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AppointmentLog::class;
    }   
    
}
