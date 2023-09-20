<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class WorkOrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //Work Orders
         Permission::updateOrCreate(['name' => 'orders.index'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Ver ordenes de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.create'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Crear orden de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.edit'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Editar orden de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.active'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Activar orden de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.store'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Guardar orden de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.show'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Ver detalle orden de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.destroy'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Eliminar orden de trabajo']);
         Permission::updateOrCreate(['name' => 'orders.update'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Actualizar orden de trabajo']);
        //  Permission::updateOrCreate(['name' => 'orders.all'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Ver todas las ordenes de trabajo']);
        //  Permission::updateOrCreate(['name' => 'orders.update'], ['guard_name' => 'web', 'group' => 'orders', 'description' => 'Actualizar ordenes de trabajo']);

         $roles = Role::all();
         foreach ($roles as $key => $item) {
             $item->givePermissionTo(Permission::where('name', 'LIKE', 'orders.%')->get());
         }
    }
}
