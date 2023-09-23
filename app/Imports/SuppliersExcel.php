<?php

namespace App\Imports;

use App\Models\Inventories\Supplier;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class SuppliersExcel implements ToCollection
{
    use Importable;

    /**
     * @param Collection $collection
     * row 0 => name
     * row 1 => email
     * row 2 => phone
     * row 3 => address
     * row 4 => city
     * row 5 => state
     * row 6 => country
     * row 7 => zip
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {

                    // Buscar o crear el proveedor
                    $supplier = Supplier::firstOrNew(['name' => $row[0]]);
                    $supplier->name = $row[0];
                    $supplier->email = $row[1];
                    $supplier->phone = $row[2];
                    $supplier->address = $row[3];
                    $supplier->city = $row[4];
                    $supplier->state = $row[5];
                    $supplier->country = $row[6];
                    $supplier->zip = $row[7];
                    $supplier->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
