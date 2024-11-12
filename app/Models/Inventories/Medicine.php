<?php

namespace App\Models\Inventories;

use App\Models\Inventories\SubCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medicine extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_medicines';

    protected $appends = [
        'price_with_tax',
        'current_stock',
        'warehouse_label',
    ];

    protected $fillable = [
        // 'warehouse_id',
        // 'supplier_id',
        'unit_id',
        'brand_id',
        'category_id',
        'sub_category_id',
        'user_id',
        'name',
        'sku',
        'description',
        'is_taxable',
        'tax',
        'price',
        'manage_stock',
        'stock_min',
        'expiration_date',
    ];

    protected $casts = [
        'is_taxable' => 'boolean',
        'manage_stock' => 'boolean',
    ];

    public function getWarehouseLabelAttribute()
    {
        return $this->stocks->pluck('warehouse.name')->implode(', '); 
    }

    public function getCurrentStockAttribute()
    {
        return $this->stocks->sum('quantity');
    }

    public function getPriceWithTaxAttribute()
    {
        if($this->is_taxable == false) {
            return $this->price;
        }
        return $this->price + ($this->price * $this->tax / 100);
    }


    public function unit()
    {
        return $this->belongsTo(Unit::class)->withTrashed();
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class)->withTrashed();
    }

    public function category()
    {
        return $this->belongsTo(Category::class)->withTrashed();
    }

    public function subcategory()
    {
        return $this->belongsTo(SubCategory::class)->withTrashed();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class);
    }
}
