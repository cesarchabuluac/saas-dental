<?php

namespace Database\Seeders\Tenant;

use App\Models\BranchOffice;
use Illuminate\Database\Seeder;

class BranchOfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BranchOffice::updateOrCreate(['name' => 'Matriz']);
    }
}
