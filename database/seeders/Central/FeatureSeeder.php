<?php

namespace Database\Seeders\Central;

use App\Models\Feature;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Feature::updateOrCreate([
            'name' => 'Gestión de Agenda',
        ]);

        Feature::updateOrCreate([
            'name' => 'Gestión de Pacientes',
        ]);

        Feature::updateOrCreate([
            'name' => 'Gestión de Asistentes',
        ]);       

        Feature::updateOrCreate([
            'name' => 'Copia de seguridad de la base de datos',
        ]);

        Feature::updateOrCreate([
            'name' => 'Soporte bajo demanda',
        ]);
    }
}