<?php

namespace App\Repositories;

use App\Models\Payment;
use Carbon\Carbon;
use Prettus\Repository\Eloquent\BaseRepository;


/**
 * Interface PaymentRepository.
 *
 * @package namespace App\Repositories;
 */
class PaymentRepository extends BaseRepository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'branch_office_id',
        'budget_id',
        'amount',
        'method',
        'has_partials',
        'divided_on',
        'parent_payment',
        'check_id',
        'check_paid',
        'is_closed',
        'closed_by',
        'closed_at',
        'comments',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Payment::class;
    }

    public function earningCurrentDay()
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();
        return $this->model->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->sum('action_payments.amount');
    }

    public function earningCurrentDayByUser()
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();
        return $this->model->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->where('action_payments.professional_id', auth()->user()->id)
            ->sum('action_payments.amount');
    }

    public function earningCurrentMonth()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();
        return $this->model->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->sum('action_payments.amount');
    }

    public function earningCurrentMonthByUser()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();
        return $this->model->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->where('action_payments.professional_id', auth()->user()->id)
            ->sum('action_payments.amount');
    }

    public function earningLastMonth()
    {
        $start = Carbon::now()->subMonth()->startOfMonth();
        $end = Carbon::now()->subMonth()->endOfMonth();

        return $this->model->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->sum('action_payments.amount');
    }

    public function earningLastMonthByUser()
    {
        $start = Carbon::now()->subMonth()->startOfMonth();
        $end = Carbon::now()->subMonth()->endOfMonth();
        return $this->model->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->whereBetween('action_payments.payment_date', [$start, $end])
            ->where('payments.check_paid', 1)
            ->where('action_payments.professional_id', auth()->user()->id)
            ->sum('action_payments.amount');
    }
}
