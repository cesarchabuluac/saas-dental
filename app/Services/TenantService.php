<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Tenant;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Models\GeneralSetting;
use Stancl\Tenancy\Database\Models\Domain;
use App\Http\Requests\TenantRegisterRequest;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewSubscriptionNotification;
use App\Notifications\OwnerWelcome;
use App\Notifications\TenantRegisterNotifyForAdmin;
use App\Notifications\TenantVerificationNotification;
use App\Notifications\TestNotification;
use Exception;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TenantService
{
    use ApiResponse;

    /**
     * @param $request
     * @param $trialDayCount
     * @param $emailVerifiedAt
     * @return array
     */
    protected function tenantData($request, $trialDayCount, $emailVerifiedAt): array
    {
        return [
            'password' => Hash::make($request['password']),
            'ready' => false,
            // some other stuff, if you need. like cashier trials
            'trial_ends_at' => now()->addDays($trialDayCount),
            'trial_ends_email_sent_at' => null,
            'primary_domain_id' => null,
            'fallback_domain_id' => null,
            'is_banned' => false,
            'email_verified_at' => $emailVerifiedAt,
            'initial_setup' => false,
        ];
    }

    /**
     * Create Tenant and Domain
     * Then send email to user and get the domain with host.
     *
     * @param  TenantRegisterRequest  $request
     * @param  Carbon|null  $emailVerifiedAt
     * @return \Illuminate\Http\JsonResponse
     */
    public function createTenantAndSendVerificationNotification(TenantRegisterRequest $request, Carbon $emailVerifiedAt = null): \Illuminate\Http\JsonResponse
    {
        $trialDayCount = GeneralSetting::where('key', 'trial_day_count')->first()?->value ?? 14;

        $tenant = Tenant::create(
            $request->safe()->except(['password', 'terms_and_conditions']) +
                $this->tenantData($request, $trialDayCount, $emailVerifiedAt),
        );

        // $tenant->notify(new TenantVerificationNotification());        

        return $this->responseWithSuccess(
            'Registration successful. Check your email for verification link.',
            $tenant
        );
    }

    /**
     * @param  Request  $request
     * @return array
     */
    public function createTenantAndDomainThenGetDomainWithHost(Request $request): array
    {
        $setting = GeneralSetting::whereIn('key', ['trial_day_count', 'register_tenant_mailjet_template_id'])->get();
        $trialDayCount = $setting->where('key', 'trial_day_count')->first()?->value ?? 14;
        $templateID = $setting->where('key', 'register_tenant_mailjet_template_id')->first()->value;

        // DB::beginTransaction();

        $tenant = Tenant::create(
            $request->safe()->except('password') +
                $this->tenantData($request, $trialDayCount, now()),
        );

        $domain = $tenant->createDomain([
            'domain' => $request->domain,
        ]);

        $tenant->update([
            'ready' => true,
            'primary_domain_id' => $domain->id,
            'fallback_domain_id' => $domain->id,
            'email' => $request->email,
        ]);

        //Initialize tenant and set data
        tenancy()->initialize($tenant);

        $user = User::query()->firstOrCreate(['email' => $request->email], [
            'name' => $request->name,
            'email_verified_at' => date('Y-m-d H:i:s'),
            'password' => Hash::make($request->password),
            'account_role' => 1,
            'is_active' => 1,
        ]);

        //Assing role to user
        $user->assignRole('Director');

        //Rename app by tenant id
        $appName = $request->company;

        DB::statement("UPDATE settings SET
        `value` =
            CASE `key` when 'app_name' THEN '{$appName}'
            WHEN 'mail_from_name' THEN '{$appName}'            
            END
        WHERE `key` IN ('app_name', 'mail_from_name');");

        $json = '{"locale": "es", "theme": "light"}';
        DB::statement("UPDATE users SET settings='{$json}'");

        tenancy()->end();

        // get host name
        $host = request()->getHttpHost();
        $domainWithHost = request()->getScheme() . '://' . $request->domain . '.' . $host;
        $token = tenancy()->impersonate(
            $tenant,
            1,
            $request->domain . '.' . $host
        )->token;

        // notify tenant
        $service = app()->make(MailService::class);
        $dataEmail = [
            'to' => [
                [
                    'name' => $request->name,
                    'email' => $request->email,
                ],
            ],
            'subject' => "Bienvenido a Soft-Dental",
            'template_id' => $templateID,
            'vars' => [
                "name" => $request->name,
                "app_name" => "Soft-Dental",
                "email" => $request->email,
                "password" => $request->password,
                "domain_link" => $domainWithHost,
                "days" => 14,
            ],
        ];

        $service->sendEmail($dataEmail);

        Artisan::call("generate:site-config", [
            'domain' => $request->domain,
            'tenant_id' => $tenant->id,
        ]);

        return [
            'domainWithHost' => $domainWithHost,
            'token' => $token,
        ];
    }

    /**
     * @param  Tenant  $tenant
     * @return array|void
     */
    public function createDomainAndLogin(Tenant $tenant)
    {
        $domain = $tenant->domain;

        $findDomain = Domain::where('domain', $domain)->first();

        if ($findDomain) {
            return;
        }

        $domain = $tenant->createDomain([
            'domain' => $domain,
        ]);

        $tenant->update([
            'ready' => true,
            'primary_domain_id' => $domain->id,
            'fallback_domain_id' => $domain->id,
        ]);

        // get host name
        [$host, $domainWithHost] = $this->getDomainWithHost($domain);
        $token = tenancy()->impersonate(
            $tenant,
            1,
            $domain->domain . '.' . $host
        )->token;

        // notify tenant
        // $tenant->notify(new NewSubscriptionNotification($domainWithHost));

        // notify admin
        $admins = User::where('account_role', 1)->get();
        // Notification::send($admins , new TenantRegisterNotifyForAdmin($tenant, $domainWithHost));

        return [
            'domainWithHost' => $domainWithHost,
            'token' => $token,
        ];
    }

    /**
     * @param $domain
     * @return array
     */
    public function getDomainWithHost($domain): array
    {
        $host = request()->getHttpHost();
        $domainWithHost = request()->getScheme() . '://' . $domain->domain . '.' . $host;

        return [$host, $domainWithHost];
    }

    /**
     * @param  Tenant  $tenant
     * @return \Illuminate\Http\JsonResponse
     */
    public function impersonateAsTenant(Tenant $tenant)
    {
        $domain = $tenant->domain;

        $domain = Domain::where('domain', $domain)->first();

        // get host name
        [$host, $domainWithHost] = $this->getDomainWithHost($domain);
        $token = tenancy()->impersonate(
            $tenant,
            1,
            $domain->domain . '.' . $host,
            'web',
        )->token;

        return $this->responseWithSuccess(
            'Login successful.',
            [
                'redirect_url' => $domainWithHost . '/impersonate/' . $token
            ]
        );
    }
}
