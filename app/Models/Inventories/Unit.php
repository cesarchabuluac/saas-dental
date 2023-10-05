<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inv_units';

    protected $fillable = [
        'name',
        'abbreviation',
        'description',
    ];

    public function medicines(): HasMany
    {
        return $this->hasMany(Medicine::class);
    }
}
