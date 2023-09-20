<?php

namespace App\Repositories;

use App\Models\Budget;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class BudgetRepository.
 *
 * @package namespace App\Repositories;
 */
class BudgetRepository extends BaseRepository
{

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
        return DB::table('action_payments')
            ->join('payments', 'action_payments.payment_id', '=', 'payments.id')
            ->join('budgets', 'payments.budget_id', '=', 'budgets.id')
            ->whereNull('action_payments.deleted_at')
            ->whereNull('payments.deleted_at')
            ->whereNull('budgets.deleted_at')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->sum('action_payments.amount');
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
