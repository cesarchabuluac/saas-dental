<?php

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Http\Resources\CentralBillingHistoryResource;
use Cartalyst\Stripe\Stripe;
use Illuminate\Http\Request;

class BillingHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stripeSecret = null;
        if (config()->get('settings.stripe_mode') === 'sandbox') {
            $stripeSecret = config()->get('settings.stripe_sandbox_secret');
        } else {
            $stripeSecret = config()->get('settings.stripe_live_secret');
        }

        // All Billing History
        $stripe = Stripe::make($stripeSecret);
        $allTransactions = $stripe->balance()->all();
        return CentralBillingHistoryResource::collection($allTransactions['data']);
    }
}
