<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdjustmentItem extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_adjustment_items';

    protected $fillable = [
        'adjustment_id',
        'medicine_id',
        'type',
        'name',
        'sku',
        'quantity',
        'comment',
       
    ];

    public function adjustment()
    {
        return $this->belongsTo(Adjustment::class);
    }

    public function stock()
    {
        return $this->hasOne(Stock::class, 'medicine_id', 'medicine_id');
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);
    }
}
