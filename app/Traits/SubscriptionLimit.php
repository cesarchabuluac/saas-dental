<?php

namespace App\Traits;

use App\Models\Plan;
use App\Models\Role;
use Illuminate\Support\Facades\Log;
// use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;


trait SubscriptionLimit
{

    /**
     * @throws \Exception
     */
    public function checkSubscriptionLimitByModelName(array $userRoleIDs): void
    {        
        if (empty($userRoleIDs)) {
            throw new \Exception('User role IDs can\'t be empty for checkSubscriptionLimitByModelNames method');
        }

        if (tenant()->on_trial) {
            $tenantPlan = tenancy()->central(function () {
                return Plan::orderBy('amount')->first();
            });
        } else {
            $tenantPlan = tenant()->plan;
        }        

        $roleLimits = [
            2 => "limit_director",
            3 => "limit_receptionist",
            4 => "limit_doctor",
            5 => "limit_patient",
            6 => "limit_assistant" // Cambia el ID de rol y el nombre del límite según corresponda
        ];

        $limits = [];
        $roleName = null;
        foreach ($userRoleIDs as $userRoleID) {
            if (!isset($roleLimits[$userRoleID])) {
                throw new \Exception('Invalid role ID provided');
            }
    
            $limitColumnName = $roleLimits[$userRoleID];
            $tenantLimit = $tenantPlan ? $tenantPlan->$limitColumnName : null;
            $tenantCurrentCount = $this->getTenantCurrentCountByUserRole($userRoleID);    
            if ($tenantLimit <= $tenantCurrentCount['current'] && $tenantLimit > 0) {
                $roleName = $tenantCurrentCount['name'];
                $limits[$userRoleID] = [
                    'limit' => $tenantLimit,
                    'used' => $tenantCurrentCount,
                    'name' => $roleName
                ];
            }
        }        
        

        if (!empty($limits)) {
            $data = [
                'success' => false,
                'error' => true,
                'message' => __('lang.subscription_limit', ['role' => $roleName]),
                'data' => $limits,
            ];
            response()->json($data, 201)->throwResponse();            
        } else {
            Log::info('Subscription limit check passed');   
        }
    }

    private function getTenantCurrentCountByUserRole($userRoleID)
    {
        $role = Role::withCount(['usersWithTrashed'])->where('id', $userRoleID)->first();
        $current =  $role->users_with_trashed_count;
        return [
            "current" => $current,
            "name" => $role->name
        ];
    }
}
