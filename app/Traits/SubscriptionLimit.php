<?php

namespace App\Traits;

use App\Models\Plan;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

trait SubscriptionLimit
{

    /**
     * @throws \Exception
     */
    public function checkSubscriptionLimitByModelName($userRoleID): void
    {
        Log::info($userRoleID);
        if (empty($userRoleID)) {
            throw new \Exception('User role can\'t be empty for checkSubscriptionLimitByUserRole method');
        }

        if (tenant()->on_trial) {
            $tenantPlan = tenancy()->central(function () {
                return Plan::orderBy('amount')->first();
            });
        } else {
            $tenantPlan = tenant()->plan;
        }

        Log::info($tenantPlan);

        $limitColumnName = null;
        switch ($userRoleID) {            
            case 2:
                $limitColumnName = "limit_director";
                break;
            case 3:
                $limitColumnName = "limit_receptionist";
                break;
            case 4:
                $limitColumnName = "limit_doctor";
                break;
            case 5:
                $limitColumnName = "limit_patient";
                break;
            case 4:
                $limitColumnName = "limit_assistant";
                break;
        }

        $tenantLimit = $tenantPlan ? $tenantPlan->$limitColumnName : null;
        $tenantCurrentCount = $this->getTenantCurrentCountByUserRole($userRoleID);

        if ($tenantLimit <= $tenantCurrentCount && $tenantLimit > 0) {
            response()->json([
                'success' => false,                
                'error' => true,
                'message' => __('lang.subscription_limit'),
                'data' => [
                    'limit' => $tenantLimit,
                    'used' => $tenantCurrentCount,
                ],
            ], 201)->throwResponse();
        }
    }

    private function getTenantCurrentCountByUserRole($userRoleID)
    {
        $role = Role::withCount('users')->where('id', $userRoleID)->first();
        $current =  $role->users_count;
        return $current;
    }
}
