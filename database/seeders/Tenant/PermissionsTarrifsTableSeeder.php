<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsTarrifsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        //Tariffs
        Permission::updateOrCreate(['name' => 'tariffs.index'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Ver aranceles']);
        Permission::updateOrCreate(['name' => 'tariffs.create'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Crear arancel']);
        Permission::updateOrCreate(['name' => 'tariffs.edit'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Editar arancel']);
        Permission::updateOrCreate(['name' => 'tariffs.active'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Activar arancel']);
        Permission::updateOrCreate(['name' => 'tariffs.store'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Guardar arancel']);
        Permission::updateOrCreate(['name' => 'tariffs.show'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Ver detalle arancel']);
        Permission::updateOrCreate(['name' => 'tariffs.destroy'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Eliminar arancel']);
        Permission::updateOrCreate(['name' => 'tariffs.update'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Actualizar arancel']);
        // Permission::updateOrCreate(['name' => 'tariffs.all'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Ver todas las arancel']);
        // Permission::updateOrCreate(['name' => 'tariffs.update'], ['guard_name' => 'web', 'group' => 'tariffs', 'description' => 'Actualizar aranceles']);

        $roles = Role::all();
        foreach ($roles as $key => $item) {
            $item->givePermissionTo(Permission::where('name', 'LIKE', 'tariffs%')->get());
        }
    }
}
