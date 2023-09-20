<?php

namespace Database\Seeders\Tenant;

use App\Models\WeekDay;
use Illuminate\Database\Seeder;

class WeekDaysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WeekDay::updateOrCreate(['name' => 'Lunes']);
        WeekDay::updateOrCreate(['name' => 'Martes']);
        WeekDay::updateOrCreate(['name' => 'Miercoles']);
        WeekDay::updateOrCreate(['name' => 'Jueves']);
        WeekDay::updateOrCreate(['name' => 'Viernes']);
        WeekDay::updateOrCreate(['name' => 'Sabado']);
        WeekDay::updateOrCreate(['name' => 'Domingo']);
    }
}
