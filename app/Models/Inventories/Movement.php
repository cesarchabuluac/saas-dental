<?php

namespace App\Models\Inventories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movement extends Model
{
    use HasFactory;

    protected $table = 'inv_movements';

    protected $fillable = [
        'user_id',
        'warehouse_id',
        'movable_type',
        'movable_id',
        'movement_type_id',
        'quantity',
        'comment',
    ];   

    protected $casts = [
        'quantity' => 'float',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function movementType()
    {
        return $this->belongsTo(MovementType::class);
    }

    public function movable()
    {
        return $this->morphTo();
    }
}
