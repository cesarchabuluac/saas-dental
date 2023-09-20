<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Log;

class Plan extends Model
{
    use HasFactory, SoftDeletes;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'api_id',
        'image',
        'name',
        'amount',
        'currency_id',
        'currency',
        'interval',
        'product_id',
        'description',
        'is_popular',
        'limit_doctor',
        'limit_assistant',
        'limit_receptionist',
        'limit_patient',
        'limit_domains',
        'limit_purchases',
        'limit_invoices',
        'features'
    ];

    protected $casts = [
        'is_popular' => 'boolean',
    ];


    protected $appends = [
        'label_limit_doctor',
        'label_limit_assistant',
        'label_limit_receptionist',
        'label_limit_domains',
        'label_limit_purchases',
        'label_limit_invoices',
        'label_limit_patient',
    ];

    protected static function boot()
    {
        parent::boot();

        // Cuando se está guardando un nuevo plan o actualizando un plan existente
        static::saving(function ($plan) {
            if ($plan->is_popular) {
                // Si este plan se marca como popular, desmarca todos los demás
                Plan::where('id', '!=', $plan->id)->update(['is_popular' => false]);
            }
        });
    }


    public function getLabelLimitDoctorAttribute () {
        return $this->limit_doctor > 0 ? $this->limit_doctor : __('lang.unlimited');
    }

    public function getLabelLimitPatientAttribute () {
        return $this->limit_patient > 0 ? $this->limit_patient : __('lang.unlimited');
    }

    public function getLabelLimitDomainsAttribute () {
        return $this->limit_doamins > 0 ? $this->limit_doamins : __('lang.unlimited');
    }

    public function getLabelLimitPurchasesAttribute () {
        return $this->limit_purchases > 0 ? $this->limit_purchases : __('lang.unlimited');
    }

    public function getLabelLimitInvoicesAttribute () {
        return $this->limit_invoices > 0 ? $this->limit_invoices : __('lang.unlimited');
    }

    public function getLabelLimitAssistantAttribute () {
        return $this->limit_assistant > 0 ? $this->limit_assistant : __('lang.unlimited');
    }

    public function getLabelLimitReceptionistAttribute () {
        return $this->limit_receptionist > 0 ? $this->limit_receptionist : __('lang.unlimited');
    }


     /**
     * The features that belong to the plan.
     */
    public function features(): BelongsToMany
    {
        return $this->belongsToMany(Feature::class);
    }

    public function tenants(): HasMany
    {
        return $this->hasMany(Tenant::class)->whereNull('trial_ends_at');
    }

    public function currency() : BelongsTo
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }

}
