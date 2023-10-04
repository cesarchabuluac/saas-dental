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

    public function getMethodLabelAttribute()
    {
        $methodTranslations = [
            'cash' => "Efectivo",
            'debit_card' => "Tarjeta de Débito',
            'credit_card' => Tarjeta de Crédito",
            'check' => "Cheque",
            'transfer' => "Transferencia",
        ];

        return $methodTranslations[$this->method] ?? "Desconocido";
    }


    public function partial_payments()
    {
        return $this->hasMany(Payment::class, 'parent_payment');
    }

    public function branch()
    {
        return $this->belongsTo(BranchOffice::class, 'branch_office_id', 'id');
    }

    public function budget(): BelongsTo
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



    public function getTimeElapsedAttribute()
    {
        //    return $this->updated_at->diffForHumans(null, false, false, 3);
    }
   
}
