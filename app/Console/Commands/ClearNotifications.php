<?php

namespace App\Console\Commands;

use App\Models\Notification;
use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ClearNotifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete notifications older than a month ago';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Tenant::all()->each(function ($tenant) {
            tenancy()->initialize($tenant);
        
            DB::transaction(function () {
                $limite = now()->subMonths(1);
                Notification::where('created_at', '<', $limite)->delete();
            });
        
            tenancy()->end();
        });
        

        $this->info('Delete notifications older than a month ago');
        return Command::SUCCESS;
    }
}
