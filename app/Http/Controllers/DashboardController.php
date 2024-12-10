<?php

namespace App\Http\Controllers;

use Exception;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Akaunting\Money\Money;
use Cartalyst\Stripe\Stripe;
use App\Models\Plan;
use App\Models\Tenant;
use Stancl\Tenancy\Database\Models\Domain;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    public function index($summaryType)
    {
        // today
        // last_7_days
        // this_month
        // this_year
        // $stripeSecret = null;
        // if (config()->get('settings.stripe_mode') === 'sandbox') {
        //     $stripeSecret = config()->get('settings.stripe_sandbox_secret');
        // } else {
        //     $stripeSecret = config()->get('settings.stripe_live_secret');
        // }

        // $stripe = Stripe::make($stripeSecret);

        $balancesCount = 0; //$stripe ? $stripe->balance()->current() : 0;
        $pending = 0; //Money::USD($balancesCount['pending'][0]['amount']);
        $available = 0; // Money::USD($balancesCount['available'][0]['amount']);

        if ($summaryType == 'today') {
            $tenantsCount = Tenant::whereNotNull('data->email_verified_at')
                ->whereDate('trial_ends_at', '>', now())
                ->orWhere('trial_ends_at', null)
                ->whereDate('created_at', today())
                ->count();

            $domainsCount = Domain::whereDate('created_at', today())
                ->count();

            $onTrialTenantsCount = Tenant::whereNotNull('data->email_verified_at')
                ->whereDate('trial_ends_at', '<', now())
                ->whereNotNull('trial_ends_at')
                ->whereDate('created_at', today())
                ->count();
        } else {
            if ($summaryType == 'last_7_days') {
                $startDate = today()->subDays(7);
                $endDate = today();
            } else {
                if ($summaryType == 'this_month') {
                    $startDate = today()->startOfMonth();
                    $endDate = today()->endOfMonth();
                } else {
                    $startDate = today()->startOfYear();
                    $endDate = today()->endOfYear();
                }
            }

            $tenantsCount = Tenant::whereNotNull('data->email_verified_at')
                ->whereDate('trial_ends_at', '>', now())
                ->orWhere('trial_ends_at', null)
                ->whereBetween('created_at', [$startDate, $endDate])
                ->count();

            $domainsCount = Domain::whereBetween('created_at', [$startDate, $endDate])
                ->count();

            $onTrialTenantsCount = Tenant::whereNotNull('data->email_verified_at')
                ->whereDate('trial_ends_at', '<', now())
                ->whereNotNull('trial_ends_at')
                ->whereBetween('created_at', [$startDate, $endDate])
                ->count();
        }

        return $this->sendResponse([
            'items' => [
                [
                    'name'      => 'tenants.dashboard.tenants_count',
                    'value'     => $tenantsCount,
                    'icon'      => 'DatabaseIcon',
                    'route'     => 'tenants',
                    'bgColor'   => 'primary'
                ],
                [
                    'name'      => 'tenants.dashboard.on_trial_tenants_count',
                    'value'     => $onTrialTenantsCount,
                    'icon'      => 'UsersIcon',
                    'bgColor'   => 'warning'
                ],
                [
                    'name'      => 'tenants.dashboard.pending_amount',
                    'value'     =>  0, //$pending->format(),
                    'icon'      => 'LoaderIcon',
                    'bgColor'   => 'danger'
                ],

                [
                    'name'      => 'tenants.dashboard.available_amount',
                    'value'     => 0, //$available->format(),
                    'icon'      => 'DollarSignIcon',
                    'bgColor'   => 'success'
                ],
            ],

            'type' => $summaryType,
        ], 'Summary retrieved');
    }

    public function topPlans()
    {
        $plans = Plan::withCount('tenants')
            ->orderBy('tenants_count', 'desc')
            ->get();

        $names = $plans->pluck(['name']);
        return $this->sendResponse([
            'names' => $names,
            'plans' => $plans->map(function ($plan) {
                return $plan->tenants_count;
            }),
            'items' => $plans->map(function ($plan) {
                return [
                    'image' => asset($plan->image),
                    'name' => $plan->name,
                    'value' => $plan->tenants_count,
                    
                ];
            })
        ], "Top plans retrievied successfully");
    }

    // return top clients
    public function topClients()
    {
        // $topClients = Tenant::withCount('subscriptions')
        //     ->orderBy('subscriptions_count', 'desc')->get();

        return $this->sendResponse([], 'Top clients retrieved');
    }

    public function databaseBackup(Request $request)
    {
        $fileName = env('DB_DATABASE') . '_' . Carbon::now()->getTimestamp() . '.' . $request->format;
        try {
            Artisan::call('database:backup', ['fileName' => $fileName]);
        } catch (Exception $e) {
            echo 'Message: ' . $e->getMessage();
        }

        $pathToFile = storage_path() . '//backup/' . $fileName;

        $headers = [
            'Content-Description' => 'File Transfer',
            'Content-Type' => 'application/sql',
        ];

        return response()->download($pathToFile, $fileName, $headers);
    }
}
