<?php

namespace App\Http\Controllers\Central;

// use App\Models\Client;
use App\Models\User;
use App\Models\Tenant;
// use App\Models\Invoice;
// use App\Models\Employee;
// use App\Models\Purchase;
// use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Services\TenantService;
use App\Http\Controllers\Controller;
use App\Http\Resources\Tenant\TenantResource;
use App\Http\Requests\Tenant\StoreTenantRequest;
use App\Http\Requests\Tenant\UpdateTenantRequest;
use App\Repositories\TenantRepository;
use App\Repositories\UserRepository;
use App\Services\DigitalOceanService;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class TenantController extends Controller
{
    protected $userRepository;
    protected $tenantRepository;
    protected $digitalOceanService;

    public function __construct(TenantRepository $tenantRepository, UserRepository $userRepository, DigitalOceanService $digitalOceanService)
    {
        $this->tenantRepository = $tenantRepository;
        $this->userRepository = $userRepository;
        $this->digitalOceanService = $digitalOceanService;
    }

    public function me(Request $request)
    {

        if ($this->tenantRepository->isMainDomain()) {
            return $this->sendResponse([
                'is_subscribed' => true,
            ], __('lang.retrievied_successfully', ['operator' => 'tenant']));
        }

        $tenant = tenant();
        if ($tenant->manually_subscribed_by) {
            $tenant->manually_subscribed_by = tenancy()->central(function () use ($tenant) {
                return $this->userRepository->find($tenant->manually_subscribed_by)?->name ?? null;
            });
        }

        $data = new TenantResource($tenant);
        Log::info(json_encode($data));

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

            $roles = Role::withCount('users')->get();

            $doctorLimit = $tenant->plan->limit_doctor;
            $doctorCurrent = $roles->firstWhere('id', 4)->users_count;



            $assistantLimit = $tenant->plan->limit_assistant;
            $assistantCurrent = $roles->firstWhere('id', 6)->users_count;

            $receptionistLimit = $tenant->plan->limit_receptionist;
            $receptionistCurrent = $roles->firstWhere('id', 3)->users_count;

            $patientLimit = $tenant->plan->limit_patient;
            $patientCurrent = $roles->firstWhere('id', 5)->users_count;

            $domainLimit = $tenant->plan->limit_domains;
            $domainCurrent = $tenant->domains()->count();

            $purchaseLimit = $tenant->plan->limit_purchases;
            $purchaseCurrent = 0; // Purchase::count();

            $invoiceLimit = $tenant->plan->limit_invoices;
            $invoiceCurrent = 0; // Invoice::count();

            return [
                [
                    'name' => 'tenants.doctors_limit',
                    'limit' => $doctorLimit == 0 ? 'Unlimited' : $doctorLimit,
                    'current' => $doctorCurrent,
                    'remaining' => $doctorLimit == 0 ? 'Unlimited' : $doctorLimit - $doctorCurrent,
                    'icon' => 'UsersIcon',
                    'bgColor' => 'primary',
                ],
                [
                    'name' => 'tenants.assitant_limit',
                    'limit' => $assistantLimit == 0 ? 'Unlimited' : $assistantLimit,
                    'current' => $assistantCurrent,
                    'remaining' => $assistantLimit == 0 ? 'Unlimited' : $assistantLimit - $assistantCurrent,
                    'icon' => 'UserCheckIcon',
                    'bgColor' => 'info',
                ],
                [
                    'name' => 'tenants.receptionist_limit',
                    'limit' => $receptionistLimit == 0 ? 'Unlimited' : $receptionistLimit,
                    'current' => $receptionistCurrent,
                    'remaining' => $receptionistLimit == 0 ? 'Unlimited' : $receptionistLimit - $receptionistCurrent,
                    'icon' => 'UserIcon',
                    'bgColor' => 'success',
                ],
                [
                    'name' => 'tenants.patient_limit',
                    'limit' => $patientLimit == 0 ? 'Unlimited' : $patientLimit,
                    'current' => $patientCurrent,
                    'remaining' => $patientLimit == 0 ? 'Unlimited' : $patientLimit - $patientCurrent,
                    'icon' => 'SmileIcon',
                    'bgColor' => 'success',
                ],
                // [
                //     'name' => 'common.domains_limit',
                //     'limit' => $domainLimit == 0 ? 'Unlimited' : $domainLimit,
                //     'current' => $domainCurrent == 0 ? 'Unlimited' : $domainCurrent,
                //     'remaining' => $domainLimit == 0 ? 'Unlimited' : $domainLimit - $domainCurrent,
                //     'icon' => 'fas fa-globe',
                //     'bgColor' => 'bg-gray',
                // ],
                // [
                //     'name' => 'common.purchases_limit',
                //     'limit' => $purchaseLimit == 0 ? 'Unlimited' : $purchaseLimit,
                //     'current' => $purchaseCurrent == 0 ? 'Unlimited' : $purchaseCurrent,
                //     'remaining' => $purchaseLimit == 0 ? 'Unlimited' : $purchaseLimit - $purchaseCurrent,
                //     'icon' => 'fas fa-shopping-basket',
                //     'bgColor' => 'bg-olive',
                // ],
                // [
                //     'name' => 'common.invoices_limit',
                //     'limit' => $invoiceLimit == 0 ? 'Unlimited' : $invoiceLimit,
                //     'current' => $invoiceCurrent == 0 ? 'Unlimited' : $invoiceCurrent,
                //     'remaining' => $invoiceLimit == 0 ? 'Unlimited' : $invoiceLimit - $invoiceCurrent,
                //     'icon' => 'fas fa-file-invoice',
                //     'bgColor' => 'bg-indigo',
                // ],
            ];
        });

        $tenant->tenant_invoices = $tenant->invoices();
        return new TenantResource($tenant);
    }

    public function store(StoreTenantRequest $request, TenantService $tenantService)
    {
        $tenantService->createTenantAndDomainThenGetDomainWithHost($request);

        //Register recors on digigital ocean        
        $this->digitalOceanService->CreateNewDomainRecord([
            'domain' => $request->domain,
        ]);

        $this->digitalOceanService->CreateNewDomainRecord([
            'domain' => "www." . $request->domain,
        ]);

        //generate filec config on subdomain
        generateSubDomainOnDO($request->domain);

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
        $tenant->update($request->validated());

        return $this->responseWithSuccess('Tenant updated successfully');
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
}
