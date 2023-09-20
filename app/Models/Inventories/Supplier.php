<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_suppliers';

    protected $fillable = [
        'code',
        'name',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'country',
        'zip',
    ];

    protected $appends = [
        'full_address'
    ];

    public function getFullAddressAttribute()
    {
        return $this->address . ', ' . $this->city . ', ' . $this->state . ', ' . $this->country . ', ' . $this->zip;
    }

    public function medicines()
    {
        return $this->hasMany(Medicine::class);
    }
}
