<?php

namespace App\Models\Inventories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Adjustment extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_adjustments';

    protected $fillable = [
        'user_id',
        'warehouse_id',
        'date',
        'reference',
        'note',
    ];

    protected $dates = [
        'date',
    ];

    public function getDateAttribute ($value) {
        return Carbon::parse($value)->format('Y-m-d');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function items()
    {
        return $this->hasMany(AdjustmentItem::class, 'adjustment_id');
    }
}
