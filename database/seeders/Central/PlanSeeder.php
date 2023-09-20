<?php

namespace Database\Seeders\Central;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::insert([
            [
                'api_id' => 'plan_Obfm7WoAII1dZQ',
                'image' => 'images/plans/default.png',
                'name' => 'Básico',
                'amount' => 15,
                'currency_id' => 3,
                'currency' => 'usd',
                'interval' => 'month',
                'product_id' => 'prod_ObfmLpyzx5VvYt',
                'description' => 'Un comienzo sencillo para todos',
                'is_popular' => 0,
                'limit_director' => 1,
                'limit_doctor' => 1,
                'limit_assistant' => 1,
                'limit_receptionist' => 1,
                'limit_patient' => 0,
                'limit_domains' => 1,
                'limit_purchases' => 999,
                'limit_invoices' => 999,
            ], [
                'api_id' => 'plan_Obfopks2gqcxKJ',
                'image' => 'images/plans/default.png',
                'name' => 'Estandar',
                'amount' => 49,
                'currency_id' => 3,
                'currency' => 'usd',
                'interval' => 'month',
                'product_id' => 'prod_ObfoCkle4qBLUX',
                'description' => 'Lo mejor para medianas empresas',
                'is_popular' => 0,
                'limit_director' => 1,
                'limit_doctor' => 5,
                'limit_assistant' => 5,
                'limit_receptionist' => 5,
                'limit_patient' => 0,
                'limit_domains' => 0,
                'limit_purchases' => 9999,
                'limit_invoices' => 9999,
            ], [
                'api_id' => 'plan_ObfpOCdNdDsl3M',
                'image' => 'images/plans/default.png',
                'name' => 'Empresa',
                'amount' => 99,
                'currency_id' => 3,
                'currency' => 'usd',
                'interval' => 'month',
                'product_id' => 'prod_Obfpxg99j4t7ck',
                'description' => 'Solución para grandes organizaciones',
                'is_popular' => 1,
                'limit_director' => 1,
                'limit_doctor' => 0,
                'limit_assistant' => 0,
                'limit_receptionist' => 0,
                'limit_patient' => 0,
                'limit_domains' => 0,
                'limit_purchases' => 0,
                'limit_invoices' => 0,
            ],
        ]);
    }
}