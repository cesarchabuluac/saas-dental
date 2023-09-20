<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use App\Models\GeneralSetting;
use App\Services\MailService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SendTrialEndEmailsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'trial-ends-email:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send trial end emails to users';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $service = app()->make(MailService::class);
        
        $setting = GeneralSetting::where('key', 'trials_end_tenant_mailjet_template_id')->first();

        // Send trial end emails to tenants who have a trial ending in the next 24 hours.
        Tenant::whereNotNull('trial_ends_at')
            ->whereNull('data->trial_ends_email_sent_at')
            ->whereDate('trial_ends_at', Carbon::tomorrow())
            ->chunk(200, function ($tenants) use ($service, $setting) {
                foreach ($tenants as $tenant) {

                    if ($tenant->trial_ends_at->isTomorrow()) {
                        $tenant->update(['trial_ends_email_sent_at' => now()]);
                        $dataEmail = [
                            'to' => [
                                [
                                    'name' => $tenant->name,
                                    'email' => $tenant->email,
                                ],
                            ],
                            'subject' => "¡Tu prueba termina mañana!",
                            'template_id' => $setting->value,
                            'vars' => [
                                "name" => $tenant->name,
                                "domain_link" => $tenant->domain_url,
                            ],
                        ];
                        $service->sendEmail($dataEmail);
                    }
                }
            });

        $this->info('Trial end emails queued.');

        return Command::SUCCESS;
    }
}
