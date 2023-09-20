<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
        // Passport::routes();

         /**
         * Duración de tokens De forma predeterminada, 
         * Passport emite tokens de acceso de larga duración que caducan después de un año. 
         * Si prefieres configurar una duración de token más larga o más corta, puedes usar los métodos tokensExpireIn, refreshTokensExpireIn y personalAccessTokensExpireIn. 
         */
        // Passport::tokensExpireIn(now()->addMinute(1));
        // Passport::refreshTokensExpireIn(now()->addMinute(2));
        Passport::tokensExpireIn(now()->addDays(env('VUEX_COOKIES_EXPIRE_TIME')));
        Passport::refreshTokensExpireIn(now()->addDays(env('VUEX_COOKIES_REFRESH_EXPIRE_TIME')));
       
        // Passport::personalAccessTokensExpireIn(now()->addDays(env('VUEX_COOKIES_EXPIRE_TIME')));
        // Passport::refreshTokensExpireIn(now()->addDays(env('VUEX_COOKIES_EXPIRE_TIME') + 1));
    }
}
