<?php

namespace App\Providers;

use App\Models\Currency;
use App\Models\GeneralSetting;
use App\Models\Tenant;
use Arcanedev\LaravelSettings\Models\Setting;
use Illuminate\Contracts\Cache\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;
use Stancl\Tenancy\Events\TenancyBootstrapped;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{

    private function generalSettingAndPermission()
    {
        //if table is not empty then get setting items
        if (DB::connection()->getDatabaseName()) {
            if (Schema::hasTable('settings')) {
                $settings = GeneralSetting::pluck('value', 'key')->all();
                config()->set('settings', $settings);
                config(['mail.driver' => config()->get('settings.mail_driver', 'smtp')]);
                config(['mail.host' => config()->get('settings.mail_host', 'smtp.mailgun.org')]);
                config(['mail.port' => config()->get('settings.mail_port', 587)]);
                config(['mail.encryption' => config()->get('settings.mail_encryption', 'tls')]);
                config(['mail.username' => config()->get('settings.mail_username')]);
                config(['mail.password' => config()->get('settings.mail_password')]);
                config(['mail.from.address' => config()->get('settings.mail_from_address')]);
                config(['mail.from.name' => config()->get('settings.mail_from_name')]);

                config(['mailgun.domain' => config()->get('settings.mailgun_domain')]);
                config(['mailgun.secret' => config()->get('settings.mailgun_secret')]);

                config(['sparkpost.secret' => config()->get('settings.sparkpost_secret')]);
                config(['sparkpost.options.endpoint' => config()->get('settings.sparkpost_options_endpoint')]);

                config(['facebook.client_id' => config()->get('settings.facebook_app_id')]);
                config(['facebook.client_secret' => config()->get('settings.facebook_app_secret')]);
                config(['facebook.redirect' => url('login/facebook/callback')]);
                config(['twitter.client_id' => config()->get('settings.twitter_app_id')]);
                config(['twitter.client_secret' => config()->get('settings.twitter_app_secret')]);
                config(['twitter.redirect' => url('login/twitter/callback')]);
                config(['google.client_id' => config()->get('settings.google_app_id')]);
                config(['google.client_secret' => config()->get('settings.google_app_secret')]);
                config(['google.redirect' => url('login/google/callback')]);
                config(['fcm.key' => config()->get('settings.fcm_key', '')]);

                if (config()->get('settings.stripe_mode') == 'sandbox') {
                    config(['stripe.key' => config()->get('settings.stripe_sandbox_key')]);
                    config(['stripe.secret' => config()->get('settings.stripe_sandbox_secret')]);
                } else {
                    config(['stripe.key' => config()->get('settings.stripe_live_key')]);
                    config(['stripe.secret' => config()->get('settings.stripe_live_secret')]);
                }

                // config(['stripe.mode' => config()->get('settings.stripe_mode')]);
                // config(['stripe.sandbox.url' => config()->get('settings.stripe_sandbox_url')]);
                // config(['stripe.sandbox.key' => config()->get('settings.stripe_sandbox_key')]);
                // config(['stripe.sandbox.secret' => config()->get('settings.stripe_sandbox_secret')]);
                // config(['stripe.live.url' => config()->get('settings.stripe_live_url')]);
                // config(['stripe.live.key' => config()->get('settings.stripe_live_key')]);
                // config(['stripe.live.secret' => config()->get('settings.stripe_live_secret')]);

                config(['paypal.mode' => config()->get('settings.paypal_mode', 'sandbox')]);
                config(['paypal.currency' => \Str::upper(config()->get('settings.default_currency_code', 'MXN'))]);
                config(['paypal.sandbox.base_uri' => config()->get('paypal_sandbox_url')]);
                config(['paypal.sandbox.client_id' => config()->get('paypal_sandbox_client_id')]);
                config(['paypal.sandbox.client_secret' => config()->get('paypal_sandbox_client_secret')]);
                config(['paypal.live.base_uri' => config()->get('paypal_live_url')]);
                config(['paypal.live.client_id' => config()->get('paypal_live_client_id')]);
                config(['paypal.live.client_secret' => config()->get('paypal_live_client_secret')]);
                config(['app.timezone' => config()->get('settings.timezone')]);
                config(['services.fcm.key' => config()->get('settings.fcm_key')]);
            }

            if (Schema::hasTable('currencies')) {
                $currency = Currency::where('id', 1)->first();
                config(['config.currencySymbol' => $currency?->symbol]);
                config(['config.currencyPosition' => $currency?->position]);
            }
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Cashier::ignoreMigrations();
        // if ($this->app->environment('local', 'testing') && class_exists(DuskServiceProvider::class)) {
        //     $this->app->register(DuskServiceProvider::class);
        // }

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Factory $cache, GeneralSetting $settings)
    {
        //define cashier model
        Cashier::useCustomerModel(Tenant::class);

        Passport::loadKeysFrom(base_path(config('passport.key_path')));

        // // $this->generalSettingAndPermission($cache, $settings);
        // if (DB::connection()->getDatabaseName()) {
        //     if (Schema::hasTable('settings')) {

        //         // cargue las configuraciones de la aplicación central
        //         // $settings = $cache->remember('settings', 60, function () use ($settings) {
        //         //     // Laravel >= 5.2, use 'lists' instead of 'pluck' for Laravel <= 5.1
        //         //     return $settings->pluck('value', 'key')->all();
        //         // });

        //         config()->set('settings', $settings->pluck('value', 'key')->all());
        //         config(['mail.driver' => config()->get('settings.mail_driver', 'smtp')]);
        //         config(['mail.host' => config()->get('settings.mail_host', 'smtp.mailgun.org')]);
        //         config(['mail.port' => config()->get('settings.mail_port', 587)]);
        //         config(['mail.encryption' => config()->get('settings.mail_encryption', 'tls')]);
        //         config(['mail.username' => config()->get('settings.mail_username')]);
        //         config(['mail.password' => config()->get('settings.mail_password')]);
        //         config(['mail.from.address' => config()->get('settings.mail_from_address')]);
        //         config(['mail.from.name' => config()->get('settings.mail_from_name')]);

        //         config(['mailgun.domain' => config()->get('settings.mailgun_domain')]);
        //         config(['mailgun.secret' => config()->get('settings.mailgun_secret')]);
        //         config(['sparkpost.secret' => config()->get('settings.sparkpost_secret')]);
        //         config(['sparkpost.options.endpoint' => config()->get('settings.sparkpost_options_endpoint')]);
        //         config(['facebook.client_id' => config()->get('settings.facebook_app_id')]);
        //         config(['facebook.client_secret' => config()->get('settings.facebook_app_secret')]);
        //         config(['facebook.redirect' => url('login/facebook/callback')]);
        //         config(['twitter.client_id' => config()->get('settings.twitter_app_id')]);
        //         config(['twitter.client_secret' => config()->get('settings.twitter_app_secret')]);
        //         config(['twitter.redirect' => url('login/twitter/callback')]);
        //         config(['google.client_id' => config()->get('settings.google_app_id')]);
        //         config(['google.client_secret' => config()->get('settings.google_app_secret')]);
        //         config(['google.redirect' => url('login/google/callback')]);
        //         config(['fcm.key' => config()->get('settings.fcm_key', '')]);
                
        //         if (config()->get('settings.stripe_mode') == 'sandbox') {
        //             config(['services.stripe.key' => config()->get('settings.stripe_sandbox_key')]);
        //             config(['services.stripe.secret' => config()->get('settings.stripe_sandbox_secret')]);
        //         } else {
        //             config(['services.stripe.key' => config()->get('settings.stripe_live_key')]);
        //             config(['services.stripe.secret' => config()->get('settings.stripe_live_secret')]);
        //         }
                
        //         config(['paypal.mode' => config()->get('settings.paypal_mode', 'sandbox')]);
        //         config(['paypal.currency' => \Str::upper(config()->get('settings.default_currency_code', 'MXN'))]);
        //         config(['paypal.sandbox.base_uri' => config()->get('paypal_sandbox_url')]);
        //         config(['paypal.sandbox.client_id' => config()->get('paypal_sandbox_client_id')]);
        //         config(['paypal.sandbox.client_secret' => config()->get('paypal_sandbox_client_secret')]);
        //         config(['paypal.live.base_uri' => config()->get('paypal_live_url')]);
        //         config(['paypal.live.client_id' => config()->get('paypal_live_client_id')]);
        //         config(['paypal.live.client_secret' => config()->get('paypal_live_client_secret')]);
        //         config(['app.timezone' => config()->get('settings.timezone')]);
        //         config(['services.fcm.key' => config()->get('settings.fcm_key')]);
        //     }
        // }


        /*
         * tenant related configurations start
         */

        // after tenant bootstrapped do other checking stuff
        Event::listen(TenancyBootstrapped::class, function (TenancyBootstrapped $event) {
            // $this->generalSettingAndPermission();
        });

        /*
         * tenant related configurations end
         */

        // Model::preventLazyLoading(
        //     ! app()->isProduction()
        // );

        Model::preventSilentlyDiscardingAttributes(
            !app()->isProduction()
        );

        /*
         * Custom Macros
         */
        Builder::macro('toRawSql', function () {
            return vsprintf(str_replace(['?'], ['\'%s\''], $this->toSql()), $this->getBindings());
        });

        // if ($this->app->environment('local')) {
        //     $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
        //     $this->app->register(TelescopeServiceProvider::class);
        // }
    }
}
