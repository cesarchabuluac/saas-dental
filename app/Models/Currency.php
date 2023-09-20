<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'code', 'symbol', 'decimal_digits', 'rounding', 'position', 'note', 'status', 'is_default',
    ];

    protected $appends = ['label'];

    public function getLabelAttribute () {
        return $this->name . " - " . $this->code;
    }

}
