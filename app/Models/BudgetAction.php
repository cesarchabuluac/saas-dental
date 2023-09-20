<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class BudgetAction extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
    protected $appends = ['subtotal', 'paid', 'debt', 'action_name', 'professional', 'has_previous_professional', 'payment_id', 'amount'];

    public function budget () : BelongsTo
    {
        return $this->belongsTo(Budget::class, 'budget_id');
    }

    public function action()
    {
        return $this->belongsTo(Action::class, 'action_id');
    }

    public function laboratoryAction()
    {
        return $this->belongsTo(LaboratoryAction::class, 'action_id');
    }

    public function doctor () {
        return $this->belongsTo(ActionPayment::class, 'professional_id');
    }

    public function clinicalPayments ()
    {
        return $this->hasMany(ActionPayment::class, 'budget_action_id')
        ->join('budget_actions', 'action_payments.budget_action_id', '=', 'budget_actions.id')
        ->where('budget_actions.action_type', '=', 'clinical')->with('payment');  
    }

    public function laboratoryPayments ()
    {
        return $this->hasMany(ActionPayment::class, 'budget_action_id')
        ->join('budget_actions', 'action_payments.budget_action_id', '=', 'budget_actions.id')
        ->where('budget_actions.action_type', '=', 'laboratory')->with('payment');
    }

    public function getActionNameAttribute ()
    {
        if ($this->action_type == 'clinical') {
            if ($this->action) {
                return $this->action->name;
            } else {
                return '';
            }
        } else {
            if ($this->laboratoryAction) {
                return $this->laboratoryAction->name;
            } else {
                return '';
            }
        }
    }

    public function getPaidAttribute ()
    {
        if ($this->action_type == 'clinical') {
            $payments = $this->clinicalPayments;
        } else {
            $payments = $this->laboratoryPayments;
        }
        return collect($payments)->sum('amount');
    }

    public function getProfessionalAttribute()
    {
        $payment = $this->clinicalPayments->first();
        if (!$payment) return null;
        return $payment->professional;
    }

    public function getPaymentIdAttribute()
    {
        $payment = $this->clinicalPayments->last();
        if (!$payment) return null;
        return $payment->payment_id;
    }

    public function getAmountAttribute()
    {
        $payment = $this->clinicalPayments->last();
        if (!$payment) return null;
        return $payment->amount;
    }

    public function getHasPreviousProfessionalAttribute()
    {
        return $this->professional !== null;
    }

    public function getDebtAttribute ()
    {
        return $this->subtotal - $this->paid;
    }

    public function getSubtotalAttribute ()
    {
        return $this->price - $this->discount;
    }
}
