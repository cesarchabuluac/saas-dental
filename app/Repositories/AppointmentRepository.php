<?php

namespace App\Repositories;

use App\Models\Appointment;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class AppoinmentRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class AppointmentRepository extends BaseRepository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'user_id',
        'patient_id',
        'branch_office_id',
        'date',
        'patient_name',
        'patient_phone',
        'patient_rut',
        'patient_email',
        'state',
        'duration',
        'notified',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Appointment::class;
    }
}
