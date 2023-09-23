<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;

class CreateFrameworkDirectoriesForTenant extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:directory';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Tenant::all()->map(function ($tenant) {
            tenancy()->initialize($tenant);
            $storage_path = storage_path();
            mkdir("$storage_path/framework/cache", 0777, true);
            tenancy()->end();
        });
        return Command::SUCCESS;
    }
}
