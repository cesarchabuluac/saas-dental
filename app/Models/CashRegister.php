<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CashRegister extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function user () {
        return $this->belongsTo(User::class);
    }

    public function cashRegisterDetails () {
        return $this->hasMany(CashRegisterDetail::class, "cash_register_id");
    }

}
