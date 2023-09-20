<?php

namespace Database\Seeders\Tenant;

use App\Models\PaymentMethod;
use Illuminate\Database\Seeder;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaymentMethod::updateOrCreate(['name' => 'cash']);
        PaymentMethod::updateOrCreate(['name' => 'debit_card']);
        PaymentMethod::updateOrCreate(['name' => 'credit_card']);
        PaymentMethod::updateOrCreate(['name' => 'check']);
        PaymentMethod::updateOrCreate(['name' => 'transfer']);
    }
}
