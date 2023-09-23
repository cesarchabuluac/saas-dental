<?php

namespace App\Imports;

use App\Models\Inventories\Unit;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class UnitsExcel implements ToCollection
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
                    $unit = Unit::firstOrNew(['name' => $row[0]]);
                    $unit->name = $row[0];
                    $unit->abbreviation = $row[1];
                    $unit->description = $row[2];
                    $unit->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
