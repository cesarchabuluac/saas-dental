<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TransferItem extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_transfer_items';

    protected $fillable = [
        'transfer_id',
        'medicine_id',
        'name',
        'sku',
        'quantity',
        'unit_price',
        'tax',
        'discount',
        'subtotal',
        'total',
        'note',
    ];

    public function transfer()
    {
        return $this->belongsTo(Transfer::class, 'transfer_id');
    }

    public function stock()
    {
        return $this->hasOne(Stock::class, 'medicine_id', 'medicine_id');
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'medicine_id');
    }
}
