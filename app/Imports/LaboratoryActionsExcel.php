<?php

namespace App\Imports;

use App\Models\Action;
use App\Models\ActionGroup;
use App\Models\LaboratoryAction;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithValidation;

class LaboratoryActionsExcel implements ToCollection, WithValidation
{
    use Importable;

    private $errors = []; // array to accumulate errors
    private $driverData = null;


    public function rules(): array
    {
        return [
            '0' => 'required', // Validación para la columna 0
            '1' => 'required', // Validación para la columna 1
        ];
    }

    /**
     * @param Collection $collection
     *   row 0 => Name
     *   row 1 => Cost
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {                   

                    // Buscar o crear la acción
                    $action = LaboratoryAction::firstOrNew(['name' => $row[0]]);
                    $action->name = $row[0];
                    $action->cost = $row[1];
                    $action->save();
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }
}
