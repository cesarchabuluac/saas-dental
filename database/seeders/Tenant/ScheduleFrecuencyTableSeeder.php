<?php

namespace Database\Seeders\Tenant;

use App\Models\ScheduleFrecuency;
use Illuminate\Database\Seeder;

class ScheduleFrecuencyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ScheduleFrecuency::truncate();

        ScheduleFrecuency::updateOrCreate(['frecuency' => 'minute'], ['description' => 'Run the task every minute'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'two_minute'], ['description' => 'Run the task every two minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'three_minute'], ['description' => 'Run the task every three minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'four_minute'], ['description' => 'Run the task every four minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'five_minute'], ['description' => 'Run the task every five minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'then_minute'], ['description' => 'Run the task every ten minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'fifteen_minute'], ['description' => 'Run the task every fifteen minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'thirty_minute'], ['description' => 'Run the task every thirty minutes'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'hourly'], ['description' => 'Run the task every hour'], ['enable' => 1]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'hourly_at_17'], ['description' => 'Run the task every hour at 17 minutes past the hour'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'every_two_hours'], ['description' => 'Run the task every two hours'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'every_three_hours'], ['description' => 'Run the task every three hours'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'every_four_hours'], ['description' => 'Run the task every four hours'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'every_six_hours'], ['description' => 'Run the task every six hours'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'daily'], ['description' => '	Run the task every day at midnight'], ['enable' => 1]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'weekly'], ['description' => 'Run the task every Sunday at 00:00'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'monthly'], ['description' => 'Run the task on the first day of every month at 00:00'], ['enable' => 0]);
        ScheduleFrecuency::updateOrCreate(['frecuency' => 'yearly'], ['description' => 'Run the task on the first day of every year at 00:00'], ['enable' => 0]);
    }
}
