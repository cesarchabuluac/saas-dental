<?php

namespace App\Mail;

use App\Models\Appointment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class AppointmentRegister extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $appointment;
    public $isReminder;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Appointment $appointment, $isReminder = false)
    {
        $this->appointment = $appointment;
        $this->isReminder = $isReminder;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject = __('lang.appointment') . ' ' . __("lang.appointment_state_{$this->appointment->state}") . ' #' . $this->appointment->id;
        if ($this->isReminder) {
            $subject = __('lang.appointment_reminder') . ' #' . $this->appointment->id;
        }

        $from = config('settings.mail_from_address');
        $name = config('settings.mail_from_name');
        return
            $this->from($from, $name)
            ->subject($subject)->from($from, $name)->markdown('mail.appointment', ['appointment' => $this->appointment, 'is_reminder' => $this->isReminder]);
    }
}
