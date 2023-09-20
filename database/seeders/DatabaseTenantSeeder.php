<?php

namespace Database\Seeders;

use Database\Seeders\Tenant\ActionGroupSeeder;
use Database\Seeders\Tenant\BranchOfficeSeeder;
use Database\Seeders\Tenant\CountrySeeder;
use Database\Seeders\Tenant\CurrencySeeder;
use Database\Seeders\Tenant\DashboardPermissionsSeeder;
use Database\Seeders\Tenant\DocumentTypeSeeder;
use Database\Seeders\Tenant\ExpenseCategorySeeder;
use Database\Seeders\Tenant\InventoriesSeeder;
use Database\Seeders\Tenant\LaboratoryPermissionTableSeeder;
use Database\Seeders\Tenant\MonthYearsTableSeeder;
use Database\Seeders\Tenant\MovementTypeSeeder;
use Database\Seeders\Tenant\PaymentMethodSeeder;
use Database\Seeders\Tenant\PermissionInventoriesSeeder;
use Database\Seeders\Tenant\PermissionsTarrifsTableSeeder;
use Database\Seeders\Tenant\PermissionsTodoTableSeeder;
use Database\Seeders\Tenant\RoleAndPermissionsTableSeeder;
use Database\Seeders\Tenant\ScheduleFrecuencyTableSeeder;
use Database\Seeders\Tenant\TenantSettingSeeder;
use Database\Seeders\Tenant\UserSeeder;
use Database\Seeders\Tenant\WeekDaysTableSeeder;
use Database\Seeders\Tenant\WorkOrdersTableSeeder;
use Illuminate\Database\Seeder;
use Laravel\Passport\ClientRepository;

class DatabaseTenantSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $client = new ClientRepository();
        $client->createPasswordGrantClient(null, 'Default password grant client', 'https://soft-dental.com');
        $client->createPersonalAccessClient(null, 'Default personal access client', 'https://soft-dental.com');

        $this->call([
            TenantSettingSeeder::class,
            UserSeeder::class,
            RoleAndPermissionsTableSeeder::class,
            CurrencySeeder::class,
            CountrySeeder::class,

            //App
            ActionGroupSeeder::class,
            BranchOfficeSeeder::class,
            PermissionInventoriesSeeder::class,
            InventoriesSeeder::class,
            MovementTypeSeeder::class,
            // DashboardPermissionsSeeder::class,
            LaboratoryPermissionTableSeeder::class,
            MonthYearsTableSeeder::class,
            PaymentMethodSeeder::class,
            PermissionsTarrifsTableSeeder::class,
            PermissionsTodoTableSeeder::class,
            ScheduleFrecuencyTableSeeder::class,
            WeekDaysTableSeeder::class,
            WorkOrdersTableSeeder::class,
            DocumentTypeSeeder::class,
            ExpenseCategorySeeder::class,
        ]);
    }
}
