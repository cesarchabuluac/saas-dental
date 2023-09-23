<?php

namespace App\Imports;

use App\Models\Action;
use App\Models\ActionGroup;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithValidation;

class InventoriesExcel implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            'Marcas' => new BrandsExcel(),
            'Unidades' => new UnitsExcel(),
            'Categorias' => new CategoriesExcel(),
            'SubCategorias' => new SubCategoriesExcel(),
            'Bodegas' => new WareHousesExcel(),
            'Proveedores' => new SuppliersExcel(),
            'Medicamentos' => new MedicinesExcel(),
        ];
    }
}
