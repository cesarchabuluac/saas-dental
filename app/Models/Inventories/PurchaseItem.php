<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PurchaseItem extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_purchase_items';

    protected $fillable = [
        'purchase_id',
        'medicine_id',
        'name',
        'sku',
        'quantity',
        'unit_price',
        'tax',
        'discount',
        'subtotal',
        'total',
        'comments',
    ];

    protected $casts = [
        'quantity' => 'float',
        'unit_price' => 'float',
        'tax' => 'float',
        'discount' => 'float',
        'subtotal' => 'float',
        'total' => 'float',
    ];

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);
    }

    public function stock()
    {
        return $this->hasOne(Stock::class, 'medicine_id', 'medicine_id');
    }

    public function movements()
    {
        return $this->morphMany(Movement::class, 'movable');
    }
}
