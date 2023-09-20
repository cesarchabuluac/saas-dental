<?php

namespace App\Console\Commands;

use App\Models\GeneralSetting;
use App\Models\Plan;
use App\Models\Tenant;
use App\Services\MailService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SendUpcomingInvoiceEmailsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'upcoming-invoice-email:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Monthly invoice email reminder';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $service = app()->make(MailService::class);
        $setting = GeneralSetting::where('key', 'invoice_reminder_tenant_mailjet_template_id')->first();
        Tenant::whereNull('trial_ends_at')
            ->whereNull('plan_ends_at')
            ->chunk(200, function ($tenants) use($service, $setting) {
                foreach ($tenants as $tenant) {                    
                    $upcomingInvoices = $tenant->upcomingInvoice();                    
                    foreach ($upcomingInvoices->lines->data as $invoice) {
                        $currency = Str::upper($invoice->currency);
                        $dataEmail = [
                            'to' => [
                                [
                                    'name' => $tenant->name,
                                    'email' => $tenant->email,
                                ],
                            ],
                            'subject' => "Recordatorio de Factura",
                            'template_id' => $setting->value,
                            'vars' => [
                                "name" => $tenant->name,
                                "plan_name" => Plan::where('api_id', $invoice->plan->id)->first()->name,
                                "start_date" => Carbon::parse($invoice->period->start)->toFormattedDateString(),
                                "end_date" => Carbon::parse($invoice->period->end)->toFormattedDateString(),
                                "total_amount" => (float) $invoice->amount / 100 . " " . $currency,
                                "amount_excluding_tax" => (float) $invoice->amount_excluding_tax / 100 . " " . $currency,
                                "currency" => $currency,
                                "description" => $invoice->description,
                                "quantity" => $invoice->quantity,
                            ],
                        ];
                        $service->sendEmail($dataEmail);
                    }
                }
            });

        $this->info('Upcoming invoice emails queued.');
        return Command::SUCCESS;
    }
}
