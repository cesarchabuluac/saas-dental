<?php

namespace Database\Seeders\Tenant;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = [
            "locale" => 'es',
            "theme" => 'light',
        ];
        User::query()->firstOrCreate(['email' => 'admin@soft-dental.com'], [
            'name' => 'Super Administrator',
            'email_verified_at' => date('Y-m-d H:i:s'),
            'password' => Hash::make('Adm1n2024_'),
            'account_role' => 1,
            'is_active' => 1,
            'settings' => $json,
        ]);
    }
}
