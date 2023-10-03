<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoDomain extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "tenant_id",
        "type",
        "name",
        "data",
        "priority",
        "port",
        "ttl",
        "weight",
        "flags",
        "tag",
    ];
}
