<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalHistory extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    /**
     * New Attributes
     *
     * @var array
     */
    protected $appends = [
        'has_media',
        'custom_date'
    ];

    public function getCustomDateAttribute()
    {
        return Carbon::parse(strtotime($this->created_at))->diffForHumans();
    }
   
    /**
     * Add Media to api results
     * @return bool
     */
    public function getHasMediaAttribute()
    {
        return $this->file ? true : false;
    }

    public function action()
    {
        return $this->belongsTo(BudgetAction::class, 'budget_action_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function patient ()  {
        return $this->belongsTo(Patient::class);
    }
}
