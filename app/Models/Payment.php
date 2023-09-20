<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = [
        'time_elapsed',
        'method_label',
    ];

    public function getMethodLabelAttribute () {
        switch ($this->method) {
            case "cash":
                return __('lang.payments.methods.cash');
            case "debit_card":
                return __('lang.payments.methods.debit_card');
            case "credit_card":
                return __('lang.payments.methods.credit_card');
            case "check":
                return __('lang.payments.methods.check');
            case "transfer":
                return __('lang.payments.methods.transfer');
        }
    }

    public function partial_payments()
    {
        return $this->hasMany(Payment::class, 'parent_payment');
    }

    public function branch()
    {
        return $this->belongsTo(BranchOffice::class, 'branch_office_id', 'id');
    }

    public function budget() : BelongsTo
    {
        return $this->belongsTo(Budget::class, 'budget_id', 'id');
    }

    public function actionPayments()
    {
        return $this->hasMany(ActionPayment::class, 'payment_id');
    }

    public function check_data()
    {
        return $this->belongsTo(Check::class, 'check_id');
    }

    public function check()
    {
        return $this->hasOne(Check::class, 'payment_id');
    }


    /**
     * Forma Date Human
     **/
    // public function getUpdatedAtAttribute($value)
    // {
    //     return Carbon::createFromTimeStamp($value)->diffForHumans();
    // }

    public function getTimeElapsedAttribute()
    {
    //    return $this->updated_at->diffForHumans(null, false, false, 3);
    }

    // public function getMethodAttribute($value)
    // {
    //     switch ($value) {
    //         case "cash":
    //             return __('lang.payment_method_cash');
    //         case "debit_card":
    //             return __('lang.payment_method_debit_card');
    //         case "credit_card":
    //             return __('lang.payment_method_credit_card');
    //         case "check":
    //             return __('lang.payment_method_check');
    //         case "transfer":
    //             return __('lang.payment_method_transfer');
    //     }
    // }

    // public function getCheckPaidAttribute($value) {
    //     if ($value == true) {
    //         return "<span class='badge rounded-pill badge-light-success text-capitalized'>" . __('lang.yes') . "</span>";
    //     } else {
    //         return "<span class='badge rounded-pill badge-light-danger text-capitalized'>" . __('lang.no') . "</span>";
    //     }
    // }
}
