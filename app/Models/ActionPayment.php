<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class ActionPayment extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = ['custom_payment_date'];

    public function getCustomPaymentDateAttribute () {
        return Carbon::parse($this->payment_date)->format('Y-m-d');
    }

    public function payment () : BelongsTo
    {
        return $this->belongsTo(Payment::class, 'payment_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function doctor()
    {
        return $this->belongsTo(User::class, 'professional_id');
    }

    public function professional()
    {
        return $this->belongsTo(User::class, 'professional_id');
    }

    public function payments() {
        return  $this->hasMany(Payment::class, 'id');
    }

    public function actions () {
        return $this->belongsTo(BudgetAction::class, 'budget_action_id', 'id');
    }

    public function budgetAction () : BelongsTo
    {
        return $this->belongsTo(BudgetAction::class, 'budget_action_id', 'id');
    }
}
