<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DashboardPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Permission::updateOrCreate(['name' => 'dashboards.index'], ['guard_name' => 'web', 'group' => 'dashboard', 'description' => 'Ver dashboard']);


        // $roles = Role::all();
        // foreach ($roles as $key => $item) {
        //     $item->givePermissionTo(Permission::where('name', 'LIKE', 'dashboards%')->get());
        // }
    }
}
