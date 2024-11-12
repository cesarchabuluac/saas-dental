<?php

namespace App\Repositories;

use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
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

        $data = DB::select("SELECT SUM(action_payments.amount) as total
            FROM payments
            JOIN action_payments ON payments.id = action_payments.payment_id
            WHERE action_payments.payment_date >= '{$start}' AND action_payments.payment_date <= '{$end}'
            AND payments.deleted_at IS NULL
            AND action_payments.deleted_at IS NULL
            AND payments.check_paid = 1");

        return $data[0]->total;
    }

    public function earningCurrentDayByUser()
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();
        $user_id = auth()->user()->id;

        $data = DB::select("SELECT SUM(action_payments.amount) as total
            FROM payments
            JOIN action_payments ON payments.id = action_payments.payment_id
            WHERE action_payments.payment_date >= '{$start}' AND action_payments.payment_date <= '{$end}'
            AND action_payments.professional_id = $user_id
            AND payments.deleted_at IS NULL
            AND action_payments.deleted_at IS NULL
            AND payments.check_paid = 1");

        return $data[0]->total;
    }

    public function earningCurrentMonth()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();

        $data = DB::select("SELECT SUM(action_payments.amount) as total
            FROM payments
            JOIN action_payments ON payments.id = action_payments.payment_id
            WHERE action_payments.payment_date >= '{$start}' AND action_payments.payment_date <= '{$end}'
            AND payments.deleted_at IS NULL
            AND action_payments.deleted_at IS NULL
            AND payments.check_paid = 1");

        return $data[0]->total;
    }

    public function earningCurrentMonthByUser()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();
        $user_id = auth()->user()->id;

        $data = DB::select("SELECT SUM(action_payments.amount) as total
        FROM payments
        JOIN action_payments ON payments.id = action_payments.payment_id
        WHERE action_payments.payment_date >= '{$start}' AND action_payments.payment_date <= '{$end}'
        AND action_payments.professional_id = $user_id
        AND payments.deleted_at IS NULL
        AND action_payments.deleted_at IS NULL
        AND payments.check_paid = 1");

        return $data[0]->total;
    }

    public function earningLastMonth()
    {
        $start = Carbon::now()->subMonth()->startOfMonth();
        $end = Carbon::now()->subMonth()->endOfMonth();

        $data = DB::select("SELECT SUM(action_payments.amount) as total
            FROM payments
            JOIN action_payments ON payments.id = action_payments.payment_id
            WHERE action_payments.payment_date >= '{$start}' and action_payments.payment_date <= '{$end}'
            AND payments.check_paid = 1
            and payments.deleted_at is null 
            and action_payments.deleted_at is null ");

        return $data[0]->total;
    }

    public function earningLastMonthByUser()
    {
        $start = Carbon::now()->subMonth()->startOfMonth();
        $end = Carbon::now()->subMonth()->endOfMonth();
        $user_id = auth()->user()->id;

        $data = DB::select("SELECT SUM(action_payments.amount) as total
            FROM payments
            JOIN action_payments ON payments.id = action_payments.payment_id
            WHERE action_payments.payment_date >= '{$start}' and action_payments.payment_date <= '{$end}'
            AND action_payments.professional_id = $user_id
            AND payments.check_paid = 1
            and payments.deleted_at is null 
            and action_payments.deleted_at is null ");

        return $data[0]->total;
    }
}
