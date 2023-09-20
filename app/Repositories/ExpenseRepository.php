<?php

namespace App\Repositories;

use App\Models\Expense;
use Carbon\Carbon;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface ExpenseRepository.
 *
 * @package namespace App\Repositories;
 */
class ExpenseRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'branch_office_id',
        'user_id',
        'date',
        'reference',
        'amount',
        'note',
        'is_closed',
        'closed_by',
        'closed_at',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Expense::class;
    }

    public function amountCurrentDay()
    {
        $now = Carbon::now();
        return $this->model->whereDate('date', '>=', $now->startOfDay())
            ->whereDate('date', '<=', $now->endOfDay())->sum('amount');
    }

    public function amountCurrentMonth()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();

        return $this->model->whereDate('date', '>=', $start)
            ->whereDate('date', '<=', $end)->sum('amount');
    }

    public function amountLastMonth()
    {
        $lastMonthStart = Carbon::now()->subMonth()->startOfMonth();
        $lastMonthEnd = Carbon::now()->subMonth()->endOfMonth();

        return $this->model
            ->whereDate('date', '>=', $lastMonthStart)
            ->whereDate('date', '<=', $lastMonthEnd)
            ->sum('amount');
    }
}
