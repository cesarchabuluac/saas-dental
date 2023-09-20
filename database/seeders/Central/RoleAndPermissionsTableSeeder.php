<?php

namespace Database\Seeders\Central;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Carbon\Carbon;
use Doctrine\DBAL\Schema\Schema;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::updateOrCreate(['name' => 'dashboards.index'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Dashboard']);         
        Permission::updateOrCreate(['name' => 'settings.index'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Configuraciones']);
        Permission::updateOrCreate(['name' => 'settings.update'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Actualizar Configuraciones']);

        //Settings
        Permission::updateOrCreate(['name' => 'settings.index'], ['guard_name' => 'web', 'description' => 'Habilitar modulo de configuraciones']);
        Permission::updateOrCreate(['name' => 'settings.update'], ['guard_name' => 'web', 'description' => 'Habilitar boton de actualizar configuraciones']);

        // Users
        Permission::updateOrCreate(['name' => 'users.index'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Ver usuarios']);
        Permission::updateOrCreate(['name' => 'users.create'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Crear usuario']);
        Permission::updateOrCreate(['name' => 'users.edit'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Editar usuario']);        
        Permission::updateOrCreate(['name' => 'users.store'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Guardar usuario']);
        Permission::updateOrCreate(['name' => 'users.show'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Detalle usuario']);
        Permission::updateOrCreate(['name' => 'users.destroy'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Eliminar/Desactivar usuario']);
        Permission::updateOrCreate(['name' => 'users.active'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Activar usuario']);        
        Permission::updateOrCreate(['name' => 'users.update'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Actualizar usuario']);
        Permission::updateOrCreate(['name' => 'users.profile'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Perfil de usuario']);
        Permission::updateOrCreate(['name' => 'users.reset_link'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Habilitar boton de resetear contraseña de usuarios']);
        Permission::updateOrCreate(['name' => 'users.reset_password'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Habilitar boton de resetear contraseña de usuarios']);
        Permission::updateOrCreate(['name' => 'users.change_password'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Habilitar boton de cambiar contraseña de usuarios']);


       
        //Permissions
        // Permission::updateOrCreate(['name' => 'permissions.index'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Habilitar modulo de permisos']);

        Permission::updateOrCreate(['name' => 'plans.index'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir ver los planes']);
        Permission::updateOrCreate(['name' => 'plans.prices'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir ver los precios de los planes']);
        Permission::updateOrCreate(['name' => 'plans.create'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir crear planes']);
        Permission::updateOrCreate(['name' => 'plans.edit'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir editar planes']);
        Permission::updateOrCreate(['name' => 'plans.active'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir activar planes']);
        Permission::updateOrCreate(['name' => 'plans.store'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir guardar planes']);
        Permission::updateOrCreate(['name' => 'plans.show'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir ver detalle del plan']);
        Permission::updateOrCreate(['name' => 'plans.destroy'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir eliminar planes']);
        Permission::updateOrCreate(['name' => 'plans.update'], ['guard_name' => 'web', 'group' => 'plans', 'description' => 'Permitir actualizar planes']);

        Permission::updateOrCreate(['name' => 'subscriptions.index'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir ver las suscripciones']);
        Permission::updateOrCreate(['name' => 'subscriptions.create'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir crear suscripciones']);
        Permission::updateOrCreate(['name' => 'subscriptions.edit'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir editar suscripciones']);
        Permission::updateOrCreate(['name' => 'subscriptions.active'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir activar suscripciones']);
        Permission::updateOrCreate(['name' => 'subscriptions.store'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir guardar suscripciones']);
        Permission::updateOrCreate(['name' => 'subscriptions.show'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir ver detalle de la suscripción']);
        Permission::updateOrCreate(['name' => 'subscriptions.destroy'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir eliminar suscripciones']); 
        Permission::updateOrCreate(['name' => 'subscriptions.update'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir actualizar suscripciones']);
        Permission::updateOrCreate(['name' => 'subscribe.store'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir guardar suscripciones']);
        Permission::updateOrCreate(['name' => 'subscribe.show'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir ver detalle de la suscripción']);
        Permission::updateOrCreate(['name' => 'subscribe.approval'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir aprobar suscripciones']);
        Permission::updateOrCreate(['name' => 'subscribe.cancelled'], ['guard_name' => 'web', 'group' => 'subscriptions', 'description' => 'Permitir cancelar suscripciones']);

        Permission::updateOrCreate(['name' => 'tenants.index'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir ver los inquilinos']);
        Permission::updateOrCreate(['name' => 'tenants.create'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir crear inquilinos']);
        Permission::updateOrCreate(['name' => 'tenants.edit'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir editar inquilinos']);
        Permission::updateOrCreate(['name' => 'tenants.active'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir activar inquilinos']);
        Permission::updateOrCreate(['name' => 'tenants.store'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir guardar inquilinos']);
        Permission::updateOrCreate(['name' => 'tenants.show'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir ver detalle del inqulino']);
        Permission::updateOrCreate(['name' => 'tenants.destroy'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir eliminar inquilinos']);
        Permission::updateOrCreate(['name' => 'tenants.update'], ['guard_name' => 'web', 'group' => 'tenants', 'description' => 'Permitir actualizar inquilinos']);

        //Create role admin        
        $admin = Role::updateOrCreate(['name' => 'Administrator'], ['guard_name' => 'web']);
        $admin->givePermissionTo(Permission::all());        

        $user = User::find(1);
        if (!$user->hasRole('Administrator')) {
            $user->assignRole('Administrator');
        } 
    }
}
