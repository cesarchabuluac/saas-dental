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
        $queryFilterPayment = " ";
        $queryFilterAppointment = " ";

        if ($userID) {
            $queryFilterPayment = " AND users.id = " . $userID;
            $queryFilterAppointment = " AND appointments.user_id = " . $userID;
        }
        return DB::select("SELECT 
                p.user_id, 
                p.name, 
                p.total,
                COALESCE(a.pending, 0) as pending,
                COALESCE(a.confirmed, 0) as confirmed,
                COALESCE(a.canceled, 0) as canceled,
                COALESCE(a.assisted, 0) as assisted,
                COALESCE(a.unassisted, 0) as unassisted
            FROM (
                SELECT
                    users.id as user_id,
                    users.name,
                    SUM(COALESCE(action_payments.amount, 0)) as total
                FROM users
                JOIN model_has_roles ON users.id = model_has_roles.model_id
                LEFT JOIN action_payments ON users.id = action_payments.professional_id
                LEFT JOIN payments ON action_payments.payment_id = payments.id
                WHERE model_has_roles.role_id = 4
                    AND users.is_active = true
                    AND payments.check_paid = 1
                    and action_payments.deleted_at is null 
                    and payments.deleted_at is null 
                    and users.deleted_at is null 
                    and action_payments.payment_date >= '{$startAt}' and action_payments.payment_date <= '{$endAt}'
                    {$queryFilterPayment}
                GROUP BY users.id, users.name
            ) p
            LEFT JOIN (
                select 
                    appointments.user_id, 
                    SUM(CASE WHEN appointments.state = 'pending' THEN 1 ELSE 0 END) as pending,
                    SUM(CASE WHEN appointments.state = 'confirmed' THEN 1 ELSE 0 END) as confirmed,
                    SUM(CASE WHEN appointments.state = 'canceled' THEN 1 ELSE 0 END) as canceled,
                    SUM(CASE WHEN appointments.state = 'assisted' THEN 1 ELSE 0 END) as assisted,
                    SUM(CASE WHEN appointments.state = 'unassisted' THEN 1 ELSE 0 END) as unassisted
                from appointments
                where appointments.date BETWEEN '{$startAt}' AND '{$endAt}'
                and appointments.deleted_at is null {$queryFilterAppointment}
                group by appointments.user_id
            ) a
            ON p.user_id = a.user_id");
    }
}
