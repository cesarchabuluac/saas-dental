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
        // $schedule->command('inspire')->hourly();

        // telescope daily data pruner
        $schedule->command('telescope:prune')->daily()->timezone(config('app.timezone'));
        $schedule->command('notification:clear')->weekly()->timezone(config('app.timezone'));
        $schedule->command('check:appointments')->everyFifteenMinutes()->timezone(config('app.timezone'));
        $schedule->command('trial-ends-email:send')->hourly()->timezone(config('app.timezone'));
        $schedule->command('upcoming-invoice-email:send')->lastDayOfMonth()->timezone(config('app.timezone'));
        $schedule->command('reminder-appointment:send')->everyMinute()->runInBackground()->timezone(config('app.timezone'));
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
