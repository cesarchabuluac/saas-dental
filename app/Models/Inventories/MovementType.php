<?php

namespace App\Models\Inventories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovementType extends Model
{
    use HasFactory;

    protected $table = 'inv_movement_types';

    protected $fillable = [
        'name',
        'description',
    ];
}
