<?php

namespace App\Repositories;

use App\Models\Budget;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class BudgetRepository.
 *
 * @package namespace App\Repositories;
 */
class BudgetRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'patient_id',
        'user_id',
        'branch_office_id',
        'name',
        'approved',
        'subtotal',
        'discount',
        'tax',
        'total',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Budget::class;
    }

    public function totalPaidByDate($start, $end)
    {
        $data = DB::select("SELECT SUM(action_payments.amount) as total
            FROM action_payments
            JOIN payments ON action_payments.payment_id = payments.id
            JOIN budgets ON payments.budget_id = budgets.id
            WHERE action_payments.deleted_at IS NULL
            AND payments.deleted_at IS NULL
            AND budgets.deleted_at IS NULL
            AND action_payments.payment_date >= '{$start}' AND action_payments.payment_date <= '{$end}'
            AND payments.check_paid = 1");
        return $data[0]->total;
    }

    public function totalBudgetApproved($start, $end)
    {
        return $this->model->where('approved', true)
            ->whereBetween('created_at', [$start, $end])
            ->sum('total');
    }

    public function countCurrentMonth()
    {
        $start = Carbon::now()->startOfMonth()->startOfDay();
        $end = Carbon::now()->endOfMonth()->endOfDay();
        return $this->model->whereBetween('updated_at', [$start, $end])
            ->where('approved', true)->count();
    }

    public function countCurrentMonthByUser()
    {
        $start = Carbon::now()->startOfMonth()->startOfDay();
        $end = Carbon::now()->endOfMonth()->endOfDay();
        return $this->model->whereBetween('updated_at', [$start, $end])
            ->where('approved', true)
            ->where('user_id', auth()->user()->id)
            ->count();
    }
}
