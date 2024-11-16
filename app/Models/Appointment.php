<?php

namespace App\Models;

use Attribute;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Log;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'patient_id',
        'branch_office_id',
        'date',
        'intern_observation',
        'patient_name',
        'patient_phone',
        'patient_rut',
        'patient_email',
        'state',
        'duration',
    ];

    /**
     * New Attributes
     *
     * @var array
     */
    protected $appends = [
        'color',
        'date_start',
        'date_end',
        'custom_date',
        'custom_date_diff_humans',
        'custom_duration',
        'folio',
    ];


    protected static function boot()
    {
        parent::boot();

        // Event to register log when creating an appointment
        static::created(function ($appointment) {
            $logMessage = __('lang.appointment_state_' . $appointment->state);
            $appointment->createAppointmentLog($logMessage);
        });


        // Event to register log when deleting an appointment
        static::deleted(function ($appointment) {
            $logMessage = __('lang.appointment_state_deleted');
            $appointment->createAppointmentLog($logMessage);
        });
    }

    public function getFolioAttribute()
    {
        return getFolio($this->id);
    }

    
    public function getCustomDurationAttribute()
    {
        $date = new \DateTime($this->date);
        $dateStart = $date->format('Y-m-d\TH:i:s');
        if ($this->duration != null)
            $duration = $this->duration * 15;
        else
            $duration = 15;
        $dateEnd = $date->add(new \DateInterval('PT' . $duration . 'M'));
        $dateEnd = $dateEnd->format('Y-m-d\TH:i:s');
        return $dateEnd;
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'id');
    }

    public function doctor()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function branch()
    {
        return $this->belongsTo(BranchOffice::class, 'branch_office_id');
    }

    public function appointmentLogs()
    {
        return $this->hasMany(AppointmentLog::class)->orderBy('created_at', 'DESC');
    }

    public function logs()
    {
        return $this->hasMany(AppointmentLog::class)->orderBy('created_at', 'DESC');;
    }

    // Método para crear el log de cita
    public function createAppointmentLog($logMessage)
    {
        $this->logs()->create([
            'professional_id' => $this->user_id,
            'patient_id' => $this->patient_id,
            'user_id' => auth()->user()->id,
            'state' => $this->state,
            'comments' => __('lang.appointment_log_comments', ['operator' => $logMessage]),
        ]);
    }

    public function getCustomDateAttribute()
    {
        return Carbon::parse($this->date)->translatedFormat(config('settings.date_format'));
    }

    public function getCustomDateDiffHumansAttribute()
    {
        return Carbon::createFromTimeStamp(strtotime($this->date))->diffForHumans();
    }

    public function getDateStartAttribute()
    {
        $date = new \DateTime($this->date);
        return $date->format('Y-m-d\TH:i:s');
    }

    public function getDateEndAttribute()
    {
        $date = new \DateTime($this->date);
        if ($this->duration != null)
            $duration = $this->duration * 15;
        else
            $duration = 15;
        $dateEnd = $date->add(new \DateInterval('PT' . $duration . 'M'));
        return $dateEnd->format('Y-m-d\TH:i:s');
    }

    public function getColorAttribute()
    {
        $color = 'white';
        switch ($this->state) {
            case 'confirmed':
                $color = '#AAFFBD';
                break;
            case 'pending':
                $color = '#FFD185';
                break;
            case 'canceled':
                $color = '#FFA6C1';
                break;
        }
        return $color;
    }
}
