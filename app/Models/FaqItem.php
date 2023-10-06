<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FaqItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'faq_id',
        'question',
        'answer',
    ];

    public function faq(): BelongsTo
    {
        return $this->belongsTo(Faq::class);
    }
}
