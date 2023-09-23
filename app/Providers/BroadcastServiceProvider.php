<?php

namespace App\Providers;

use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;
use Stancl\Tenancy\Middleware\InitializeTenancyByRequestData;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Broadcast::routes();
        Broadcast::routes([
            'middleware' => ['auth:api', InitializeTenancyByRequestData::class],
            // 'prefix' => 'api'
        ]);

        require base_path('routes/channels.php');
    }
}
