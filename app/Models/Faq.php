<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Faq extends Model
{
    use HasFactory;

    protected $fillable = [
        'icon',
        'title',
        'subtitle',
    ];

    public function faqItems(): HasMany
    {
        return $this->hasMany(FaqItem::class);
    }
}
