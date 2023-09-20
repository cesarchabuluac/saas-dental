<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Check extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = ['amount', 'past_due', 'expiration_days'];

    /**
     * Forma Date Human
     */
    public function getUpdatedAtAttribute($value)
    {
        return Carbon::createFromTimeStamp(strtotime($value))->diffForHumans(null, false, false, 3);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class, 'id', 'payment_id');
    }

    public function getAmountAttribute()
    {
        return $this->payment->amount;
    }

    public function getPastDueAttribute() {
        return Carbon::createFromTimeStamp(strtotime($this->date))->diffForHumans(null, false, false, 3);
    }

    public function getExpirationDaysAttribute() { 
        return Carbon::parse($this->date)->diffInDays(Carbon::now());
    }
}
