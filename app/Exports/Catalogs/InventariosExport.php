<?php

namespace App\Exports\Catalogs;

use App\Models\Inventories\Brand;
use App\Models\Inventories\Category;
use App\Models\Inventories\Medicine;
use App\Models\Inventories\SubCategory;
use App\Models\Inventories\Supplier;
use App\Models\Inventories\Unit;
use App\Models\Inventories\Warehouse;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class InventariosExport implements WithMultipleSheets
{
    public function sheets(): array
    {
        $sheets = [];


        $subcategories = SubCategory::with('category')->get()->map(function ($subcategory) {
            return [
                'id' => $subcategory->id,
                'category' => $subcategory->category->name,
                'name' => $subcategory->name,
                'description' => $subcategory->description,
                
            ];
        });

        $warehouses = Warehouse::with('branchOffice')->get()->map(function ($warehouse) {
            return [
                'branch_office' => $warehouse->branchOffice->name,
                'name' => $warehouse->name,
                'description' => $warehouse->description,
            ];
        });

        $medicines = Medicine::with('brand', 'unit', 'category', 'subCategory')->get()->map(function ($medicine) {
            return [
                'sku' => $medicine->sku,
                'name' => $medicine->name,                
                'description' => $medicine->description,
                'unit' => $medicine->unit->name,
                'brand' => $medicine->brand->name,                
                'category' => $medicine->category->name,
                'sub_category' => $medicine->subCategory?->name,
                'expiration_date' => $medicine->expiration_date,
                'manage_stock' => $medicine->manage_stock ? 'Si' : 'No', // 'Si' : 'No                               
                'min_stock' => $medicine->stock_min,
                'price' => $medicine->price, 
                'current_stock' => $medicine->current_stock,
            ];
        });

        $suppliers = Supplier::get()->map(function ($supplier) {
            return [
                'name' => $supplier->name,
                'email' => $supplier->email,
                'phone' => $supplier->phone,
                'address' => $supplier->address,
                'city' => $supplier->city,
                'state' => $supplier->state,
                'country' => $supplier->country,
                'zip' => $supplier->zip,
            ];
        });
        
        $sheets[] = new GenericSheet(Brand::get(['name', 'description']), 'Marcas', ['NOMBRE', 'DESCRIPCION']);
        $sheets[] = new GenericSheet(Unit::get(['name', 'abbreviation', 'description']), 'Unidades', ['NOMBRE', 'ABREVIACION', 'DESCRIPCION']);
        $sheets[] = new GenericSheet(Category::get(['name', 'description']), 'Categorias', ['NOMBRE', 'DESCRIPCION']);
        $sheets[] = new GenericSheet($subcategories, 'SubCategorias', ['CATEGORIA', 'SUBCTEGORIA', 'DESCRIPCION']);
        $sheets[] = new GenericSheet($warehouses, 'Bodegas', ['SUCURSAL', 'BODEGA', 'DESCRIPCION']);
        $sheets[] = new GenericSheet($suppliers, 'Proveedores', ['NOMBRE', 'EMAIL', 'TELEFONO', 'DIRECCION', 'CIUDAD', 'ESTADO', 'PAIS', 'CODIGO POSTAL']);
        $sheets[] = new GenericSheet($medicines, 'Medicamentos', ['SKU', 'NOMBRE', 'DESCRIPCION', 'UNIDAD', 'MARCA', 'CATEGORIA', 'SUBCATEGORIA', 'FECHA DE CADUCIDAD', 'GESTION STOCK', 'STOCK MINIMO', 'PRECIO', 'STOCK ACTUAL']);

        return $sheets;
    }
}
