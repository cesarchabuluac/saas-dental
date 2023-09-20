<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Budget extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = [
        'ns',
        'cdf',
        'label',
        'total_cost',
        'expiration',
        'total_paid',
        'total_debt',
        'has_partials',
        'divided_on',
        'pending_payments',
        'partial_amount'
    ];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('has_patient', function (Builder $builder) {
            $builder->whereHas('patient');
        });
    }

    /**
     * Forma Date Human
     */
    public function getUpdatedAtAttribute($value)
    {
        return Carbon::createFromTimeStamp(strtotime($value))->diffForHumans(null, false, false, 3);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function branch()
    {
        return $this->belongsTo(BranchOffice::class, 'branch_office_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getLabelAttribute()
    {
        $date = Carbon::parse($this->created_at)->format('d/m/Y');
        return $date . ' #' . str_pad($this->id, 5, '0', STR_PAD_LEFT);
    }

    public function getExpirationAttribute()
    {
        $days = !empty(config('settings.budget_expiration')) ? config('settings.budget_expiration') : 30;
        return Carbon::parse($this->created_at)->addDays($days);
    }

    public function getNsAttribute()
    {
        return asset('images/membretes/ns.png');
    }

    public function getCdfAttribute()
    {
        return asset('images/membretes/cdf.png');
    }

    public function budgetActions()
    {
        return $this->hasMany(BudgetAction::class);
    }

    public function actions()
    {
        return $this->belongsToMany(Action::class, 'budget_actions')
            ->withPivot(['price', 'id', 'status', 'area', 'discount', 'action_type']);
    }


    public function clinicalActions()
    {
        return $this->belongsToMany(Action::class, 'budget_actions')
            ->where('action_type', 'clinical')
            ->withPivot('price', 'id', 'area', 'discount', 'status', 'action_type');
    }

    public function laboratoryActions()
    {
        return $this->belongsToMany(LaboratoryAction::class, 'budget_actions', 'budget_id', 'action_id')
            ->where('action_type', 'laboratory')
            ->withPivot('price', 'id', 'area', 'discount', 'status', 'action_type');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }


    public function getActionsIds()
    {
        return BudgetAction::where('budget_id', $this->id)->pluck('id');
    }

    public function getTotalCostAttribute()
    {
        return $this->approved ? $this->total * 1 : 0;
    }

    public function getTotalPaidAttribute()
    {
        if ($this->partial_payments_complete) return $this->total_cost;
        return collect($this->payments)
            ->reduce(function ($carry, $payment) {
                return $carry + $payment->amount;
            }, 0);
    }

    public function getTotalDebtAttribute()
    {
        if ($this->partial_payments_complete) return 0;
        return round($this->total_cost - $this->total_paid, 2);
    }

    public function getFirstPaymentAttribute()
    {
        return $this->payments()->where('has_partials', true)->first();
    }

    public function getHasPartialsAttribute()
    {
        $payment = $this->first_payment;
        if (!$payment) return false;
        return $payment->has_partials == 1;
    }

    public function getDividedOnAttribute()
    {
        $payment = $this->first_payment;
        if (!$payment) return 0;
        return $payment->divided_on;
    }

    public function getPendingPaymentsAttribute()
    {
        $payment = $this->first_payment;
        if (!$payment) return 0;
        $paymentsCount = $payment->partial_payments()->count();
        return $payment->divided_on - $paymentsCount;
    }

    public function getPartialAmountAttribute()
    {
        $payment = $this->first_payment;
        if (!$payment || $payment->divided_on === 0) return 0;
        return round($this->total_cost / $payment->divided_on, 2);
    }

    public function getPartialPaymentsCompleteAttribute()
    {
        $payment = $this->first_payment;
        if (!$payment) return false;
        return $payment->divided_on == $payment->partial_payments()->count();
    }
}
