<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    /**
     * Mass assignable attributes
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'description'];
}
