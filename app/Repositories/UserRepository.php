<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepository.
 *
 * @package namespace App\Repositories;
 */
class UserRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id',
        'name',
        'email',
        'password',
        'remember_token'
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    public function revenueReport($startAt, $endAt, $userID = null)
    {
        return $this->model
            ->whereHas("roles", function ($q) {
                $q->where("id", 4)
                    ->where('is_active', true);
            })
            ->leftJoin('appointments', function ($query) use ($startAt, $endAt) {
                $query->on('users.id', 'appointments.user_id')
                    ->whereBetween('appointments.date', [$startAt, $endAt]);
            })
            ->leftJoin('action_payments', function ($query) use ($startAt, $endAt) {
                $query->on('users.id', '=', 'action_payments.professional_id')
                    ->join('payments', 'action_payments.payment_id', '=', 'payments.id')
                    ->whereBetween('action_payments.payment_date', [$startAt, $endAt])
                    ->where('payments.check_paid', 1);
            })

            ->select(
                'users.id',
                'users.name',
                DB::raw('SUM(COALESCE(action_payments.amount, 0)) as total'),
                DB::raw('COUNT(CASE WHEN appointments.state = "pending" THEN 1 END) as pending'),
                DB::raw('COUNT(CASE WHEN appointments.state = "confirmed" THEN 1 END) as confirmed'),
                DB::raw('COUNT(CASE WHEN appointments.state = "canceled" THEN 1 END) as canceled'),
                DB::raw('COUNT(CASE WHEN appointments.state = "assisted" THEN 1 END) as assisted'),
                DB::raw('COUNT(CASE WHEN appointments.state = "unassisted" THEN 1 END) as unassisted')

            )
            ->groupBy('users.id', 'users.name')
            ->when($userID, function ($query) use ($userID) {
                return $query->where('users.id', $userID);
            })
            ->get();
    }

    public function getDoctors($startAt, $endAt)
    {

        return $this->model
            ->whereHas("roles", function ($q) {
                $q->where("id", 4)
                    ->where('is_active', true);
            })->leftJoin('appointments', 'users.id', '=', 'appointments.user_id')
            ->leftJoin('action_payments', 'users.id', '=', 'action_payments.professional_id')
            ->leftJoin('budgets', 'users.id', '=', 'budgets.user_id')
            ->select(
                'users.id',
                'users.name',
                DB::raw('COUNT(CASE WHEN appointments.state = "pending" THEN 1 END) as pending'),
                DB::raw('COUNT(CASE WHEN appointments.state = "confirmed" THEN 1 END) as confirmed'),
                DB::raw('COUNT(CASE WHEN appointments.state = "canceled" THEN 1 END) as canceled'),
                DB::raw('COUNT(CASE WHEN appointments.state = "assisted" THEN 1 END) as assisted'),
                DB::raw('COUNT(CASE WHEN appointments.state = "unassisted" THEN 1 END) as unassisted'),
                DB::raw('SUM(action_payments.amount) as total_payments'),
                DB::raw('SUM(CASE WHEN budgets.approved = 1 THEN budgets.total ELSE 0 END) as total_approved_budgets'),
                DB::raw('SUM(CASE WHEN budgets.approved = 0 THEN budgets.total ELSE 0 END) as total_unapproved_budgets')
            )
            ->whereBetween('appointments.created_at', [$startAt, $endAt])
            ->whereBetween('action_payments.updated_at', [$startAt, $endAt])
            ->groupBy('users.id', 'users.name')
            ->get();
    }
}
