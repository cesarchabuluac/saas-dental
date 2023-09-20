<?php

namespace Database\Seeders;

use Database\Seeders\Central\CentralSettingSeeder;
use Database\Seeders\Central\CountrySeeder;
use Database\Seeders\Central\CurrencySeeder;
use Database\Seeders\Central\FeaturePlanSeeder;
use Database\Seeders\Central\FeatureSeeder;
use Database\Seeders\Central\PlanSeeder;
use Database\Seeders\Central\RoleAndPermissionsTableSeeder;
use Database\Seeders\Central\UserSeeder;
use Illuminate\Database\Seeder;
use Laravel\Passport\ClientRepository;

class DatabaseSeeder extends Seeder
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
            CentralSettingSeeder::class,
            CurrencySeeder::class,
            CountrySeeder::class,
            UserSeeder::class,
            RoleAndPermissionsTableSeeder::class,
            PlanSeeder::class,
            FeatureSeeder::class,
            FeaturePlanSeeder::class,
        ]);
    }
}
