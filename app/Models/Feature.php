<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    /**
     * The plans that belong to the feature.
     */
    public function plans() : BelongsToMany
    {
        return $this->belongsToMany(Plan::class);
    }
}
