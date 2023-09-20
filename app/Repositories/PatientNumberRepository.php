<?php

namespace App\Repositories;

use App\Models\PatientNumber;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class NotificationRepository.
 *
 * @package namespace App\Repositories;
 */
class PatientNumberRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id',
        'patient_id',
        'country_calling_code',
        'country_code',
        'e164',
        'format_international',
        'format_national',
        'formatted_number',
        'is_valid',
        'national_number',
        'phone_number',
        'type',
        'uri',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return PatientNumber::class;
    }
}