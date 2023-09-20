<?php

namespace App\Models\Inventories;

use App\Models\User;
use App\Models\Inventories\TransferItem;
use App\Models\Inventories\Warehouse;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transfer extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_transfers';

    protected $fillable = [
        'user_id',
        'from_warehouse_id',
        'to_warehouse_id',
        'reference',
        'transfer_date',
        'status',
        'note',        
    ];

    protected $appends = [
        'status_label',
    ];

    protected $dates = [
        'transfer_date',
    ];

    public function getStatusLabelAttribute()
    {
        switch ($this->status) {
            case 'completed':
                return '<span class="badge badge-success">Completado</span>';
                break;
            case 'pending':
                return '<span class="badge badge-warning">Pendiente</span>';
                break;
            case 'received':
                return '<span class="badge badge-success">Recibido</span>';
                break;
            case 'rejected':
                return '<span class="badge badge-danger">Rechazado</span>';
                break;
            default:
                return '<span class="badge badge-warning">Pendiente</span>';
                break;
        }
    }

    public function items()
    {
        return $this->hasMany(TransferItem::class, 'transfer_id');
    }

    public function fromWarehouse()
    {
        return $this->belongsTo(Warehouse::class, 'from_warehouse_id');
    }

    public function toWarehouse()
    {
        return $this->belongsTo(Warehouse::class, 'to_warehouse_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
