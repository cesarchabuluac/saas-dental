<?php

namespace App\Imports;

use App\Models\Inventories\Category;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class CategoriesExcel implements ToCollection
{
    use Importable;

    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {
                    $category = Category::firstOrNew(['name' => $row[0]]);
                    $category->name = $row[0];
                    $category->description = $row[1];
                    $category->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
