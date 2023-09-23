<?php

namespace App\Imports;

use App\Models\Inventories\Brand;
use App\Models\Inventories\Category;
use App\Models\Inventories\Medicine;
use App\Models\Inventories\Stock;
use App\Models\Inventories\SubCategory;
use App\Models\Inventories\Unit;
use App\Models\Inventories\Warehouse;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;

class MedicinesExcel implements ToCollection
{
    use Importable;

    /**
     * @param Collection $collection
     * row 0 => sku
     * row 1 => name
     * row 2 => description
     * row 3 => unit
     * row 4 => brand
     * row 5 => category
     * row 6 => subcategory
     * row 7 => expiration_date
     * row 8 => manage_stock
     * row 9 => stock_min
     * row 10 => price
     */
    public function collection(Collection $collection)
    {
        DB::beginTransaction();

        try {
            foreach ($collection as $key => $row) {

                if ($key > 0) {

                    $medicine = Medicine::firstOrNew(['sku' => $row[0]]);
                    $unit = Unit::firstOrNew(['name' => $row[3]]);
                    $brand = Brand::firstOrNew(['name' => $row[4]]);
                    $category = Category::firstOrNew(['name' => $row[5]]);
                    $subcategory = SubCategory::firstOrNew(['name' => $row[6], 'category_id' => $category->id]);
                    $medicine->unit_id = $unit->id;
                    $medicine->brand_id = $brand->id;
                    $medicine->category_id = $category->id;
                    $medicine->sub_category_id = $subcategory->id;
                    $medicine->user_id = auth()->user()->id;
                    $medicine->name = $row[1];
                    $medicine->description = $row[2];
                    $medicine->expiration_date = !empty($row['7']) ? $this->transformDate($row['7']) : null;
                    $medicine->manage_stock = $row['8'] === 'Si' ? 1 : 0;
                    $medicine->stock_min = $row['9'] ?? 5;
                    $medicine->price = $row['10'] ?? 0;
                    $medicine->save();

                    $warehouses = Warehouse::withTrashed()->get(['id']);
                    $stocks = [];
                    foreach ($warehouses as $warehouse) {
                        $inStock = Stock::where('warehouse_id', $warehouse['id'])->where('medicine_id', $medicine->id)->count();
                        if ($inStock <= 0) {
                            $stocks[] = [
                                'medicine_id' => $medicine->id,
                                'warehouse_id' => $warehouse['id'],
                                'quantity' => 0,
                            ];
                        }
                    }
                    $medicine->stocks()->createMany($stocks);
                }
            }
            DB::commit();
        } catch (Exception $ex) {
            DB::rollBack();
            throw $ex;
        }
    }

    /**
     * Transform a date value into a Carbon object.
     *
     * @return \Carbon\Carbon|null
     */
    public function transformDate($value, $format = 'Y-m-d')
    {
        try {
            return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject(intval($value)));
        } catch (\ErrorException $e) {
            return \Carbon\Carbon::createFromFormat('d/m/Y', intval($value))->format('Y-m-d');
        }
    }
}
