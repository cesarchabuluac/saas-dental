<?php

declare(strict_types=1);

use App\Http\Controllers\API\TenantAPIController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\TenantImpersonationController;
use App\Http\Controllers\WebNotificationController;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomainOrSubdomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'api',
    // InitializeTenancyByDomain::class,
    // PreventAccessFromCentralDomains::class,
    InitializeTenancyByDomainOrSubdomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    Route::group(['prefix' => 'api'], function () {
        Route::get('/impersonate/{token}', [TenantImpersonationController::class, 'impersonate']);
        include 'api.php';
    });
});

Route::middleware([
    // InitializeTenancyByDomain::class,
    // PreventAccessFromCentralDomains::class,
    InitializeTenancyByDomainOrSubdomain::class,
    PreventAccessFromCentralDomains::class,
    'is_banned',
    'read_only',
    'initial_setup',
])->group(function () {
    
    // Tenant details routes
    Route::group(['middleware' => ['auth:api'], 'prefix' => 'api', 'as' => 'tenant.'], function () {        
        Route::get('tenant/me', [TenantAPIController::class, 'me']);
        
        // Plans routes
        Route::get('/plans', [SubscriptionController::class, 'plans']);

        Route::get('push-notificaiton', [WebNotificationController::class, 'index'])->name('push-notificaiton');
        Route::post('store-token', [WebNotificationController::class, 'storeToken'])->name('store.token');
        Route::post('send-web-notification', [WebNotificationController::class, 'sendWebNotification'])->name('send.web-notification');


        //Subscriptions routes
        Route::get('subscriptions/setup-intent', [SubscriptionController::class, 'getSetupIntent']);
        Route::get('subscriptions/payment-methods', [SubscriptionController::class, 'getPaymentMethods']);
        Route::post('subscriptions/payment-methods', [SubscriptionController::class, 'postPaymentMethods']);
        Route::delete('subscriptions/payment-methods/{paymentMethodId}', [SubscriptionController::class, 'removePaymentMethods']);
        Route::get('subscriptions', [SubscriptionController::class, 'currentSubscription']);
        Route::post('subscriptions', [SubscriptionController::class, 'createOrUpdateSubscription']);
        Route::post('subscriptions/cancel', [SubscriptionController::class, 'cancelSubscription']);
        Route::post('subscriptions/resume', [SubscriptionController::class, 'resumeSubscription']);

        // invoices routes
        Route::get('subscriptions/invoices', [SubscriptionController::class, 'getInvoices']);
        Route::post('subscriptions/invoices', [SubscriptionController::class, 'downloadInvoice']);
    });    


    // Route::get('/', [ApplicationController::class, 'index']);
    // Route::get('/login', [ApplicationController::class, 'index']);
    // Route::get('/profile', [ApplicationController::class, 'index']);
    // Route::get('/tenants/{tenant}', [ApplicationController::class, 'index']);
    // Route::get('/plans', [ApplicationController::class, 'index']);
    // Route::get('/tenant/me', [ApplicationController::class, 'index']);

    // Route::get('{path}', ApplicationController::class)->where('path', '^(?!.*api).*$');
    Route::get('{path}', [ApplicationController::class, 'index'])->where('path', '^(?!.*api).*$');
});
