<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class LaboratoryPermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
         //Laboratories
         Permission::updateOrCreate(['name' => 'laboratories.index'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Ver laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.create'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Crear laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.edit'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Editar laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.active'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Activar laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.store'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Guardar laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.show'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Detalle laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.destroy'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Eliminar/Desactivar laboratorio']);
         Permission::updateOrCreate(['name' => 'laboratories.update'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Actualizar laboratorio']);
        //  Permission::updateOrCreate(['name' => 'laboratories.all'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Ver laboratorio']);
        //  Permission::updateOrCreate(['name' => 'laboratories.update'], ['guard_name' => 'web', 'group' => 'laboratories', 'description' => 'Ver laboratorio']);

         $roles = Role::all();
         foreach ($roles as $key => $item) {
             $item->givePermissionTo(Permission::where('name', 'LIKE', 'laboratories.%')->get());
         }
    }
}
