<?php

namespace App\Http\Controllers\Central;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Services\TenantService;
use App\Http\Controllers\Controller;
use App\Http\Resources\Tenant\TenantResource;
use App\Http\Requests\Tenant\StoreTenantRequest;
use App\Http\Requests\Tenant\UpdateTenantRequest;
use App\Models\Role;
use App\Repositories\DoDomainRepository;
use App\Repositories\TenantRepository;
use App\Repositories\UserRepository;
use App\Services\DigitalOceanService;
use Exception;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TenantController extends Controller
{
    protected $userRepository;
    protected $tenantRepository;
    protected $digitalOceanService;
    protected $doDomainRepository;


    public function __construct(TenantRepository $tenantRepository, UserRepository $userRepository, DigitalOceanService $digitalOceanService, DoDomainRepository $doDomainRepository)
    {
        $this->tenantRepository = $tenantRepository;
        $this->userRepository = $userRepository;
        $this->digitalOceanService = $digitalOceanService;
        $this->doDomainRepository = $doDomainRepository;
    }

    public function me(Request $request)
    {

        Log::info('isMainDomain: ' . $this->tenantRepository->isMainDomain());
        if ($this->tenantRepository->isMainDomain()) {
            return $this->sendResponse([
                'is_subscribed' => true,
            ], __('lang.retrievied_successfully', ['operator' => 'tenant']));
        }

        $tenant = tenant();

        Log::info('TenantController: ' . $tenant);

        if ($tenant->manually_subscribed_by) {
            $tenant->manually_subscribed_by = tenancy()->central(function () use ($tenant) {
                return $this->userRepository->find($tenant->manually_subscribed_by)?->name ?? null;
            });
        }

        $data = new TenantResource($tenant);

        return $this->sendResponse($data, __('lang.retrievied_successfully', ['operator' => 'tenant']));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return $this->tenantRepository->with('plan')
            ->latest()
            ->paginate(request('perPage'));
        // return TenantResource::collection($tenants);
    }

    /**
     * Display the specified resource.
     *
     * @param Tenant $tenant
     *
     * @return TenantResource
     */
    public function show(Tenant $tenant)
    {
        $tenant->limitations = $tenant->run(function () use ($tenant) {

            // $roles = Role::withCount('users')->get();
            $roles = Role::withCount(['usersWithTrashed'])->get();
            Log::info('Roles: ' . $roles);

            $doctorLimit = $tenant->plan->limit_doctor;
            $doctorCurrent = $roles->firstWhere('id', 4)->users_with_trashed_count;

            $assistantLimit = $tenant->plan->limit_assistant;
            $assistantCurrent = $roles->firstWhere('id', 6)->users_with_trashed_count;

            $receptionistLimit = $tenant->plan->limit_receptionist;
            $receptionistCurrent = $roles->firstWhere('id', 3)->users_with_trashed_count;

            $patientLimit = $tenant->plan->limit_patient;
            $patientCurrent = $roles->firstWhere('id', 5)->users_with_trashed_count;

            $domainLimit = $tenant->plan->limit_domains;
            $domainCurrent = $tenant->domains()->count();

            $purchaseLimit = $tenant->plan->limit_purchases;
            $purchaseCurrent = 0; // Purchase::count();

            $invoiceLimit = $tenant->plan->limit_invoices;
            $invoiceCurrent = 0; // Invoice::count();

            return [
                [
                    'name' => 'tenants.doctors_limit',
                    'limit' => $doctorLimit == 0 ? 'Ilimitado' : $doctorLimit,
                    'current' => $doctorCurrent,
                    'remaining' => $doctorLimit == 0 ? 'Ilimitado' : $doctorLimit - $doctorCurrent,
                    'icon' => 'UsersIcon',
                    'bgColor' => 'primary',
                ],
                [
                    'name' => 'tenants.assitant_limit',
                    'limit' => $assistantLimit == 0 ? 'Ilimitado' : $assistantLimit,
                    'current' => $assistantCurrent,
                    'remaining' => $assistantLimit == 0 ? 'Ilimitado' : $assistantLimit - $assistantCurrent,
                    'icon' => 'UserCheckIcon',
                    'bgColor' => 'info',
                ],
                [
                    'name' => 'tenants.receptionist_limit',
                    'limit' => $receptionistLimit == 0 ? 'Ilimitado' : $receptionistLimit,
                    'current' => $receptionistCurrent,
                    'remaining' => $receptionistLimit == 0 ? 'Ilimitado' : $receptionistLimit - $receptionistCurrent,
                    'icon' => 'UserIcon',
                    'bgColor' => 'success',
                ],
                [
                    'name' => 'tenants.patient_limit',
                    'limit' => $patientLimit == 0 ? 'Ilimitado' : $patientLimit,
                    'current' => $patientCurrent,
                    'remaining' => $patientLimit == 0 ? 'Ilimitado' : $patientLimit - $patientCurrent,
                    'icon' => 'SmileIcon',
                    'bgColor' => 'success',
                ],
            ];
        });

        $tenant->tenant_invoices = []; //$tenant->invoices();
        return new TenantResource($tenant);
    }

    public function store(StoreTenantRequest $request, TenantService $tenantService)
    {
        $tenantService->createTenantAndDomainThenGetDomainWithHost($request);
        return $this->sendResponse([], 'Tenant created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateTenantRequest $request
     * @param Tenant $tenant
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTenantRequest $request, Tenant $tenant)
    {
        try {
            $tenant->update($request->validated());
            return $this->sendResponse($tenant, 'Tenant updated successfully');
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Tenant $tenant
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Tenant $tenant)
    {
        $tenant->domains()->delete();
        $tenant->delete();

        return $this->sendResponse($tenant, __("lang.deleted_successfully", ["operator" => __("lang.tenant")]));
    }

    /**
     * search resource from storage.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Tenant::query();

        if ($request->startDate && $request->endDate) {
            $startDate = Carbon::createFromFormat('Y-m-d', $request->startDate)->startOfDay();
            $endDate = Carbon::createFromFormat('Y-m-d', $request->endDate)->endOfDay();
            $query = $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('data->name', 'Like', '%' . $term . '%')
                ->orWhere('data->domain', 'Like', '%' . $term . '%')
                ->orWhere('data->email', 'Like', '%' . $term . '%')
                ->orWhere('data->company', 'Like', '%' . $term . '%');
        });

        return TenantResource::collection($query->latest()->paginate($request->perPage));
    }

    public function ban(Tenant $tenant)
    {
        if ($tenant->is_banned) {
            $tenant->update([
                'is_banned' => false,
            ]);

            return $this->sendResponse($tenant->load('plan'), __('lang.unbanned_successfully', ['operator' => __('lang.user')]));
        } else {
            $tenant->update([
                'is_banned' => true,
            ]);

            return $this->sendResponse($tenant->load('plan'), __('lang.banned_successfully', ['operator' => __('lang.user')]));
        }
    }

    public function impersonate(Tenant $tenant, TenantService $tenantService)
    {
        if (auth()->user()->account_role !== 1) {
            return $this->sendError(__('impersonate_error'));
        }

        return $tenantService->impersonateAsTenant($tenant);
    }

    private function createDigitalOceanRecords($domain, $tenantId)
    {
        $doDomainRecord = $this->createDigitalOceanRecord($domain, $tenantId);
        $doWWWDomainRecord = $this->createDigitalOceanRecord("www." . $domain, $tenantId);

        $this->doDomainRepository->create($doDomainRecord);
        $this->doDomainRepository->create($doWWWDomainRecord);
    }

    private function createDigitalOceanRecord($domain, $tenantId)
    {
        $do = $this->digitalOceanService->CreateNewDomainRecord($domain);
        $do = json_decode($do, true);
        $do['domain_record']['tenant_id'] = $tenantId;

        return $do['domain_record'];
    }
}
