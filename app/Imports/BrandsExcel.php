<?php

namespace App\Imports;

use App\Models\Inventories\Brand;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;

class BrandsExcel implements ToCollection
{
    use Importable;

    /**
     * @param Collection $collection
     *   row 0 => Name
     *   row 1 => Descrition
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {
                    $brand = Brand::firstOrNew(['name' => $row[0]]);
                    $brand->name = $row[0];
                    $brand->description = $row[1];
                    $brand->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
