<?php

namespace App\Imports;

use App\Models\BranchOffice;
use App\Models\Inventories\Warehouse;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class WareHousesExcel implements ToCollection
{
    use Importable;

    /**
     * @param Collection $collection
     *   row 0 => Branch Offices
     *   row 1 => Name
     *   row 2 => description
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {

                    // Buscar o crear la sucursal
                    $branch = BranchOffice::firstOrCreate(['name' => $row[0]], ['name' => $row[0]]);

                    // Buscar o crear la bodega
                    $warehouse = Warehouse::firstOrNew(['name' => $row[1]]);
                    if (!$warehouse->exists) {
                        $warehouse->branch_office_id = $branch->id;
                    }

                    $warehouse->name = $row[1];
                    $warehouse->description = $row[2];
                    $warehouse->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
