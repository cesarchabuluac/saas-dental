<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\Tenant\TenantResource;
use App\Repositories\TenantRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Tenancy;

class TenantAPIController extends Controller
{
    protected $userRepository;
    protected $tenantRepository;

    public function __construct(UserRepository $userRepository, TenantRepository $tenantRepository)
    {
        $this->userRepository = $userRepository;
        $this->tenantRepository = $tenantRepository;
    }

    public function me()
    {
        if ($this->tenantRepository->isMainDomain()) {
            return $this->sendResponse([
                'is_subscribed' => true,
            ], __('lang.retrievied_successfully', ['operator' => 'tenant']));
        }

        $tenant = tenant();

        
        Log::info('Tenant: ' . $tenant);
        if ($tenant->manually_subscribed_by) {
            $tenant->manually_subscribed_by = tenancy()->central(function () use ($tenant) {
                return $this->userRepository->find($tenant->manually_subscribed_by)?->name ?? null;
            });
        }

        $data = new TenantResource($tenant);
        return $this->sendResponse($data, __('lang.retrievied_successfully', ['operator' => 'tenant']));
    }
}
