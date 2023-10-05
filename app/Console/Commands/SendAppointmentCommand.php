<?php

namespace App\Console\Commands;

use App\Mail\AppointmentRegister;
use App\Models\Appointment;
use App\Models\GeneralSetting;
use App\Models\Tenant;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Queue;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendAppointmentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder-appointment:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Medical appointment reminder';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Tenant::all()->map(function ($tenant) {
            tenancy()->initialize($tenant);

            $settings = GeneralSetting::whereIn('key', ['enable_appointment_notification', 'app_appointment_reminder_every', 'language'])
                ->pluck('value', 'key')
                ->toArray();

            $enabled = (int)$settings['enable_appointment_notification'] ?? 0;
            $frequency = $settings['app_appointment_reminder_every'] ?? 'daily';           
            if ($enabled === 1) {
                $language = $settings['language'] ?? 'es';
                app()->setLocale($language);
                $appointments = $this->getAppointmentsForReminder($frequency);
                Log::info($appointments);
                $appointments->chunk(100, function ($chunkedAppointments) {
                    $chunkedAppointments->each(function ($appointment) {
                        $this->sendAppointmentReminder($appointment);
                    });
                });
            }

            tenancy()->end();
        });

        $this->info('Reminder appointment end emails queued.');

        return Command::SUCCESS;
    }

    private function getAppointmentsForReminder($frequency)
    {
        $dates = $this->getScheduleFrequency($frequency);
        return Appointment::whereIn('state', ['pending', 'confirmed'])
            ->whereBetween('date', $dates)
            ->where('notified', 0)
            ->get();
    }

    private function sendAppointmentReminder($appointment)
    {
        $patient = $appointment->patient;

        try {
            if (filter_var($patient->email, FILTER_VALIDATE_EMAIL)) {
                Mail::to($patient->email)->send(new AppointmentRegister($appointment, $isReminder = true));
                $appointment->notified = true;
                $appointment->save();
                sleep(5);
            }
        } catch (Exception $ex) {
            $input = [
                'user_id' => $appointment->user_id,
                'due_date' => Carbon::now(),
                'description' => "No se pudo enviar el recordatorio de la cita #{$appointment->id} del paciente {$patient->full_name}",
                'is_important' => true,
                'tags' => "high",
                'title' => "No se pudo enviar el recordatorio de la cita #{$appointment->id} del paciente {$patient->full_name}",
            ];
            // $task = $this->taskRepository->create($input);
            // $task->user->notify(new TaskAssignee($task));
            Log::alert($input);
        }
    }

    private function getScheduleFrequency($frecuency = 'dayly')
    {
        $defaultInterval = [
            'start' => Carbon::now(),
            'end' => Carbon::now()->addHours(1),
        ];

        $intervals = [
            'minute' => ['start' => 'addMinute', 'end' => 2],
            'two_minute' => ['start' => 'addMinutes', 'end' => 4],
            'three_minute' => ['start' => 'addMinutes', 'end' => 6],
            'four_minute' => ['start' => 'addMinutes', 'end' => 8],
            'five_minute' => ['start' => 'addMinutes', 'end' => 10],
            'then_minute' => ['start' => 'addMinutes', 'end' => 20],
            'fifteen_minute' => ['start' => 'addMinutes', 'end' => 30],
            'thirty_minute' => ['start' => 'addMinutes', 'end' => 60],
            'hourly' => ['start' => 'addHour', 'end' => 2],
            'dayly' => ['start' => 'addDay', 'end' => 2],
        ];

        if (isset($intervals[$frecuency])) {
            $interval = $intervals[$frecuency];
            $timestart1hour = Carbon::now()->{$interval['start']}($interval['end']);
            $timeend1hour = Carbon::now()->{$interval['start']}($interval['end'] + 1);
        } else {
            $timestart1hour = $defaultInterval['start'];
            $timeend1hour = $defaultInterval['end'];
        }

        return [$timestart1hour->format('Y-m-d H:i:s'), $timeend1hour->format('Y-m-d H:i:s')];
    }
}
