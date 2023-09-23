<?php

namespace App\Http\Controllers\API;

use App\Criteria\TenantCriteria;
use App\Criteria\UserCriteria;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Repositories\RoleRepository;
use App\Repositories\SettingRepository;
use App\Repositories\UserRepository;
use App\Services\StorageService;
use App\Traits\SubscriptionLimit;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class UserAPIController extends Controller
{
    use SubscriptionLimit;


    /** @var  UserRepository */
    protected $userRepository;
    protected $storageService;
    protected $roleRepository;
    protected $settingRepository;


    public function __construct(UserRepository $userRepository, RoleRepository $roleRepository, StorageService $storageService, SettingRepository $settingRepository)
    {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
        $this->storageService = $storageService;
        $this->settingRepository = $settingRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->userRepository->pushCriteria(new TenantCriteria());
        $this->userRepository->pushCriteria(new UserCriteria($request));

        if ($request->filled('isCalendar')) {
            return $this->userRepository->with(['roles', 'schedules'])->get();
        }

        return $this->userRepository->with('roles')
            ->where(function ($q) {
                $q->where('name', 'LIKE', '%' . request('search') . '%')
                    ->orWhere('email', 'LIKE', '%' . request('search') . '%');
            })
            // ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        $this->checkSubscriptionLimitByModelName($request->role_id);

        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $role = $this->roleRepository->find($input['role_id']);
        unset($input['role_id']);
        unset($input['schedules']);
        $input['email_verified_at'] = Carbon::now();

        $setting = $this->settingRepository->whereIn('key', ['language', 'app_theme'])->get();
        $language = $setting->where('key', 'language')->first()->value;
        $theme = $setting->where('key', 'app_theme')->first()->value;

        $input['settings'] = [
            "locale" => $language,
            "theme" => $theme,
        ];

        try {

            DB::beginTransaction();
            $user = $this->userRepository->create($input);
            $user->syncRoles($role->name);

            if ($role->id === 4) { //Doctor
                $user->schedules()->createMany($request->schedules);
            }
            DB::commit();

            return $this->sendResponse($user, __('lang.saved_successfully', ['operator' => __('lang.user')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {

        $user = $this->userRepository; //->with(['roles']);

        $totalMethods = [
            'cash' => 0,
            'debit_card' => 0,
            'credit_card' => 0,
            'check' => 0,
            'transfer' => 0,
        ];

        if ($request->filled('is_profile')) {
            $start = Carbon::parse($request->start_at)->startOfDay()->toDateTimeString();
            $end = Carbon::parse($request->end_at)->endOfDay()->toDateTimeString();
            $revenue = $user->revenueReport($start, $end, $id);
            $payments = $user->whereHas('actionPayments', function ($query) use ($start, $end) {
                $query->where('action_payments.payment_date', '>=', $start)->where('action_payments.payment_date', '<=', $end);
            })->with(['actionPayments.budgetAction.budget', 'actionPayments.payment'])->get();

            $paymentMethods = DB::select("SELECT pm.name, COALESCE(ROUND(SUM(ap.amount)), 0) AS amount FROM payment_methods pm 
            LEFT JOIN payments p ON p.payment_method_id = pm.id 
            LEFT JOIN action_payments ap ON p.id = ap.payment_id 
            WHERE p.deleted_at IS NULL AND ap.deleted_at IS NULL 
            AND ap.payment_date >= ? 
            AND ap.payment_date <= ? 
            AND (ap.professional_id = ? OR ? IS NULL)
            GROUP BY pm.name", [$start, $end, $id, $id]);

            $totalMethods = [];
            foreach ($paymentMethods as $payment) {
                $totalMethods[$payment->name] = $payment->amount;
            }

            $totalCash = $totalMethods['cash'] ?? 0;
            $totalDebitCard = $totalMethods['debit_card'] ?? 0;
            $totalCreditCard = $totalMethods['credit_card'] ?? 0;
            $totalCheck = $totalMethods['check'] ?? 0;
            $totalTrans = $totalMethods['transfer'] ?? 0;

            $transactionsData = [

                [
                    "mode" => __("lang.payments.methods.cash"),
                    "types" => __("lang.payments.methods.cash_desc"),
                    "avatar" => "PocketIcon",
                    "avatarVariant" => "light-primary",
                    "payment" => getPrice($totalCash),
                    "deduction" => false,
                ],
                [
                    "mode" => __("lang.payments.methods.check"),
                    "types" => __("lang.payments.methods.check_desc"),
                    "avatar" => "CheckIcon",
                    "avatarVariant" => "light-success",
                    "payment" => getPrice($totalCheck),
                    "deduction" => false,
                ],
                [
                    "mode" => __("lang.payments.methods.debit_card"),
                    "types" => __("lang.payments.methods.debit_card_desc"),
                    "avatar" => "DollarSignIcon",
                    "avatarVariant" => "light-danger",
                    "payment" => getPrice($totalDebitCard),
                    "deduction" => false,
                ],
                [
                    "mode" => __("lang.payments.methods.credit_card"),
                    "types" => __("lang.payments.methods.credit_card_desc"),
                    "avatar" => "CreditCardIcon",
                    "avatarVariant" => "light-warning",
                    "payment" => getPrice($totalCreditCard),
                    "deduction" => false,
                ],
                [
                    "mode" => __("lang.payments.methods.transfer"),
                    "types" => __("lang.payments.methods.transfer_desc"),
                    "avatar" => "TrendingUpIcon",
                    "avatarVariant" => "light-info",
                    "payment" => getPrice($totalTrans),
                    "deduction" => false,
                ],

            ];
        }

        $user = $user->with(['roles'])->find($id);

        if (isset($revenue)) {
            $user['revenue'] = $revenue;
        }

        if (isset($payments)) {
            $user['payments'] = $payments;
        }

        if (isset($transactionsData)) {
            $user['transactionsData'] = $transactionsData;
        }

        if (checkIsCentral()) {
            $user = $user->load('schedules');
        }

        return $this->sendResponse($user, __('lang.retrieved_successfully', ['operator' => __('lang.user')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $oldUser = $this->userRepository->find($id);
        if (empty($oldUser)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.user')]));
        }

        if ($request->boolean('isSettings')) {
            $settings = $oldUser->settings;
            if ($request->filled('locale')) {
                $settings['locale'] = $request->locale;
            }
            if ($request->filled('theme')) {
                $settings['theme'] = $request->theme;
            }
            $oldUser->settings = $settings;
            $oldUser->save();
            return $this->sendResponse($oldUser->load('roles'), __('lang.updated_successfully', ['operator' => __('lang.setting')]));
        }

        $input = $request->except(['avatar', 'schedules', 'change_avatar', 'role_id', 'role', 'roles', 'has_media', 'deleted_at', 'created_at', 'updated_at', 'verified', 'id']);
        if (isset($input['password']) && !empty($input['password'])) {
            $input['password'] = Hash::make($input['password']);
        } else {
            unset($input['password']);
        }

        $role = $this->roleRepository->find($request->role_id);
        try {

            DB::beginTransaction();
            $user = $this->userRepository->update($input, $id);
            $user->syncRoles($role->name);
            $user->load(['roles', 'schedules']);
            if ($role->id === 4) {
                $requestSchedules = $request->schedules;
                $existingSchedules = $user->schedules()->get(); // Obtiene los días existentes

                // Recorre los días existentes y verifica si no están en la selección actual
                $existingSchedules->each(function ($schedule) use (&$requestSchedules) {
                    $found = false;
                    foreach ($requestSchedules as $key => $requestSchedule) {
                        if ($schedule->day_of_week == $requestSchedule['day_of_week']) {
                            $found = true;
                            // Actualiza los campos personalizados como "start_time" y "end_time"
                            $schedule->start_time = $requestSchedule['start_time'];
                            $schedule->end_time = $requestSchedule['end_time'];
                            $schedule->save();
                            // Quita el día del arreglo $requestSchedules para evitar duplicados
                            unset($requestSchedules[$key]);
                            break;
                        }
                    }

                    // Si no se encontró el día en la selección actual, elimínalo
                    if (!$found) {
                        $schedule->delete();
                    }
                });

                // Luego, agrega los nuevos días que quedan en $requestSchedules
                $user->schedules()->createMany($requestSchedules);
            }

            if (isset($request->change_avatar) && $request->avatar) {

                if ($oldUser->avatar) {
                    $oldPath = parse_url($oldUser->avatar);
                    $path = $oldPath['path'];
                    @unlink(public_path($path));
                }

                if (tenant()) {
                    $this->storageService->setTenant(tenant());
                    $path = $this->storageService->saveImageFromBase64($request->avatar, "avatar", $user->id);
                    $user->update([
                        'avatar' => global_asset("/storage/" . $path),
                    ]);
                } else {
                    $path = saveImageFromBase64($request->avatar, "central/avatar/" . $user->id);
                    $user->update([
                        'avatar' => URL::asset("/storage/" . $path),
                    ]);
                }
            }

            DB::commit();

            return $this->sendResponse($user, __('lang.updated_successfully', ['operator' => __('lang.user')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = $this->userRepository->withTrashed()->find($id);

        try {

            if (empty($user)) {
                return $this->sendError(__('lang.not_found', ['operator' => __('lang.user')]));
            }

            // $input['is_active'] = false;
            // $message = __('lang.disabled_successfully', ['operator' => __('lang.user')]);
            // if (!$user->is_active) {
            //     $input['is_active'] = true;
            //     $message = __('lang.enabled_successfully', ['operator' => __('lang.user')]);
            // }
            // $user->update($input);

            $message = __('lang.disabled_successfully', ['operator' => __('lang.user')]);
            if (empty($user->deleted_at)) {
                $user->delete($id);
            } else {
                $user->restore();
                $message = __('lang.enabled_successfully', ['operator' => __('lang.user')]);
            }

            $user->load('roles');
            return $this->sendResponse($user, $message);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Change the password
     *
     * @param  \App\Http\Requests\PasswordRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function password(PasswordRequest $request)
    {
        auth()->user()->update(['password' => Hash::make($request->get('password'))]);
        return $this->sendResponse(auth()->user(), __('lang.password_updated_successfully'));
    }
}
