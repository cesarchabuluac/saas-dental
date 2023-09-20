<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $table = 'inv_stocks';

    protected $fillable = [
        'warehouse_id',
        'medicine_id',        
        'quantity',        
    ];

    protected $casts = [
        'quantity' => 'float',        
    ];

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);
    }

    public function movements()
    {
        return $this->morphMany(Movement::class, 'movable');
    }
}