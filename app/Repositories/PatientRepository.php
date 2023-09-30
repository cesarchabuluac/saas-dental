<?php

namespace App\Repositories;

use App\Models\Patient;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface PatientRepository.
 *
 * @package namespace App\Repositories;
 */
class PatientRepository extends BaseRepository
{


    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'last_name',
        'mother_last_name',
        'rut',
        'birthday',
        'email',
        'cellphone',
        'phone_country',
        'phone',
        'address',
        'comments',
        'active',
        "is_default",
        'document_type',
        'positive_balance',
        'access_web',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Patient::class;
    }

    public function countByLastMonth()
    {
        $start = Carbon::now()->subMonth()->startOfMonth();
        $end = Carbon::now()->subMonth()->endOfMonth();
        return $this->model->whereBetween('created_at', [$start, $end])
            ->count();
    }

    public function countByMonth()
    {
        $start = Carbon::now()->startOfMonth()->startOfDay();
        $end = Carbon::now()->endOfMonth()->endOfDay();

        $data = DB::select("SELECT COUNT(*) as quantity
            FROM patients
            WHERE created_at >= '{$start}' AND created_at <= '{$end}'
            AND deleted_at IS NULL");

        return $data[0]->quantity;
    }

    public function countByDay()
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();

        $data = DB::select("SELECT COUNT(*) as quantity
            FROM patients
            WHERE created_at >= '{$start}' AND created_at <= '{$end}'
            AND deleted_at IS NULL");

        return $data[0]->quantity;
    }
}
