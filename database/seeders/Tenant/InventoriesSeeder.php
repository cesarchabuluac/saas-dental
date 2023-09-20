<?php

namespace Database\Seeders\Tenant;

use App\Models\Inventories\Brand;
use App\Models\Inventories\Category;
use App\Models\Inventories\SubCategory;
use App\Models\Inventories\Supplier;
use App\Models\Inventories\Unit;
use Illuminate\Database\Seeder;

class InventoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Unit::truncate();

        Unit::updateOrCreate([
            'name' => 'N/A',
            'abbreviation' => 'N/A',
            'description' => 'No aplica',            
        ]);

        // Brand::truncate();

        Brand::updateOrCreate([
            'name' => 'N/A',
            'description' => 'No aplica',            
        ]);
        
        
        // Category::truncate();

        Category::updateOrCreate([
            'name' => 'N/A',
            'description' => 'No aplica',            
        ]);

        Category::updateOrCreate([
            'name' => 'Vendajes',
            'description' => null,            
        ]);

        Category::updateOrCreate([
            'name' => 'Botella',
            'description' => null,            
        ]);

        Category::updateOrCreate([
            'name' => 'Cápsulas',
            'description' => null,            
        ]);

        Category::updateOrCreate([
            'name' => 'Cápsulas',
            'description' => null,            
        ]);

        Category::updateOrCreate([
            'name' => 'Crema',
            'description' => null,            
        ]);

        Category::updateOrCreate([
            'name' => 'Gotas',
            'description' => null,            
        ]);

        // SubCategory::truncate();

        SubCategory::updateOrCreate([
            'name' => 'N/A',
            'category_id' => 1,
            'description' => 'No aplica',            
        ]);

        Supplier::updateOrCreate([
            'name' => 'Proveedor Inicial',
        ]);
    }
}
