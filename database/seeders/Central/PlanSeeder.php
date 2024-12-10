<?php

namespace Database\Seeders\Central;

use App\Models\Plan;
use Illuminate\Database\Seeder;
use Laravelcm\Subscriptions\Interval;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::updateOrCreate(['slug' => 'basico'], 
            [
                'name' => json_encode(['en' => 'Basic', 'es' => 'Básico']),
                'description' => json_encode(['en' => 'A simple start for everyone', 'es' => 'Un comienzo sencillo para todos']), // JSON válido
                'price' => 9.99,
                'signup_fee' => 0,
                'invoice_period' => 1,
                'invoice_interval' => Interval::MONTH->value,
                'trial_period' => 15,
                'trial_interval' => Interval::DAY->value,
                'sort_order' => 1,
                'currency' => 'USD',                
                'is_popular' => 0,
                'limit_director' => 1,
                'limit_doctor' => 1,
                'limit_assistant' => 1,
                'limit_receptionist' => 1,
                'limit_patient' => 0,
                'limit_domains' => 1,
                'limit_purchases' => 999,
                'limit_invoices' => 999,
            ]);
            
            Plan::updateOrCreate(['slug' => 'estandar'], [
                'name' => json_encode(['en' => 'Standard', 'es' => 'Estándar']),
                'description' => json_encode(['en' => 'The most popular choice', 'es' => 'La opción más popular']), // JSON válido                
                'price' => 49,
                'signup_fee' => 0,
                'invoice_period' => 1,
                'invoice_interval' => Interval::MONTH->value,
                'trial_period' => 15,
                'trial_interval' => Interval::DAY->value,
                'sort_order' => 2,
                'currency' => 'USD',
                'is_popular' => 1,
                'limit_director' => 1,
                'limit_doctor' => 5,
                'limit_assistant' => 5,
                'limit_receptionist' => 5,
                'limit_patient' => 0,
                'limit_domains' => 0,
                'limit_purchases' => 9999,
                'limit_invoices' => 9999,
            ]);
            
            Plan::updateOrCreate(['slug' => 'empresa'], [
                'name' => json_encode(['en' => 'Enterprise', 'es' => 'Empresa']),
                'description' => json_encode(['en' => 'For large organizations', 'es' => 'Para organizaciones grandes']), // JSON válido                
                'price' => 99,
                'signup_fee' => 0,
                'invoice_period' => 1,
                'invoice_interval' => Interval::MONTH->value,
                'trial_period' => 15,
                'trial_interval' => Interval::DAY->value,
                'sort_order' => 1,
                'currency' => 'USD',
                'is_popular' => 0,
                'limit_director' => 1,
                'limit_doctor' => 0,
                'limit_assistant' => 0,
                'limit_receptionist' => 0,
                'limit_patient' => 0,
                'limit_domains' => 0,
                'limit_purchases' => 0,
                'limit_invoices' => 0,
        ]);
    }
}