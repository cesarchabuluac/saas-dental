<?php

namespace App\Http\Controllers\API;

use App\Exports\Catalogs\Actions;
use App\Exports\Catalogs\InventariosExport;
use App\Exports\Catalogs\LaboratoryActions;
use App\Http\Controllers\Controller;
use App\Imports\ClinicalActionsExcel;
use App\Imports\InventoriesExcel;
use App\Imports\LaboratoryActionsExcel;
use App\Models\LaboratoryAction;
use App\Repositories\ActionRepository;
use App\Repositories\Inventories\BrandRepository;
use Illuminate\Http\Request;
use File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Maatwebsite\Excel\Facades\Excel;
use Repsonse;

class ImportAPIController extends Controller
{
    protected $brandRepository;
    private $actionRepository;
    private $laboratoryAction;

    public function __construct(BrandRepository $brandRepository, ActionRepository $actionRepository, LaboratoryAction $laboratoryAction)
    {
        $this->brandRepository = $brandRepository;
        $this->actionRepository = $actionRepository;
        $this->laboratoryAction = $laboratoryAction;
    }


    public function donwloadCatalog(Request $request)
    {
       
        if ($request->filled('value') && $request->value == 1) 
        {
            $actions = $this->actionRepository->get(['name', 'group', 'cost', 'area']);
            return Excel::download(new Actions($actions), 'Acciones Clínicas.xls');
        } else if ($request->filled('value') && $request->value == 2) {
            $actions = $this->laboratoryAction->get(['name', 'cost']);
            return Excel::download(new LaboratoryActions($actions), "Acciones de Laboratorio.xls");
        } else if ($request->filled('value') && $request->value == 3) {
            
            return Excel::download(new InventariosExport, 'Inventarios.xls');

            // $filepath = public_path("templates/{$request->file}");
            // return \Response::download($filepath);
        }
    }

    public function importCatalog(Request $request)
    {
        $file = $request->file('file');

        try {
            if ($request->id == 1) {
                Excel::import(new ClinicalActionsExcel, $request->file);
            } else if ($request->id == 2) {
                Excel::import(new LaboratoryActionsExcel, $request->file);
            } else if ($request->id == 3) {
                Excel::import(new InventoriesExcel, $request->file);
            }
            return $this->sendResponse([], "Catálogo importado con éxito");
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return $this->sendError($failures);
        }
    }
}
