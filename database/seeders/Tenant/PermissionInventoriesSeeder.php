<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionInventoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        Permission::updateOrCreate(['name' => 'inventories.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar modulo de inventarios']);
        Permission::updateOrCreate(['name' => 'inventories.categories.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle de categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar categorias']);
        Permission::updateOrCreate(['name' => 'inventories.categories.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar categorias']);        
        Permission::updateOrCreate(['name' => 'inventories.categories.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar categorias']);

        Permission::updateOrCreate(['name' => 'inventories.subcategories.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar subcategorias']);
        Permission::updateOrCreate(['name' => 'inventories.subcategories.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar subcategorias']);

        Permission::updateOrCreate(['name' => 'inventories.units.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar unidades']);
        Permission::updateOrCreate(['name' => 'inventories.units.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar unidades']);        
        Permission::updateOrCreate(['name' => 'inventories.units.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar unidades']);

        Permission::updateOrCreate(['name' => 'inventories.brands.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar marcas']);
        Permission::updateOrCreate(['name' => 'inventories.brands.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar marcas']);        
        Permission::updateOrCreate(['name' => 'inventories.brands.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar marcas']);

        Permission::updateOrCreate(['name' => 'inventories.medicines.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar medicamentos']);
        Permission::updateOrCreate(['name' => 'inventories.medicines.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar medicamentos']);

        // Permission::updateOrCreate(['name' => 'inventories.products.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar productos']);
        // Permission::updateOrCreate(['name' => 'inventories.products.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar productos']);

        Permission::updateOrCreate(['name' => 'inventories.warehouses.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar almacenes']);
        Permission::updateOrCreate(['name' => 'inventories.warehouses.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar almacenes']);        
        Permission::updateOrCreate(['name' => 'inventories.warehouses.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar almacenes']);

        Permission::updateOrCreate(['name' => 'inventories.suppliers.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar proveedores']);
        Permission::updateOrCreate(['name' => 'inventories.suppliers.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar proveedores']);        
        Permission::updateOrCreate(['name' => 'inventories.suppliers.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar proveedores']);

        Permission::updateOrCreate(['name' => 'inventories.purchases.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar compras']);
        Permission::updateOrCreate(['name' => 'inventories.purchases.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar compras']);        
        Permission::updateOrCreate(['name' => 'inventories.purchases.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar compras']);

        Permission::updateOrCreate(['name' => 'inventories.adjustments.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar ajustes']);
        Permission::updateOrCreate(['name' => 'inventories.adjustments.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar ajustes']);

        Permission::updateOrCreate(['name' => 'inventories.transfers.index'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.create'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Crear transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.edit'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Editar transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.active'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Activar transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.store'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Guardar transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.show'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Ver detalle transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.destroy'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Eliminar transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar transferencias']);
        Permission::updateOrCreate(['name' => 'inventories.transfers.update'], ['guard_name' => 'web', 'group' => 'inventories', 'description' => 'Actualizar transferencias']);

        $role = Role::find(1); //Administrator
        $role->givePermissionTo(Permission::where('name', 'LIKE', 'inventories%')->get());

        $director = Role::find(2);
        $director->givePermissionTo(Permission::where('name', 'LIKE', 'inventories%')->get());
    }
}
