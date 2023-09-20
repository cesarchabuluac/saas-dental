<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Action extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'cost',
        'group',
        'area',
        'action_group_id',
    ];

     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'cost' => 'double',
        'group' => 'string',
        'area' => 'string',
        'action_group_id' => 'integer',
    ];

    public function actionGroup()
    {
        return $this->belongsTo(ActionGroup::class);
    }
}
