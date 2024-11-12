<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Laravel\Scout\Searchable;


class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at', 'birthday'];
    protected $guarded = [];

    /**
     * New Attributes
     *
     * @var array
     */
    protected $appends = [        
        'whatsapp',
        'full_name',
        'has_media',
        'total_cost',
        'total_debt',
        'total_paid',
        'last_paid',
        'confirmed_appointments',
        'assisted_appointments',
        'approved_budgets',
        'with_budgets',
        'with_appointments',

        'total_canceled',
        'total_confirmed',
        'total_pending',
        'total_assisted',
        'total_unassisted',

        'total_budget',
        'total_budget_approved',

    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function getTotalBudgetAttribute () {
        return $this->budget()->count();
    }

    public function getTotalBudgetApprovedAttribute () {
        return $this->budget()->where('approved', 1)->count();
    }

    public function getTotalCanceledAttribute()
    {
        return $this->appointments()->where('state', 'canceled')->count();
    }

    public function getTotalConfirmedAttribute()
    {
        return $this->appointments()->where('state', 'confirmed')->count();
    }

    public function getTotalPendingAttribute()
    {
        return $this->appointments()->where('state', 'pending')->count();
    }

    public function getTotalAssistedAttribute()
    {
        return $this->appointments()->where('state', 'assisted')->count();
    }

    public function getTotalUnassistedAttribute()
    {
        return $this->appointments()->where('state', 'unassisted')->count();
    }

    public function getAssistedAppointmentsAttribute()
    {
        return $this->appointments()->where('state', 'assisted')->count() > 0 ? 1 : 0;
    }

    public function getWithBudgetsAttribute()
    {
        return $this->budget()->count() > 0 ? 1 : 0;
    }

    public function getApprovedBudgetsAttribute()
    {
        return $this->budget()->where('approved', true)->count() > 0 ? 1 : 0;
    }

    public function getConfirmedAppointmentsAttribute()
    {
        return $this->appointments()->where('state', 'confirmed')->count() > 0 ? 1 : 0;
    }

    public function getWithAppointmentsAttribute()
    {
        return $this->appointments()->count() > 0 ? 1 : 0;
    }   
   

    /**
     * Add Media to api results
     * @return bool
     */
    public function getHasMediaAttribute()
    {
        return $this->avatar ? true : false;
    }


    public function getFullName()
    {
        return $this->name . ' ' . $this->last_name . ' ' . $this->mother_last_name;
    }

    public function getFullNameAttribute()
    {
        return $this->name . ' ' . $this->last_name . ' ' . $this->mother_last_name;
    }

    public function getNextAppointments()
    {
        return $this->hasMany(Appointment::class)
            ->join('users', 'appointments.user_id', '=', 'users.id')
            ->whereDate('date', '>=', date('Y-m-d H:i:s'))
            ->orderBy('date')->select('users.name', 'appointments.*');
    }

    /**
     * Forma Date Human
     */
    public function getUpdatedAtAttribute($value)
    {
        return Carbon::createFromTimeStamp(strtotime($value))->diffForHumans();
    }

    public function user()
    {
        return $this->belongsTo(User::class)->withTrashed();
    }

    public function mobile()
    {
        return $this->hasOne(PatientNumber::class);
    }

    public function anamnesi()
    {
        return $this->hasOne(Anamnesi::class, 'patient_id');
    }

    public function budget()
    {
        return $this->hasMany(Budget::class);
    }

    public function budgets()
    {
        return $this->hasMany(Budget::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class, 'patient_id');
    }

    public function histories()
    {
        return $this->hasMany(MedicalHistory::class)->orderBy('created_at', 'DESC');
    }

    public function getTotalCostAttribute()
    {
        return collect($this->budgets)
            ->reduce(function ($carry, $budget) {
                return $carry + $budget->total_cost;
            }, 0);
    }

    public function getTotalDebtAttribute()
    {
        return collect($this->budgets)
            ->reduce(function ($carry, $budget) {
                return $carry + $budget->total_debt;
            }, 0);
    }

    public function getTotalPaidAttribute()
    {
        return collect($this->budgets)
            ->reduce(function ($carry, $budget) {
                return $carry + $budget->total_paid;
            }, 0);
    }

    public function getLastPaidAttribute()
    {
        $data = DB::table('budgets')
            ->join('payments', 'budgets.id', '=', 'payments.budget_id')
            ->where('budgets.patient_id', $this->id)
            ->orderBy('payments.created_at', 'DESC')
            ->first();
        if (!empty($data)) {
            return Carbon::parse($data->created_at)->format('d/m/Y H:i a') . " " . getPrice($data->amount);
        } else {
            return " --- " . getPrice(0);
        }
    }

    public function getWhatsappAttribute()
    {
        return $this->mobile ? $this->mobile->e164 : $this->cellphone;
    }

    public function orders()
    {
        return $this->hasMany(WorkOrder::class, 'patient_id');
    }

    public function documentType () : HasOne
    {
        return $this->hasOne(DocumentType::class, 'document_type_id', 'id');
    }
}
