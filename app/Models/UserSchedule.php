<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserSchedule extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $fillable = [
        'id',
        'user_id',
        'day',
        'day_of_week',
        'start_time',
        'end_time',
        'active',
    ];

    protected $casts = [
        'active' => 'boolean',
        // 'start_time' => 'datetime:H:i',
        // 'end_time' => 'datetime:H:i'
    ];

    public function user () : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
