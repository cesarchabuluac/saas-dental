<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Log;

class CashRegisterDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function user () {
        return $this->belongsTo(User::class);
    }

    public function professional() {
        return $this->belongsTo(User::class, "professional_id");
    }

    public function relations () {       
        if ($this->origin == "payment") {
            return $this->belongsTo(Payment::class, "relation_id", "id");
        } else {
            return $this->belongsTo(Expense::class, "relation_id", "id");
        }
    }
}
