<?php

namespace App\Http\Controllers;

use App\Events\UserSessionChanged;
use App\Http\Resources\Tenant\TenantResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\User;
use App\Repositories\CountryRepository;
use App\Repositories\CurrencyRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Validator;

class AuthController extends Controller
{

    /** @var  CountryRepository */
    private $countryRepository;

    /** @var  CurrencyRepository */
    private $currencyRepository;

    public function __construct(CountryRepository $countryRepository, CurrencyRepository $currencyRepository)
    {
        $this->countryRepository = $countryRepository;
        $this->currencyRepository = $currencyRepository;
    }

    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|',
            'c_password' => 'required|same:password',
        ]);

        try {
            DB::beginTransaction();
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);
            DB::commit();
            return $this->sendResponse($user, __('lang.created_successfully', ['operator' => __('lang.user')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage(), 401);
        }
    }

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password', 'remember_me']);
        if (!Auth::attempt($credentials))
            return $this->sendError(trans('auth.failed'), 401);


        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return $this->sendResponse([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ], trans('lang.login_successfully'));
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        $timezones = [];
        foreach (timezone_abbreviations_list() as $abbr => $timezone) {
            foreach ($timezone as $val) {
                if (isset($val['timezone_id'])) {
                    $group = preg_split('/\//', $val['timezone_id'])[0];
                    $timezones[$group][$val['timezone_id']] = $val['timezone_id'];
                }
            }
        }

        $user = $request->user();

        $data = [
            'user' => checkIsCentral() ? $user : $user->load('schedules'),
            'permissions' => $request->user()->getAllPermissions(),
            'roles' => DB::table('roles')->get(['id', 'name']),
            'settings' => DB::table('settings')->whereNotIn('key', ['mail_password'])->get(['key', 'value']),
            'timezones' => $timezones,
            'languages' => getAvailableLanguages(),
            'countries' =>  $this->countryRepository->get(['iso', 'name']),
            'currencies' => $this->currencyRepository->all(),
            // 'central' => [
            //     'is_central' => !checkIsCentral(),
            // ],
            // 'subscription' => $this->getSubscription(),
        ];
        return $this->sendResponse($data, trans('lang.login_successfully'));
    }

    public function getSubscription()
    {
        if (!checkIsCentral()) {
            $tenant = tenant();
            if ($tenant->manually_subscribed_by) {
                $tenant->manually_subscribed_by = tenancy()->central(function () use ($tenant) {
                    return User::find($tenant->manually_subscribed_by)?->name ?? null;
                });
            }
            return new TenantResource($tenant);
        }
        return [];
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return $this->sendResponse($request->user(), 'User logged out successfully');
    }
}
