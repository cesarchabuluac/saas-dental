<?php

namespace App\Jobs;

use App\Mail\AppointmentRegister;
use App\Mail\BudgetMail;
use App\Mail\Payment as MailPayment;
use App\Models\Appointment;
use App\Models\Budget;
use App\Models\Payment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $emailType;
    protected $recipients;
    protected $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($emailType, $recipients, $data)
    {
        $this->emailType = $emailType;
        $this->recipients = $recipients;
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Determina el mailable correspondiente
        $mailableClass = $this->getMailableForEmailType($this->emailType);

        Mail::to($this->recipients)
            ->send(new $mailableClass($this->data));
    }

    private function getModelForEmailType($emailType)
    {

        // Implementa la lógica para determinar el modelo basado en el tipo de correo
        // Por ejemplo, podrías utilizar un array de mapeo o una lógica de switch.

        switch ($emailType) {
            case 'payment':
                return Payment::class;
            case 'budget':
                return Budget::class;
            case 'appointment':
                return Appointment::class;
            default:
                return null; // Tipo de correo no válido
        }
    }

    private function getMailableForEmailType($emailType)
    {
        // Implementa la lógica para determinar el mailable basado en el tipo de correo
        // Por ejemplo, podrías utilizar un array de mapeo o una lógica de switch.

        switch ($emailType) {
            case 'payment':
                return MailPayment::class;
            case 'budget':
                return BudgetMail::class;
            case 'appointment':
                return AppointmentRegister::class;
                // Agregar más casos según sea necesario
            default:
                return null; // Tipo de correo no válido
        }
    }
}
