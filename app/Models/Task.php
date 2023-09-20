<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = [
        'typeTask',
        'iconTask',
    ];

    public function getIconTaskAttribute()
    {
        $tagMappings = [
            "high" => "AlertCircleIcon",
            "medium" => "InfoIcon",
            "low" => "CheckCircleIcon",
            "update" => "RefreshCwIcon",
            "team" => "UsersIcon",
        ];

        return $tagMappings[$this->tags] ?? "AlertCircleIcon";
    }

    public function getTypeTaskAttribute()
    {
        $tagMappings = [
            "high" => "primary",
            "medium" => "warning",
            "low" => "success",
            "update" => "danger",
            "team" => "info",
        ];

        return $tagMappings[$this->tags] ?? "primary";
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
