<?php

namespace App\Models\Inventories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Purchase extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_purchases';

    protected $fillable = [
        'supplier_id',
        'warehouse_id',
        'user_id',
        'reference',
        'purchase_date',
        'comments',
        'status',
        'subtotal',
        'tax',
        'discount',
        'shipping',
        'total',
    ];

    protected $casts = [
        'subtotal' => 'float',
        'tax' => 'float',
        'discount' => 'float',
        'shipping' => 'float',
        'total' => 'float',
        // 'purchase_date' => 'date',
    ];

    protected $dates = [
        'purchase_date',
    ];

    protected $appends = [
        'label_status',
    ];

    public function getPurchaseDateAttribute ($value) {
        return Carbon::parse($value)->format('Y-m-d');
    }

    public function getLabelStatusAttribute()
    {
        switch ($this->status) {
            case 'draft':
                return '<span class="badge badge-secondary">Borrador</span>';
                break;
            case 'received':
                return '<span class="badge badge-success">Recibido</span>';
                break;
            case 'ordered':
                return '<span class="badge badge-warning">Ordenado</span>';
                break;
            case 'pending':
                return '<span class="badge badge-info">Pendiente</span>';
                break;
            case 'partial':
                return '<span class="badge badge-primary">Parcial</span>';
                break;
            case 'ordered':
                return '<span class="badge badge-warning">Ordenado</span>';
                break;
            case 'cancelled':
                return '<span class="badge badge-danger">Cancelado</span>';
                break;
            case 'paid':
                return '<span class="badge badge-success">Pagado</span>';
                break;
            default:
                return '<span class="badge badge-secondary">Borrador</span>';
                break;
        }
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(PurchaseItem::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }
}
