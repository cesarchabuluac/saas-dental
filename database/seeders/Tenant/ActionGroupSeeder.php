<?php

namespace Database\Seeders\Tenant;

use App\Models\ActionGroup;
use Illuminate\Database\Seeder;

class ActionGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ActionGroup::updateOrCreate(['name' => 'Acciones Generales']);
        ActionGroup::updateOrCreate(['name' => 'Prevención e Higiene']);
        ActionGroup::updateOrCreate(['name' => 'Cirugía Bucal']);
        ActionGroup::updateOrCreate(['name' => 'Implantología Oral e injertos']);
        ActionGroup::updateOrCreate(['name' => 'Endodoncia']);
        ActionGroup::updateOrCreate(['name' => 'Odontopediatria']);
        ActionGroup::updateOrCreate(['name' => 'Operatoria Dental']);
        ActionGroup::updateOrCreate(['name' => 'Ortodoncia y Ortopedia']);
        ActionGroup::updateOrCreate(['name' => 'Periodoncia']);
        ActionGroup::updateOrCreate(['name' => 'Prótesis y Rehabilitación Oral']);
        ActionGroup::updateOrCreate(['name' => 'Radiología Oral']);

    }
}
