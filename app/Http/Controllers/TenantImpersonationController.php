<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Stancl\Tenancy\Features\UserImpersonation;

class TenantImpersonationController extends Controller
{
    public function impersonate($token)
    {        
        $impersonate = UserImpersonation::makeResponse($token, 86400);
       
        if ($impersonate) {
            $admins = tenancy()->central(function () {
                return User::all();
            });

            $user = User::first();

            // $token = (string) $user->createToken(Str::random(10))->plainTextToken;
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;            
            $token->save();           

            return $this->sendResponse([
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ], trans('lang.login_successfully'));

            // // send mail to admin
            // Notification::send($admins , new VendorRegistation($user, tenant(), tenant()->id));

            // // send thank you mail to vendors
            // $user->notify(new WelcomeVendor(tenant()->domains[0]->domain, url('/')));

            // return true;
        }

        return false;
    }
}
