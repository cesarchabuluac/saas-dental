<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Imports\ClinicalActionsExcel;
use App\Imports\InventoriesExcel;
use App\Imports\LaboratoryActionsExcel;
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

    public function __construct(BrandRepository $brandRepository)
    {
        $this->brandRepository = $brandRepository;
    }


    public function donwloadCatalog(Request $request)
    {
        $filepath = public_path("templates/{$request->file}");
        return \Response::download($filepath);
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
