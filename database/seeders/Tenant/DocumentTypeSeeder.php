<?php

namespace Database\Seeders\Tenant;

use App\Models\DocumentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DocumentType::updateOrCreate(['name' => 'rut'], ['description' => 'RUT', 'is_active' => true]);
        DocumentType::updateOrCreate(['name' => 'passport'], ['description' => 'Pasaporte', 'is_active' => true]);
        DocumentType::updateOrCreate(['name' => 'other'], ['description' => 'Otro', 'is_active' => true]);


        DB::statement("UPDATE patients SET document_type_id = 1 WHERE document_type='Otro'");
        DB::statement("UPDATE patients SET document_type_id = 2 WHERE document_type='Pasaporte'");
        DB::statement("UPDATE patients SET document_type_id = 3 WHERE document_type='Otro'");
    }
}
