<?php

namespace App\Imports;

use App\Models\Action;
use App\Models\ActionGroup;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithValidation;

class ClinicalActionsExcel implements ToCollection, WithValidation
{
    use Importable;

    private $errors = []; // array to accumulate errors
    private $driverData = null;


    public function rules(): array
    {
        return [
            '0' => 'required', // Validación para la columna 0
            '1' => 'required', // Validación para la columna 1
            '2' => 'required',
            '3' => 'required',
            // Agrega más reglas de validación según tus necesidades
        ];
    }

    /**
     * @param Collection $collection
     *   row 0 => Name
     *   row 1 => Group
     *   row 2 => Cost
     *   row 3 => Area     
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {

                    // Buscar o crear el grupo de acciones
                    $group = ActionGroup::firstOrCreate(['name' => $row[1]], ['name' => $row[1]]);

                    // Buscar o crear la acción
                    $action = Action::firstOrNew(['name' => $row[0]]);
                    if (!$action->exists) {
                        $action->action_group_id = $group->id;
                        $action->group = $group->name;
                    }

                    $action->cost = $row[2];
                    $action->area = $row[3];
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
