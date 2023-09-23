<?php

namespace App\Console\Commands;

use App\Models\Appointment;
use App\Models\GeneralSetting;
use App\Models\Tenant;
use Illuminate\Console\Command;

class CheckAppointments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:appointments';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the status of appointments to unattended if the date and time of the appointment have passed';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Tenant::all()->map(function ($tenant) {
            tenancy()->initialize($tenant);

            Appointment::where('date', '<', now())
                ->where('state', 'confirmed')
                ->update(['state' => 'unassisted']);

            tenancy()->end();
        });

        $this->info('Appointments marked as unattended queued.');
        return Command::SUCCESS;
    }
}
