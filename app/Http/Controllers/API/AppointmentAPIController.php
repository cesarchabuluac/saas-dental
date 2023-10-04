<?php

namespace App\Http\Controllers\API;

use App\Events\AppointmentStatusChangeEvent;
use App\Events\MessagePublished;
use App\Events\RealTimeMessage;
use App\Exports\AppointmentsExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateAppointmentRequest;
use App\Jobs\SendEmail;
use App\Mail\AppointmentRegister;
use App\Models\Appointment;
use App\Notifications\AppointmentNotification;
use App\Notifications\RealTimeNotification;
use App\Repositories\ActionPaymentRepository;
use App\Repositories\AppointmentLogRepository;
use App\Repositories\AppointmentRepository;
use App\Repositories\BranchOfficeRepository;
use App\Repositories\NotificationRepository;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Maatwebsite\Excel\Facades\Excel;


class AppointmentAPIController extends Controller
{

    // Constantes para códigos de error y mensajes
    const APPOINTMENT_AVAILABLE = 200;
    const APPOINTMENT_NOT_AVAILABLE = 201;

    /** @var  AppointmentRepository */
    private $appointmentRepository;

    /** @var  AppointmentLogRepository */
    private $appointmentLogRepository;

    /** @var  UserRepository */
    private $userRepository;

    /** @var  BranchOfficeRepository */
    private $branchOfficeRepository;

    /** @var  NotificationRepository */
    private $notificationRepository;

    /** @var  ActionPaymentRepository */
    private $actionPaymentRepository;

    public function __construct(
        AppointmentRepository $appointmentRepo,
        UserRepository $userRepo,
        BranchOfficeRepository $branchOfficeRepo,
        NotificationRepository $notificationRepo,
        ActionPaymentRepository $actionPaymentRepo,
        AppointmentLogRepository $appointmentLogRepo
    ) {

        $this->appointmentRepository = $appointmentRepo;
        $this->userRepository = $userRepo;
        $this->branchOfficeRepository = $branchOfficeRepo;
        $this->notificationRepository = $notificationRepo;
        $this->actionPaymentRepository = $actionPaymentRepo;
        $this->appointmentLogRepository = $appointmentLogRepo;
    }

    public function print(Request $request)
    {
        return $this->appointmentRepository->paginate(10);
    }

    public function getEvents(Request $request)
    {
        $startAt = Carbon::parse($request->start)->startOfDay();
        $endAt = Carbon::parse($request->end)->endOfDay();
        $professionalId = $request->input('professional');

        // Si no se proporciona el ID del profesional, devolvemos una respuesta vacía
        if (!$professionalId) {
            return $this->sendResponse([], 'Citas recuperadas exitosamente');
        }

        $state = $request->input('state', '');
        $appointments = $this->appointmentRepository->with(['user', 'appointmentLogs.user'])
            ->where('appointments.user_id', $professionalId)
            ->whereBetween('date', [$startAt, $endAt])
            ->when(!empty($state), function ($q) use ($state) {
                $q->whereIn('appointments.state', explode(",", $state));
            })
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->leftJoin('patient_numbers as pn', 'patients.id', '=', 'pn.patient_id')
            ->join('users as u', 'appointments.user_id', '=', 'u.id')
            ->selectRaw("appointments.*, case when pn.e164 is null then patients.cellphone else pn.e164 end as e164, concat(patients.name, ' ',
                patients.last_name, ' ', patients.mother_last_name) as patient_name, patients.phone, patients.rut, patients.email, u.name as doctor")
            ->get();

        $appName = config("settings.app_name");

        $appointments->transform(function ($a) use ($appName) {
            $color = '';
            $onlyState = '';

            switch ($a->state) {
                case 'confirmed':
                    $color = '#28c76f';
                    $onlyState = __('lang.appointment_state_confirmed');
                    break;
                case 'pending':
                    $color = '#ff9f43';
                    $onlyState = __('lang.appointment_state_pending');
                    break;
                case 'canceled':
                    $color = '#ea5455';
                    $onlyState = __('lang.appointment_state_canceled');
                    break;
                case 'assisted':
                    $color = '#7367f0';
                    $onlyState = __('lang.appointment_state_assisted');
                    break;
                case 'unassisted':
                    $color = '#4b4b4b';
                    $onlyState = __('lang.appointment_sate_unassisted');
                    break;
            }

            $appointmentDate = Carbon::parse($a->date)->translatedFormat(config('settings.date_format'));
            $message = "*" . __('lang.hi') . " {$a->patient_name}!* %0A%0A";
            $mobile = null;
            if ($a->patient && $a->patient->mobile) {
                $mobile = $a->patient->mobile->e164 ?: $a->patient->cellphone;
            }

            $message = "";
            $message .= "*" . __('lang.appointment_mail_detail') . "*%0A%0A";
            $message .= "*" . __('lang.appointment_mail_number') . ":* {$a->id}%0A";
            $message .= "*" . __('lang.appointment_mail_date_detail') . "* {$appointmentDate}%0A";
            $message .= "*" . __('lang.appointment_mail_document_detail') . ":* {$a->rut}%0A";
            $message .= "*" . __('lang.appointment_mail_name_detail') . ":* {$a->patient_name}%0A%0A";
            $message .= "*" . __('lang.appointment_mail_email_detail') . ":* {$a->email}%0A";
            $message .= "*" . __('lang.appointment_mail_phone_detail') . ":* {$mobile}, {$a->phone}%0A";
            $message .= "*" . __('lang.appointment_mail_duration_detail') . ":* {$a->duration}%0A%0A";
            $message .= "*" . __('lang.appointment_mail_great') . "*%0A%0A";
            $message .= __('lang.appointment_mail_doctor_1') . " *{$a->doctor}* " . __('lang.appointment_mail_doctor_2') . "%0A%0A";
            $whatsapp = "<a target='_blank' href='http://wa.me/{$mobile}?text={$message}'>$mobile</a>";

            $date = new \DateTime($a->date);
            $dateStart = $date->format('Y-m-d\TH:i:s');
            $duration = $a->duration != null ? $a->duration * 15 : 15;
            $dateEnd = $date->add(new \DateInterval('PT' . $duration . 'M'))->format('Y-m-d\TH:i:s');

            return [
                'id' => $a->id,
                'disabled' => true,
                'title' => $a->patient_name,
                'start' => $a->date_start,
                'end' => $a->date_end,
                'allDay' => false,
                'color' => $a->color,
                'textColor' => 'black',
                'cellphone' => $a->e164,
                'state' => $a->state,
                'intern_observation' => $a->intern_observation,
                'branch_office_id' => $a->branch_office_id,
                'duration' => $a->duration,
                'logs' => $a->appointmentLogs,
                "extendedProps" => array(
                    'appointment_id' => $a->id,
                    'date' => $a->date,
                    'calendar' => $a->state,
                    'patient' => null,
                    'intern_observation' => $a->intern_observation,
                    'user_id' => $a->user_id,
                    'patient_id' => $a->patient_id,
                    'doctor' => $a->user,
                    'duration' => $a->duration,
                    'start_at' => $dateStart,
                    'end_at' => $dateEnd,
                    'color' => $color,
                    'message' => $message,
                    'mobile' => $mobile,
                    'folio' => __('lang.appointment_mail_number') . ": #" . $a->id,
                    'status' => __('lang.status') . ": " . $onlyState,

                ),
                'appointment_swal_option' => __('lang.appointment_swal_option'),
                'appointment_swal_whatsapp' => __('lang.appointment_swal_whatsapp'),
                'appointment_swal_edit' => __('lang.appointment_swal_edit'),
                'appointment_details' => $message
            ];
        });

        return $this->sendResponse($appointments, 'Appointment retrieved successfully');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $isDashboard = boolval(request('isDashboard'));
        $roles = array(1, 2, 3);

        $state = request('state') ?? null;

        //Current month        
        $start = Carbon::now()->startOfMonth()->toDateString();
        $end = Carbon::now()->endOfMonth()->toDateString();

        if (request()->filled('date')) {
            $selectedDate = Carbon::parse(request('date'));
            if ($selectedDate->isSameDay(now())) {
                $start = now();
                $end = Carbon::parse(request('date'))->endOfDay();
            } else {
                $start = Carbon::parse(request('date'))->startOfDay();
                $end = Carbon::parse(request('date'))->endOfDay();
            }
        }

        $appointments =  $this->appointmentRepository->query()->with('user', 'patient', 'branch')
            ->where(function ($q) use ($isDashboard, $start, $end) {
                if ($isDashboard) {
                    $q->whereBetween('date', [$start, $end]);
                }
            })
            ->where(function ($q) use ($roles) {
                if (!in_array(auth()->user()->roles[0]->id, $roles)) {
                    $q->where('user_id', auth()->user()->id);
                }
            })
            ->where(function ($query) {
                $query->whereHas('branch', function ($q) {
                    $q->where('branch_offices.name', 'LIKE', '%' . request('search') . '%');
                })->orWhereHas('patient', function ($q) {
                    $q->where(
                        DB::raw(
                            "REPLACE(
                            CONCAT(
                                COALESCE(name,''),' ',
                                COALESCE(last_name,''),' ',
                                COALESCE(mother_last_name,'')
                            ),
                        '  ',' ')"
                        ),
                        'LIKE',
                        '%' . request('search') . '%'
                    );
                })->orWhereHas('user', function ($q) {
                    $q->where('users.name', 'LIKE', '%' . request('search') . '%');
                })->orWhere('id', 'LIKE', '%' . request('search') . '%');
            })
            ->where(function ($query) use ($state) {
                if (!empty($state) && $state != 'all') {
                    return $query->where('state', $state);
                }
            })
            ->orderBy('date', 'ASC')
            ->paginate(request('perPage'));
        return $appointments;
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
    public function store(CreateAppointmentRequest $request)
    {
        $request['onMethod'] = true;
        $response = $this->availableEvent($request);

        // Get the JSON content of the response
        $responseData = json_decode(json_encode($response), true);
        if (!empty($responseData)) {
            if (!$responseData['original']['success']) {
                return $this->sendError($responseData['original']['message'], 201);
            }
        }

        $input = $request->except('patient', 'onMethod');
        $input['date'] = Carbon::createFromFormat('d/m/Y H:i', $request['date'])->format('Y-m-d H:i:s');

        try {
            DB::beginTransaction();
            $appointment = $this->appointmentRepository->create($input);
            DB::commit();

            $appointment->load('branch');
            // Notification::send($appointment->user, new AppointmentNotification($appointment));
            // event (new MessagePublished($appointment->user->name, $appointment->user->email));
            // event(new RealTimeMessage("New appointment #".$appointment->id." to ".$appointment->patient->full_name));
            // $appointment->user->notify(new AppointmentStatusChangeEvent("New appointment #".$appointment->id." to ".$appointment->patient->full_name,));
            // $appointment->user->notify(new RealTimeMessage("New appointment #".$appointment->id." to ".$appointment->patient->full_name,));

            $appointment->user->notify(new AppointmentNotification($appointment));

            if (config('settings.enable_appointment_notification')) {
                if (filter_var($appointment->patient->email, FILTER_VALIDATE_EMAIL)) {
                    dispatch(new SendEmail('appointment', $appointment->patient->email, $appointment));
                }
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }

        return $this->sendResponse($appointment, __('lang.saved_successfully', ['operator' => __('lang.appointment')]));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        $appointment->load(['user', 'doctor', 'patient', 'branch']);
        return $this->sendResponse($appointment, __('lang.retrievied_successfully', ['operator' => __('lang.appointment')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update($id, CreateAppointmentRequest $request)
    {
        $input = $request->only('user_id', 'branch_office_id', 'date', 'state', 'duration', 'patient_id', 'intern_observation');
        $input['date'] = Carbon::createFromFormat('d/m/Y H:i', $request['date'])->format('Y-m-d H:i:s');
        $oldAppointment = $this->appointmentRepository->find($id);

        if (empty($oldAppointment)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.appointment')]), 201);
        }

        $oldDate = Carbon::parse($oldAppointment->date);
        if ($oldDate->notEqualTo($input['date'])) {

            $request['onMethod'] = true;
            $response = $this->availableEvent($request);

            // Get the JSON content of the response
            $responseData = json_decode(json_encode($response), true);
            if (!empty($responseData)) {
                if (!$responseData['original']['success']) {
                    return $this->sendError($responseData['original']['message'], 201);
                }
            }
        }

        if (isset($request->option)) {
            $input['state'] = $request->option;
        }

        try {

            DB::beginTransaction();
            $appointment = $this->appointmentRepository->where('id', $id)->update($input);

            // Get the corresponding message according to the status of the appointment        
            $logMessage = __('lang.appointment_state_' . $input['state']);
            $oldAppointment->createAppointmentLog($logMessage);

            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }


        if ($oldAppointment->state != $input['state']) {
            $appointment->user->notify(new AppointmentNotification($appointment));
            if (config('settings.enable_appointment_notification')) {
                if (filter_var($appointment->patient->email, FILTER_VALIDATE_EMAIL)) {
                    if ($input['state'] != 'assisted' || $input['state'] != 'unassisted') {
                        dispatch(new SendEmail('appointment', $appointment->patient->email, $appointment));
                    }
                }
            }
        }

        return $this->sendResponse($appointment, __('lang.updated_successfully', ['operator' => __('lang.appointment')]));
    }

    public function changeStatus($id, Request $request)
    {
        $input = $request->all();
        $oldAppointment = $this->appointmentRepository->find($id);

        if (empty($oldAppointment)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.appointment')]), 201);
        }

        try {

            DB::beginTransaction();
            $appointment = $this->appointmentRepository->update($input, $id);

            // Get the corresponding message according to the status of the appointment        
            $logMessage = __('lang.appointment_state_' . $input['state']);
            $oldAppointment->createAppointmentLog($logMessage);

            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }

        if ($oldAppointment->state != $input['state']) {
            // $appointment->user->notify(new AppointmentNotification($appointment));

            if (config('settings.enable_appointment_notification')) {
                if (filter_var($appointment->patient->email, FILTER_VALIDATE_EMAIL)) {
                    if ($input['state'] != 'assisted' || $input['state'] != 'unassisted') {
                        dispatch(new SendEmail('appointment', $appointment->patient->email, $appointment));
                    }
                }
            }
        }

        return $this->sendResponse($appointment->load('user'), __('lang.updated_successfully', ['operator' => __('lang.appointment')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $appointment = $this->appointmentRepository->find($id);

        if (empty($appointment)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.appointment')]), 201);
        }
        $appointment->delete();
        // $appointment->user->notify(new AppointmentNotification($appointment));        
        return $this->sendResponse($appointment, __('lang.cancelled_successfully', ['operator' => __('lang.appointment')]));
    }

    public function sendNotification($id, Request $request)
    {
        try {
            $appointment = $this->appointmentRepository->with('branch')->withTrashed()->find($id);
            if (config('settings.enable_email_notification')) {
                if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
                    dispatch(new SendEmail('appointment', $request->email, $appointment));
                }
            }

            return $this->sendResponse($appointment, __('lang.sended_successfully', ['operator' => __('lang.appointment')]));
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
    }

    public function appointmentsMonthly(Request $request)
    {
        $appointments = $this->appointmentRepository->where('user_id', auth()->user()->id)
            ->where(DB::raw('month(`date`)'), DB::raw("month(current_date())"))
            ->where(DB::raw('year(`date`)'), DB::raw("year(current_date())"))->get();

        $confirmed = $appointments->where('state', 'confirmed')->count();
        $canceled = $appointments->where('state', 'canceled')->count();
        $pending = $appointments->where('state', 'pending')->count();

        $userId = auth()->user()->id;
        $query = "SELECT my.name, IFNULL(T1.total_month, 0) AS total FROM month_years my
            LEFT JOIN (
                SELECT MONTH(`date`) AS `mes`, SUM(1) AS total_month
                FROM appointments WHERE YEAR(`date`) = YEAR(curdate()) AND user_id = $userId
                AND MONTH(`date`) = MONTH(curdate()) GROUP BY `mes`) T1 ON T1.mes = my.id";
        $totalPerMonth  = collect(DB::select($query));


        return $this->sendResponse(
            [
                'appointment' => $appointments,
                'perMonth' => $totalPerMonth,
                'confirmed' => $confirmed,
                'canceled' => $canceled,
                'pending' => $pending
            ],
            'Appointments globals retrieved successfullly'
        );
    }

    public function availableEvent(Request $request)
    {
        // Duración estimada de una cita en minutos (ejemplo: 60 minutos)
        $appointmentDuration = config('settings.scheduled_appointment_interval') ?? 15;

        $isDST = date('I'); // It will return 1 if it is daylight saving time, 0 if it is not.

        // Get current date
        $currentDate = date('Y-m-d H:i:s');

        //Apply the one hour adjustment in case of daylight saving time
        if ($isDST) {
            $currentDate = date('Y-m-d H:i:s', strtotime($currentDate) - 3600);
        }

        // Check if the date is valid
        if (!Carbon::hasFormat($request['date'], 'd/m/Y H:i')) {
            return $this->sendError(__('lang.invalid_date_format'), 201);
        }

        $date = Carbon::createFromFormat('d/m/Y H:i', $request['date'])->format('Y-m-d H:i:s');
        $userId = $request['user_id'];


        // Check if the user exists
        $user = $this->userRepository->find($userId);

        // Log::info($user->isAvailableAt($currentDate));

        if (!$user) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.doctor')]), 201);
        }


        //Selected date
        $selectedDate = Carbon::parse($date)->format('Y-m-d');

        // Get the start and end time of the day in which it is allowed to schedule appointments
        $officeStartTime = Carbon::createFromFormat('H:i:s', config('settings.schedule_start_time'))->format('H:i:s') ?? "09:00:00";
        $officeEndTime = Carbon::createFromFormat('H:i:s', config('settings.schedule_end_time'))->format('H:i:s') ?? "22:00:00";


        // Combines the date selected by the user with the start time of office hours
        $officeStartTime = Carbon::createFromFormat('Y-m-d H:i:s', "$selectedDate $officeStartTime");


        // Combines the date selected by the user with the end of office hours time
        $officeEndTime = Carbon::createFromFormat('Y-m-d H:i:s', "$selectedDate $officeEndTime");

        //Check if date is valid (greater than current)
        $now = $currentDate;
        $selectedDate = Carbon::createFromFormat('Y-m-d H:i:s', $date);

        //Check if the selected date is within the range of office hours
        if ($selectedDate >= $officeStartTime && $selectedDate <= $officeEndTime) {

            if ($selectedDate <= $now) {
                return $this->sendError(__('lang.appointment_not_available'), 201);
            }

            // Check availability
            $appointment = $this->appointmentRepository->where('date', $selectedDate)->where('user_id', $user->id)->count();
            if ($appointment > 0) {
                return $this->sendError(__('lang.appointment_not_available'), 201);
            }
        } else {
            return $this->sendError(__('lang.appointment_not_available'), 201);
        }

        // If everything is ok, the appointment is available
        return $this->sendResponse($date, __('lang.appointment_available'));
    }


    /**
     * Report appointments
     *
     * @param   Request  $request  [$request description]
     *
     * @return  [type]             [return description]
     */
    public function filterReport(Request $request)
    {
        $appointments = $this->appointmentRepository->query()
            ->with('user', 'patient', 'branch')
            ->when($request->filled('start'), function ($query) use ($request) {
                return $query->where('date', '>=', Carbon::parse($request->start)->startOfDay());
            })
            ->when($request->filled('end'), function ($query) use ($request) {
                return $query->where('date', '<=', Carbon::parse($request->end)->endOfDay());
            })
            ->when($request->filled('doctor_id'), fn ($query) => $query->where('user_id', $request->doctor_id))
            ->when($request->filled('state'), fn ($query) => $query->where('state', $request->state))
            ->when($request->filled('patient_id'), fn ($query) => $query->where('patient_id', $request->patient_id));


        if (isset($request->isDonwload)) {
            return Excel::download(new AppointmentsExport($request), 'Appointments.xlsx');
        }

        return $appointments->paginate(request('perPage'));
    }
}
