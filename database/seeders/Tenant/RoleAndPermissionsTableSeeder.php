<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
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
        Permission::updateOrCreate(['name' => 'catalog.action'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Catalogo de Acciones']);
        Permission::updateOrCreate(['name' => 'settings.index'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Configuraciones']);
        Permission::updateOrCreate(['name' => 'settings.update'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Actualizar Configuraciones']);

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

        //Permissions
        Permission::updateOrCreate(['name' => 'permissions.index'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Ver permisos']);

        //Clinic actions
        Permission::updateOrCreate(['name' => 'actions.index'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Ver acciones clínicas']);
        Permission::updateOrCreate(['name' => 'actions.create'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Crear acción clínica']);
        Permission::updateOrCreate(['name' => 'actions.edit'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Editar acción clínica']);
        Permission::updateOrCreate(['name' => 'actions.active'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Activar acción clínica']);
        Permission::updateOrCreate(['name' => 'actions.store'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Guardar acción clínica']);
        Permission::updateOrCreate(['name' => 'actions.show'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Detalle acción clínica']);
        Permission::updateOrCreate(['name' => 'actions.destroy'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Eliminar/Desactivar acción clínica']);
        Permission::updateOrCreate(['name' => 'actions.update'], ['guard_name' => 'web', 'group' => 'actions', 'description' => 'Actualizar acción clínica']);
        
        //Laboratory Action
        Permission::updateOrCreate(['name' => 'laboratory_actions.index'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Ver acciones de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.create'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Crear acción de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.edit'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Editar acción de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.active'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Activar acción de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.store'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Guardar acción de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.show'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Detalle acción de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.destroy'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Eliminar/Desactivar acción de laboratorio']);
        Permission::updateOrCreate(['name' => 'laboratory_actions.update'], ['guard_name' => 'web', 'group' => 'laboratory_actions', 'description' => 'Actualizar acción de laboratorio']);

        //Patients
        Permission::updateOrCreate(['name' => 'patients.index'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Ver pacientes']);
        Permission::updateOrCreate(['name' => 'patients.create'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Crear paciente']);
        Permission::updateOrCreate(['name' => 'patients.edit'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Editar paciente']);
        Permission::updateOrCreate(['name' => 'patients.active'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Activar paciente']);
        Permission::updateOrCreate(['name' => 'patients.store'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Guardar paciente']);
        Permission::updateOrCreate(['name' => 'patients.show'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Detalle del paciente']);
        Permission::updateOrCreate(['name' => 'patients.destroy'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Eliminar/Desactivar paciente']);
        Permission::updateOrCreate(['name' => 'patients.update'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Actualizar paciente']);
        Permission::updateOrCreate(['name' => 'patients.search'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Permitir la busqueda de pacientes']);
        Permission::updateOrCreate(['name' => 'patients.evolution'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Ver evolución del paciente']);
        Permission::updateOrCreate(['name' => 'patients.evolution_add'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Agregar historia clínica']);
        Permission::updateOrCreate(['name' => 'patients.budget'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Ver presupuesto del paciente']);
        Permission::updateOrCreate(['name' => 'patients.statement_account'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Ver estado de cuenta del paciente']);

        //Anamnesis
        Permission::updateOrCreate(['name' => 'anamnesis.index'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Ver anamnesis del paciente']);
        Permission::updateOrCreate(['name' => 'anamnesis.update'], ['guard_name' => 'web', 'group' => 'patients', 'description' => 'Actualizar anamnesis']);


        //Branch Offices
        Permission::updateOrCreate(['name' => 'branch-offices.index'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Ver sucursales']);
        Permission::updateOrCreate(['name' => 'branch-offices.create'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Crear sucursal']);
        Permission::updateOrCreate(['name' => 'branch-offices.edit'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Editar sucursal']);
        Permission::updateOrCreate(['name' => 'branch-offices.active'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Activar sucursal']);
        Permission::updateOrCreate(['name' => 'branch-offices.store'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Guardar sucursal']);
        Permission::updateOrCreate(['name' => 'branch-offices.show'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Detalle sucursal']);
        Permission::updateOrCreate(['name' => 'branch-offices.destroy'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Eliminar/Desactivar sucursal']);
        Permission::updateOrCreate(['name' => 'branch-offices.update'], ['guard_name' => 'web', 'group' => 'settings', 'description' => 'Actualizar sucursal']);

        //Budgets
        Permission::updateOrCreate(['name' => 'budgets.index'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Ver presupuestos']);
        Permission::updateOrCreate(['name' => 'budgets.create'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Crear presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.edit'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Editar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.active'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Activar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.store'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Guardar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.show'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Detalle presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.destroy'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Eliminar/Desactivar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.update'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Actualizar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.approve'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Aprobar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.send'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Enviar presupuesto']);
        Permission::updateOrCreate(['name' => 'budgets.print'], ['guard_name' => 'web', 'group' => 'budgets', 'description' => 'Imprimir presupuesto']);

        //Checks
        Permission::updateOrCreate(['name' => 'checks.index'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Ver cheques']);
        Permission::updateOrCreate(['name' => 'checks.create'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Crear cheque']);
        Permission::updateOrCreate(['name' => 'checks.edit'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Editar cheque']);
        Permission::updateOrCreate(['name' => 'checks.active'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Activar cheque']);
        Permission::updateOrCreate(['name' => 'checks.store'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Guardar cheque']);
        Permission::updateOrCreate(['name' => 'checks.show'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Detalle cheque']);
        Permission::updateOrCreate(['name' => 'checks.destroy'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Eliminar/Desactivar cheque']);
        Permission::updateOrCreate(['name' => 'checks.update'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Actualizar cheque']);
        Permission::updateOrCreate(['name' => 'checks.apply'], ['guard_name' => 'web', 'group' => 'checks', 'description' => 'Permitir aplicar o marcar un cheque como cobrado']);

        //Expenses
        Permission::updateOrCreate(['name' => 'expenses.index'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Ver gastos']);
        Permission::updateOrCreate(['name' => 'expenses.create'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Crear gasto']);
        Permission::updateOrCreate(['name' => 'expenses.edit'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Editar gasto']);
        Permission::updateOrCreate(['name' => 'expenses.active'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Activar gasto']);
        Permission::updateOrCreate(['name' => 'expenses.store'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Guardar gasto']);
        Permission::updateOrCreate(['name' => 'expenses.show'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Detalle gasto']);
        Permission::updateOrCreate(['name' => 'expenses.destroy'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Eliminar/Desactivar gasto']);
        Permission::updateOrCreate(['name' => 'expenses.update'], ['guard_name' => 'web', 'group' => 'expenses', 'description' => 'Actualizar gasto']);


        //Payment
        Permission::updateOrCreate(['name' => 'payments.index'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Ver pagos']);
        Permission::updateOrCreate(['name' => 'payments.create'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Crear pago']);
        Permission::updateOrCreate(['name' => 'payments.edit'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Editar pago']);
        Permission::updateOrCreate(['name' => 'payments.active'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Activar pago']);
        Permission::updateOrCreate(['name' => 'payments.store'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Guardar pago']);
        Permission::updateOrCreate(['name' => 'payments.show'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Detalle pago']);
        Permission::updateOrCreate(['name' => 'payments.destroy'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Eliminar/Desactivar pago']);
        Permission::updateOrCreate(['name' => 'payments.update'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Actualizar pago']);
        Permission::updateOrCreate(['name' => 'payments.preview'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Vista previa del pago']);
        Permission::updateOrCreate(['name' => 'payments.send'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Enviar ficha de pago']);
        Permission::updateOrCreate(['name' => 'payments.dashboard'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Mostrar dashboard de pagos']);
        Permission::updateOrCreate(['name' => 'payments.collection'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Permitir crear un pago general']);
        Permission::updateOrCreate(['name' => 'payments.view'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Mostrar detalle del pago']);
        Permission::updateOrCreate(['name' => 'payments.transactions'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Mostrar transacciones del pago']);
        Permission::updateOrCreate(['name' => 'payments.charge'], ['guard_name' => 'web', 'group' => 'payments', 'description' => 'Permitir aplicar el pago']);

        //Appointments
        Permission::updateOrCreate(['name' => 'appointments.index'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Ver citas / Agenda']);
        Permission::updateOrCreate(['name' => 'appointments.create'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Crear cita']);
        Permission::updateOrCreate(['name' => 'appointments.edit'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Editar cita']);
        Permission::updateOrCreate(['name' => 'appointments.active'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Activar cita']);
        Permission::updateOrCreate(['name' => 'appointments.store'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Guardar cita']);
        Permission::updateOrCreate(['name' => 'appointments.show'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Mostrar detalle de la cita']);
        Permission::updateOrCreate(['name' => 'appointments.destroy'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Eliminar/Desactivar cita']);
        Permission::updateOrCreate(['name' => 'appointments.update'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Actualizar cita']);
        Permission::updateOrCreate(['name' => 'appointments.send'], ['guard_name' => 'web', 'group' => 'appointments', 'description' => 'Enviar o notificar cita']);

        //Cash Register
        Permission::updateOrCreate(['name' => 'cash_registers.index'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Ver cortes de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.create'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Crear corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.edit'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Editar corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.active'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Activar corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.store'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Guardar corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.show'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Mostrar detalle del corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.destroy'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Eliminar/Desactivar corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.update'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Actualizar corte de caja']);
        Permission::updateOrCreate(['name' => 'cash_registers.download'], ['guard_name' => 'web', 'group' => 'cash_registers', 'description' => 'Descargar corte de caja']);




        Permission::updateOrCreate(['name' => 'reports.index'], ['guard_name' => 'web', 'group' => 'reports', 'description' => 'Informes del sistema']);
        Permission::updateOrCreate(['name' => 'reports.appointments'], ['guard_name' => 'web', 'group' => 'reports', 'description' => 'Informes de Citas Médicas']);
        Permission::updateOrCreate(['name' => 'reports.patients'], ['guard_name' => 'web', 'group' => 'reports', 'description' => 'Informes de Pacientes']);
        Permission::updateOrCreate(['name' => 'reports.expenses'], ['guard_name' => 'web', 'group' => 'reports', 'description' => 'Informes de Gastos']);
        Permission::updateOrCreate(['name' => 'reports.payments'], ['guard_name' => 'web', 'group' => 'reports', 'description' => 'Informes de Pagos']);
        Permission::updateOrCreate(['name' => 'reports.medicines'], ['guard_name' => 'web', 'group' => 'reports', 'description' => 'Informes de Inventarios']);

        

        //Create role admin
        $admin = Role::updateOrCreate(['name' => 'Administrator'], ['guard_name' => 'web']);
        $admin->givePermissionTo(Permission::all());

        //Crate role owner
        $director = Role::updateOrCreate(['name' => 'Director'], ['guard_name' => 'web']);
        $director->givePermissionTo(Permission::all());

        $receptionist = Role::updateOrCreate(['name' => 'Receptionist'], ['guard_name' => 'web']);
        $receptionist->givePermissionTo(Permission::where('name', 'LIKE', 'actions%')->get());
        $receptionist->givePermissionTo(Permission::where('name', 'LIKE', 'laboratory_actions%')->get());
        $receptionist->givePermissionTo(Permission::where('name', 'LIKE', 'patients%')->get());
        $receptionist->givePermissionTo(Permission::where('name', 'LIKE', 'budgets%')->get());
        // $receptionist->givePermissionTo(Permission::where('name', 'LIKE', 'todos%')->get());
        $receptionist->givePermissionTo('users.profile');        
        $receptionist->givePermissionTo('dashboards.index');        

        //Crate role doctor
        $professional = Role::updateOrCreate(['name' => 'Doctor'], ['guard_name' => 'web']);
        $professional->givePermissionTo('users.profile');
        $professional->givePermissionTo('dashboards.index');
        // $professional->givePermissionTo('medical_histories.create');
        // $professional->givePermissionTo('medical_histories.upload');
        // $professional->givePermissionTo('medical_histories.store');
        $professional->givePermissionTo('anamnesis.update');
        $professional->givePermissionTo('appointments.index');
        $professional->givePermissionTo('appointments.destroy');
        $professional->givePermissionTo('appointments.update');
        $professional->givePermissionTo('budgets.store');
        $professional->givePermissionTo('patients.show');
        $professional->givePermissionTo('patients.evolution');
        $professional->givePermissionTo('patients.budget');
        // $professional->givePermissionTo(Permission::where('name', 'LIKE', 'todos%')->get());

        //Create role patient
        $patient = Role::updateOrCreate(['name' => 'Patient'], ['guard_name' => 'web']);
        $patient->givePermissionTo('users.profile');
        $patient->givePermissionTo('dashboards.index');
        $patient->givePermissionTo('patients.edit');
        $patient->givePermissionTo('patients.update');

        $assistant = Role::updateOrCreate(['name' => 'Assistant'], ['guard_name' => 'web']);
        $assistant->givePermissionTo('users.profile');
        $assistant->givePermissionTo('dashboards.index');
        $assistant->givePermissionTo('appointments.index');
        $assistant->givePermissionTo('patients.index');
        $assistant->givePermissionTo('patients.create');
        $assistant->givePermissionTo('patients.edit');
        $assistant->givePermissionTo('patients.destroy');
        $assistant->givePermissionTo('patients.store');
        $assistant->givePermissionTo('patients.update');
        $assistant->givePermissionTo('patients.show');

        //User Admin
        $user = User::find(1);
        if (!$user->hasRole('Administrator')) {
            $user->assignRole('Administrator');
        }
    }
}
