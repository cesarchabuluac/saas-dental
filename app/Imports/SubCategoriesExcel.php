<?php

namespace App\Imports;

use App\Models\Inventories\Category;
use App\Models\Inventories\SubCategory;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class SubCategoriesExcel implements ToCollection
{
    use Importable;

    /**
     * @param Collection $collection
     *   row 0 => Category name
     *   row 1 => Subcategory name
     *   row 2 => description
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {

                    // Buscar o crear la categoria
                    $category = Category::firstOrCreate(['name' => $row[0]], ['name' => $row[0]]);

                    // Buscar o crear la sub categoria
                    $subcategory = SubCategory::firstOrNew(['name' => $row[1]]);
                    if (!$subcategory->exists) {
                        $subcategory->category_id = $category->id;
                    }

                    $subcategory->name = $row[1];
                    $subcategory->description = $row[2];
                    $subcategory->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
