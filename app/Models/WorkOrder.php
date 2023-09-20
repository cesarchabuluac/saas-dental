<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class WorkOrder extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $appends = [
        'label',
        'is_expired',
        'status_lang',
        'label_todo',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    // protected $casts = [
    //     'application_date' => 'datetime',
    //     'delivery_date' => 'datetime',
    // ];

    public function getLabelTodoAttribute() {
        $todoLabels = [
            "Protesis Removible" => __("lang.removable_prosthesis"),
			"Protesis Fija" => __("lang.fixed_prosthesis"),
			"Ortodoncia" => __("lang.orthodontics"),
			"Operatoria" => __("lang.operative"),
			"Periodoncia" => __("lang.periodontics"),
			"Implantologia" => __("lang.implantology")
        ];

        return $todoLabels[$this->work_todo] ?? __('lang.removable_prosthesis');
    }

    public function getStatusLangAttribute()
    {
        $statusLabels = [
            'En proceso' => __('lang.work_order_status_process'),
            'Enviado' => __('lang.work_order_status_sending'),
            'Recibido' => __('lang.work_order_status_received'),
        ];

        return $statusLabels[$this->status] ?? __('lang.work_order_status_process');
    }

    public function branch()
    {
        return $this->belongsTo(BranchOffice::class, 'branch_office_id');
    }

    public function laboratory()
    {
        return $this->belongsTo(Laboratory::class, 'laboratory_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function professional()
    {
        return $this->belongsTo(User::class, 'professional_id');
    }

    public function getLabelAttribute()
    {
        $date = Carbon::parse($this->created_at)->format('dmY');
        return $date . '#' . str_pad($this->id, 5, '0', STR_PAD_LEFT);
    }

    public function getIsExpiredAttribute()
    {
        $deliveryDate = Carbon::parse($this->delivery_date);
        if ($deliveryDate->lessThan(Carbon::now())) {
            return true;
        }
        return false;
    }
}
