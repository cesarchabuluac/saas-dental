<?php

namespace App\Http\Controllers\API;

use App\Criteria\TenantCriteria;
use App\Criteria\UserCriteria;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Repositories\AppointmentRepository;
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
use Prettus\Repository\Criteria\RequestCriteria;
use Psy\Readline\Hoa\Console;

class UserAPIController extends Controller
{
    use SubscriptionLimit;


    /** @var  UserRepository */
    protected $userRepository;
    protected $storageService;
    protected $roleRepository;
    protected $settingRepository;
    protected $appontmentRepository;


    public function __construct(
        UserRepository $userRepository,
        RoleRepository $roleRepository,
        StorageService $storageService,
        SettingRepository $settingRepository,
        AppointmentRepository $appointmentRepository
    ) {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
        $this->storageService = $storageService;
        $this->settingRepository = $settingRepository;
        $this->appontmentRepository = $appointmentRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->userRepository->pushCriteria(new RequestCriteria($request));
        $this->userRepository->pushCriteria(new TenantCriteria());
        $this->userRepository->pushCriteria(new UserCriteria($request));

        $users = $this->userRepository;

        // Retorna todos los registros si 'isAll' está presente
        if ($request->filled('isAll')) {
            $users = $users->get();
            return $this->sendResponse($users, __('lang.retrieved_successfully', ['operator' => __('lang.user')]));
        }

        // Relación con 'roles' y 'schedules' para el resto de las solicitudes
        if (tenant()) {
            $users = $users->with(['roles', 'schedules']);
        } else {
            $users = $users->with(['roles']);
        }

        // Retorna todos los usuarios con relaciones si está en vista de calendario
        if ($request->filled('isCalendar')) {
            $users = $users->get();
            return $this->sendResponse($users, __('lang.retrieved_successfully', ['operator' => __('lang.user')]));
        }

        // Configuración de búsqueda con validación de 'search'
        $searchTerm = $request->filled('search') ? '%' . $request->search . '%' : null;
        $users = $users->when($searchTerm, function ($query) use ($searchTerm) {
            $query->where('name', 'LIKE', $searchTerm)
                ->orWhere('email', 'LIKE', $searchTerm);
        });      

        // Parámetros para paginación y condición para incluir eliminados
        $perPage = $request->get('perPage', 15); // Default perPage de 15
        if ($request->boolean('includeTrashed', false)) {
            $users = $users->withTrashed();
        }
        
        // Paginación y respuesta final
        $users = $users->paginate($perPage);
        return $this->sendResponse($users, __('lang.retrieved_successfully', ['operator' => __('lang.user')]));
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
        if (tenant()) {
           $this->checkSubscriptionLimitByModelName($request->roles);
        }

        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $roles = $request->roles;
        unset($input['role_id']);
        unset($input['schedules']);
        unset($input['roles']);
        $input['email_verified_at'] = Carbon::now();
        unset($input['id']);

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
            $user->syncRoles($roles);           

            if (tenant()) {

                //Verficar si en array de $request['roles'] esta el id 4 que es el del doctor
                if (in_array(4, $roles)) {

                    //Validar si el array de $request['schedules'] no esta vacio
                    if (!empty($request->schedules)) {

                        //Recorrer el array de $request['schedules']
                        $schedules = $request->schedules;
                        foreach ($schedules as $schedule) {

                            //Crear un nuevo registro en la tabla user_schedules
                            if(!empty($schedule['breaks'])) {
                                $schedule['breaks'] = $schedule['breaks']; ///json_encode($schedule['breaks']);
                            } else {
                                $schedule['breaks'] = null;
                            }
                            $user->schedules()->create($schedule);
                        }
                    } else {
                        DB::rollBack();
                        return $this->sendError(__('lang.schedules_required'));   
                    }                    
                }                
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
        $user = $this->userRepository;

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

            $payload = [
                'start' => $start,
                'end' => $end,
            ];

            if ($request->filled('only_appointments')) {                
                return $this->loadAppointments($id, $payload);
            }

            if ($request->filled('only_payments')) {
                return $this->loadPayments($id, $payload);
            }

            $revenue = $user->revenueReport($start, $end, $id);

            $payments = [];
            // $user->whereHas('actionPayments', function ($query) use ($start, $end) {
            //     $query->where('action_payments.payment_date', '>=', $start)->where('action_payments.payment_date', '<=', $end);
            // })->with(['actionPayments.budgetAction.budget', 'actionPayments.payment'])->get();

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

        if (isTenant() && tenant()) {
            $user = $user->load('schedules');
        } else {
            $user['schedules'] = [];
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
        $oldUser = $this->userRepository->with(['roles'])->find($id);
        if (empty($oldUser)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.user')]));
        }
    
        // Obtener roles actuales y comparar con los nuevos
        $currentRoleIds = $oldUser->roles->pluck('id')->toArray();
        $newRoleIds = collect($request->input('roles', []))->pluck('id')->toArray();

        $roleIdsAdded = array_diff($newRoleIds, $currentRoleIds);
    
        // Validar límites de roles si aplica
        if (tenant() && count($roleIdsAdded) > 0) {
            $this->checkSubscriptionLimitByModelName($roleIdsAdded);
        }
    
        // Actualización de configuraciones (solo settings)
        if ($request->boolean('isSettings')) {
            $settings = $oldUser->settings;
            $settings['locale'] = $request->locale ?? $settings['locale'];
            $settings['theme'] = $request->theme ?? $settings['theme'];
            $oldUser->settings = $settings;
            $oldUser->save();
            return $this->sendResponse(
                $oldUser->load('roles'),
                __('lang.updated_successfully', ['operator' => __('lang.setting')])
            );
        }
    
        $input = $request->except([
            'avatar', 'schedules', 'change_avatar', 'role_id', 'role', 'roles',
            'has_media', 'deleted_at', 'created_at', 'updated_at', 'verified', 'id'
        ]);
    
        //Si el campo de password no esta vacio entonces hashea la contraseña
        if (isset($input['password']) && !empty($input['password'])) {
            $input['password'] = Hash::make($input['password']);
        } else {
            unset($input['password']);
        }
    
        try {
            DB::beginTransaction();
    
            // Actualizar usuario y roles
            $user = $this->userRepository->update($input, $id);
            $user->syncRoles($newRoleIds);
    
            if (tenant() && in_array(4, $newRoleIds)) {
                
                //Nuevos horarios
                $newSchedules = $request->input('schedules', []);

                if (empty($newSchedules)) {
                    DB::rollBack();
                    return $this->sendError(__('lang.schedules_required'));
                }

                // Obtener horarios actuales del usuario
                $currentSchedules = $user->schedules()->get()->toArray();
    
                $formattedCurrentSchedules = array_map(function ($schedule) {
                    return [
                        'start_time' => date('H:i:s', strtotime($schedule['start_time'])),
                        'end_time' => date('H:i:s', strtotime($schedule['end_time'])),
                        'breaks' => array_map(function ($break) {
                            // Ordenar claves y formatear tiempos
                            return [
                                'start_time' => date('H:i:s', strtotime($break['start_time'])),
                                'end_time' => date('H:i:s', strtotime($break['end_time'])),
                            ];
                        }, $schedule['breaks'] ?? [])
                    ];
                }, $currentSchedules);
                
                $formattedNewSchedules = array_map(function ($schedule) {
                    return [
                        'start_time' => date('H:i:s', strtotime($schedule['start_time'])),
                        'end_time' => date('H:i:s', strtotime($schedule['end_time'])),
                        'breaks' => array_map(function ($break) {
                            // Ordenar claves y formatear tiempos
                            return [
                                'start_time' => date('H:i:s', strtotime($break['start_time'])),
                                'end_time' => date('H:i:s', strtotime($break['end_time'])),
                            ];
                        }, $schedule['breaks'] ?? [])
                    ];
                }, $newSchedules);          

                // Comparar horarios actuales con los nuevos
                if ($formattedCurrentSchedules !== $formattedNewSchedules) {
                    // Validar si hay citas en conflicto
                    $existingAppointments = $user->appointments()
                        ->whereIn('state', ['pending', 'confirmed'])
                        ->where(function ($query) use ($newSchedules) {
                            foreach ($newSchedules as $schedule) {
                                $query->orWhere(function ($subQuery) use ($schedule) {
                                    $subQuery->whereTime('date', '>=', $schedule['start_time'])
                                            ->whereTime('date', '<=', $schedule['end_time']);
                                });
                            }
                        })
                        ->exists();

                    if ($existingAppointments) {
                        DB::rollBack();
                        return $this->sendError(__('lang.cannot_change_schedule_due_to_appointments'));
                    }

                    // Actualizar horarios si no hay conflictos
                    $user->schedules()->delete();
                    foreach ($newSchedules as $schedule) {
                        $schedule['breaks'] = $schedule['breaks'] ?? null;
                        $user->schedules()->create($schedule);
                    }
                }               
            }
    
            // Actualizar avatar si aplica
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
        $user = $this->userRepository->with('roles')->withTrashed()->find($id);
        try {

            if (empty($user)) {
                return $this->sendError(__('lang.not_found', ['operator' => __('lang.user')]), 201);
            }

            //Valida si es tenant y si los roles han cambiado:        
            // $roleIdsAdded = $user->roles->pluck('id')->toArray();
            // if (tenant() && $user->deleted_at) {
            //     if (count($roleIdsAdded) > 0) {
            //        $this->checkSubscriptionLimitByModelName($roleIdsAdded);
            //     }
            // }

            $roles = $user->roles->pluck('id')->toArray();
            if (in_array(4, $roles)) {

                //Necesitamos validar si tiene citas pendientes o confirmadas y evitar que se pueda desactivar el usuario.
                $existingAppointments = $user->appointments()
                    ->whereIn('state', ['pending', 'confirmed'])
                    ->exists();

                if ($existingAppointments) {
                    return $this->sendError(__('lang.cannot_disable_user_due_to_appointments'));
                }
            }
        

            $message = __('lang.disabled_successfully', ['operator' => __('lang.user')]);
            if (empty($user->deleted_at)) {
                $user->delete($id);
            } else {
                $user->restore();
                $message = __('lang.enabled_successfully', ['operator' => __('lang.user')]);
            }

            $user->load('roles');
            return $this->sendResponse($user, $message);
        } catch (Exception $e) {
            Log::error($e->getMessage());
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

    /**
     * $data['start]
     * $data['end']
     */
    protected function loadAppointments($id, $data)
    {
        $appointments =  DB::select("SELECT
            p.name, 
            p.last_name, 
            p.mother_last_name,
            p.document_type,
            p.rut,
            p.phone,
            p.cellphone,
            p.email, 
            a.`date`,
            a.duration,
            a.intern_observation,
            a.state 
        FROM appointments a 
        INNER JOIN patients p ON a.patient_id = p.id 
        WHERE a.user_id = $id AND a.date >= '{$data["start"]}' AND a.date <= '{$data['end']}'
        AND a.deleted_at IS NULL ");

        foreach ($appointments as $key => $appointment) {
            $appointment->custom_duration = $this->customDurationOnAppointment($appointment->date, $appointment->duration);
        }

        return $appointments;
    }

    protected function loadPayments($id, $data)
    {
        return DB::select("SELECT 
            ap.id,
            CONCAT(
                DATE_FORMAT(b.created_at, '%d/%m/%Y'),
                ' #',
                LPAD(b.id, 5, '0')
            ) AS label,
                ba.action_type,
                ba.action_name,
                ba.action_group_name,
                ba.area,
                ap.payment_date,
                ap.amount,
                p.check_paid 
            FROM action_payments ap 
            INNER JOIN payments p ON ap.payment_id = p.id 
            INNER JOIN budget_actions ba ON ap.budget_action_id = ba.id 
            INNER JOIN budgets b ON ba.budget_id = b.id 
            WHERE ap.payment_date >= '{$data["start"]}' AND ap.payment_date <= '{$data["end"]}'
            AND ap.deleted_at IS NULL
            AND ap.professional_id = 98 AND ap.amount > 0");
    }

    protected function customDurationOnAppointment($date, $duration = 15)
    {
        $date = new \DateTime($date);
        $dateStart = $date->format('Y-m-d\TH:i:s');
        if ($duration != null)
            $duration = $duration * 15;
        else
            $duration = 15;
        $dateEnd = $date->add(new \DateInterval('PT' . $duration . 'M'));
        $dateEnd = $dateEnd->format('Y-m-d\TH:i:s');
        return $dateEnd;
    }
}
