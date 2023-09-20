<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsTodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //TODO
        Permission::updateOrCreate(['name' => 'todos.index'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Ver tareas']);
        Permission::updateOrCreate(['name' => 'todos.create'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Crear tareas']);
        Permission::updateOrCreate(['name' => 'todos.edit'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Editar tareas']);
        Permission::updateOrCreate(['name' => 'todos.active'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Activar tareas']);
        Permission::updateOrCreate(['name' => 'todos.store'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Guardar tareas']);
        Permission::updateOrCreate(['name' => 'todos.show'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Ver detalle tareas']);
        Permission::updateOrCreate(['name' => 'todos.destroy'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Eliminar tareas']);
        Permission::updateOrCreate(['name' => 'todos.update'], ['guard_name' => 'web', 'group' => 'todo', 'description' => 'Actualizar tareas']);
        $roles = Role::all();
        foreach ($roles as $key => $item) {
            $item->givePermissionTo(Permission::where('name', 'LIKE', 'todos%')->get());
        }
    }
}
