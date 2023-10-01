<?php

namespace App\Http\Controllers\API\V2;

use App\Http\Controllers\Controller;
use App\Repositories\AppointmentRepository;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AppointmentAPIController extends Controller
{
    /** @var  AppointmentRepository */
    private $appointmentRepository;
    private $userRepository;

    public function __construct(AppointmentRepository $appointmentRepository, UserRepository $userRepository)
    {
        $this->appointmentRepository = $appointmentRepository;
        $this->userRepository = $userRepository;
    }

    public function index(Request $request)
    {
        // Parse las fechas de inicio y fin
        $startAt = Carbon::parse($request->start)->startOfDay();
        $endAt = Carbon::parse($request->end)->endOfDay();
        $currentDay = Carbon::now();
        $professionalId = $request->input('professional');

        $user = $this->userRepository->with('schedules')->find($professionalId);

        // Verifica si el usuario tiene horarios disponibles para el día de la semana actual.
        if ($startAt->isSameDay($currentDay) || $startAt->isAfter($currentDay)) {
            if (!$user->schedules || $user->schedules->where('day_of_week', $startAt->dayOfWeek)->isEmpty()) {
                $interval = config('settings.scheduled_appointment_interval') ?? 15; // Intervalo en minutos
                while ($startAt < $endAt) {
                    $intervalEnd = $startAt->copy()->addMinutes($interval);
                    $dataSchedule[] = [
                        'start' => $startAt->toDateTimeString(),
                        'end' => $intervalEnd->toDateTimeString(),
                        'disabled' => true,
                        'title' => __('lang.time_not_available'),
                        'textColor' => '#000000',
                        'allow' => false,
                        'backgroundColor' => '#ea5455',
                        'durationEditable' => false,
                        'doctor_name' => $user->name ?? null,
                        'extendedProps' => [
                            'calendar' => 'canceled',
                            'doctor' => $user,
                        ]
                    ];

                    $startAt = $intervalEnd;
                }

                // En caso de que no haya horario disponible, se envía una respuesta con un horario de fondo.
                return $this->sendResponse($dataSchedule, "Horario no disponible v2");
            }
        }

        // Verifica si se proporciona el ID del profesional
        if (!$professionalId) {
            return $this->sendResponse([], 'No se proporcionó el ID del profesional');
        }

        $state = $request->input('state', '');
        $appointments = $this->getAppointments($professionalId, $startAt, $endAt, $state);

        $appointments = $this->transformAppointments($appointments);

        return $this->sendResponse($appointments, 'Citas recuperadas exitosamente v2');
    }

    // Método para obtener las citas
    private function getAppointments($professionalId, $startAt, $endAt, $state)
    {
        return $this->appointmentRepository->with(['user', 'appointmentLogs.user'])
            ->where('appointments.user_id', $professionalId)
            ->whereBetween('date', [$startAt, $endAt])
            ->when(!empty($state), function ($q) use ($state) {
                $q->whereIn('appointments.state', explode(",", $state));
            })
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->leftJoin('patient_numbers as pn', 'patients.id', '=', 'pn.patient_id')
            ->join('users as u', 'appointments.user_id', '=', 'u.id')
            ->selectRaw("appointments.*, CASE WHEN pn.e164 IS NULL THEN patients.cellphone ELSE pn.e164 END AS e164,
                CONCAT(patients.name, ' ', patients.last_name, ' ', patients.mother_last_name) AS patient_name,
                patients.phone, patients.rut, patients.email, u.name AS doctor")
            ->get();
    }

    // Método para transformar las citas
    private function transformAppointments($appointments)
    {
        $appName = config("settings.app_name");

        return $appointments->map(function ($a) use ($appName) {
            // Lógica para asignar color y estado
            list($color, $onlyState) = $this->getColorAndState($a);

            // Generación de enlaces de WhatsApp
            $mobile = null;
            if ($a->patient && $a->patient->mobile) {
                $mobile = $a->patient->mobile->e164 ?: $a->patient->cellphone;
            }

            // Generación del mensaje
            $message = $this->generateMessage($a, $mobile);

            // Generación de enlaces de WhatsApp
            $whatsapp = $this->generateWhatsAppLink($a, $message, $mobile);

            // Transformación de la fecha y duración
            list($dateStart, $dateEnd) = $this->transformDateAndDuration($a);

            return [
                // Propiedades de las citas
                'id' => $a->id,
                'disabled' => false,
                'title' => $a->patient_name,
                'start' => $dateStart,
                'end' => $dateEnd,
                'allDay' => false,
                'color' => $color,
                'textColor' => 'black',
                'cellphone' => $a->e164,
                'state' => $a->state,
                'intern_observation' => $a->intern_observation,
                'branch_office_id' => $a->branch_office_id,
                'duration' => $a->duration,
                'logs' => $a->appointmentLogs,
                'doctor_name' => $a->user->name ?? null,
                // Propiedades extendidas
                "extendedProps" => [
                    'appointment_id' => $a->id,
                    'date' => $a->date,
                    'calendar' => $onlyState,
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
                ],
                'appointment_swal_option' => __('lang.appointment_swal_option'),
                'appointment_swal_whatsapp' => __('lang.appointment_swal_whatsapp'),
                'appointment_swal_edit' => __('lang.appointment_swal_edit'),
                'appointment_details' => $message
            ];
        });
    }

    // Otros métodos auxiliares
    private function getColorAndState($appointment)
    {
        // Lógica para asignar color y estado
        $color = '';
        $onlyState = '';

        switch ($appointment->state) {
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

        return [$color, $onlyState];
    }

    private function generateMessage($appointment, $mobile)
    {
        $a = $appointment;

        // Generación del mensaje
        $appointmentDate = Carbon::parse($a->date)->translatedFormat(config('settings.date_format'));
        $message = "*" . __('lang.hi') . " {$a->patient_name}!* %0A%0A";
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

        return $message;
    }

    private function generateWhatsAppLink($appointment, $message, $mobile)
    {
        $a = $appointment;
        $whatsapp = "<a target='_blank' href='http://wa.me/{$mobile}?text={$message}'>$mobile</a>";
        return $whatsapp;
    }

    private function transformDateAndDuration($appointment)
    {
        $a = $appointment;

        // Transformación de la fecha y duración
        $date = new \DateTime($a->date);
        $dateStart = $date->format('Y-m-d\TH:i:s');
        $duration = $a->duration != null ? $a->duration * 15 : 15;
        $dateEnd = $date->add(new \DateInterval('PT' . $duration . 'M'))->format('Y-m-d\TH:i:s');

        return [$dateStart, $dateEnd];
    }
}
