<?php

namespace App\Mail;

use App\Models\Payment as ModelsPayment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class Payment extends Mailable
{
    use Queueable, SerializesModels;

    public $budget;
    public $payment;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(ModelsPayment $payment)
    {
        $this->payment = $payment;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $from = config('settings.mail_from_address');
        $name = config('settings.mail_from_name');
        $subject = __('lang.payments.card_payment') . " #" . $this->payment->id;
        return
            $this->from($from, $name)
            ->subject($subject)->from($from, $name)->markdown('mail.payment');
    }
}
