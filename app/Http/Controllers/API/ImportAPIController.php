<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Imports\ClinicalActionsExcel;
use App\Imports\LaboratoryActionsExcel;
use Illuminate\Http\Request;
use File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Maatwebsite\Excel\Facades\Excel;
use Repsonse;

class ImportAPIController extends Controller
{
    public function donwloadCatalog(Request $request)
    {
        $filepath = public_path("templates/{$request->file}");
        if ($request->value == 1 || $request->value == 2) {
            return \Response::download($filepath);
        } else {
            // if ($request->value == 3) {
            //     return Excel::download(new CustomerCommissionsExport, $request->file);
            // } else if ($request->value == 4) {
            //     return Excel::download(new CustomerBankAccountExport, $request->file);
            // }
        }
    }

    public function importCatalog(Request $request)
    {
        try {

            if ($request->id == 1) {
                Excel::import(new ClinicalActionsExcel, $request->file);
            } else if ($request->id == 2) {
                Excel::import(new LaboratoryActionsExcel, $request->file);
            };
            return $this->sendResponse([], "Catálogo importado con éxito");
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return $this->sendError($failures);
        }
    }
}
