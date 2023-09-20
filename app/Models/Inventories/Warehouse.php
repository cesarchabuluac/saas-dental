<?php

namespace App\Models\Inventories;

use App\Models\BranchOffice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Warehouse extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_warehouses';

    protected $fillable = [
        'name',
        'branch_office_id',
        'description',
    ];

    public function branchOffice()
    {
        return $this->belongsTo(BranchOffice::class, 'branch_office_id', 'id');
    }

    public function medicines()
    {
        return $this->hasMany(Medicine::class);
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class);
    }
}
