<?php

namespace App\Mail;

use App\Models\Budget;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BudgetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $budget;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Budget $budget)
    {
        $this->budget = $budget;
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

        return 
            $this->subject(__('lang.budget') . ": " . $this->budget->label)
            ->from($from, $name)->markdown('mail.budget-send');
    }
}
