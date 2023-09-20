<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tariff extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'price',
        'laboratory',
        'laboratory_id',
    ];

    /*
    * Forma Date Human
    */
    public function getUpdatedAtAttribute($value)
    {
        return Carbon::createFromTimeStamp(strtotime($value))->diffForHumans(null, false, false, 3);
    }

    public function laboratory()
    {
        return $this->belongsTo(laboratory::class);
    }
}
