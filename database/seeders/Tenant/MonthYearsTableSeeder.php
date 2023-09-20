<?php

namespace Database\Seeders\Tenant;

use App\Models\MonthYear;
use Illuminate\Database\Seeder;

class MonthYearsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MonthYear::updateOrCreate(['name' => 'Enero']);
        MonthYear::updateOrCreate(['name' => 'Febrero']);
        MonthYear::updateOrCreate(['name' => 'Marzo']);
        MonthYear::updateOrCreate(['name' => 'Abril']);
        MonthYear::updateOrCreate(['name' => 'Mayo']);
        MonthYear::updateOrCreate(['name' => 'Junio']);
        MonthYear::updateOrCreate(['name' => 'Julio']);
        MonthYear::updateOrCreate(['name' => 'Agosto']);
        MonthYear::updateOrCreate(['name' => 'Septiembre']);
        MonthYear::updateOrCreate(['name' => 'Octubre']);
        MonthYear::updateOrCreate(['name' => 'Noviembre']);
        MonthYear::updateOrCreate(['name' => 'Diciembre']);
    }
}
