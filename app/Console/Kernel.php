<?php

namespace App\Console;

use App\Models\GeneralSetting;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $settings = GeneralSetting::whereIn('key', ['scheduled_appointment_interval'])
                ->pluck('value', 'key')
                ->toArray();
        $interval = (int)$settings['scheduled_appointment_interval'] ?? 15;

        // $schedule->command('inspire')->hourly();

        $schedule->command('notification:clear')->weekly();
        $schedule->command('check:appointments')->everyNMinutes($interval);
        $schedule->command('trial-ends-email:send')->hourly();
        $schedule->command('upcoming-invoice-email:send')->lastDayOfMonth();
        $schedule->command('reminder-appointment:send')->everyMinute()->runInBackground();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}