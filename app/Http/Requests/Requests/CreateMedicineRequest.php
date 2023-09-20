<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateMedicineRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.medicines.store', $this->route('medicine'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'sku' => 'required|string|max:255|unique:inv_medicines,sku',
            'brand_id' => 'required|integer|exists:inv_brands,id',
            'category_id' => 'required|integer|exists:inv_categories,id',
            'sub_category_id' => 'nullable|integer|exists:inv_sub_categories,id',
            // 'supplier_id' => 'required|integer|exists:inv_suppliers,id',
            // 'warehouse_id' => 'required|integer|exists:inv_warehouses,id',
            'unit_id' => 'required|integer|exists:inv_units,id',
            'is_taxable' => 'required|boolean',
            'manage_stock' => 'required|boolean',
            'stock_min' => 'required|integer',
            'price' => 'required|numeric',
            'tax' => 'required|numeric',
            'expiration_date' => 'nullable|date',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Nombre',
            'description' => 'Descripción',
            'sku' => 'SKU',
            'brand_id' => 'Marca',
            'category_id' => 'Categoría',
            'sub_category_id' => 'Subcategoría',
            'supplier_id' => 'Proveedor',
            'warehouse_id' => 'Almacén',
            'unit_id' => 'Unidad',
            'is_taxable' => '¿Es gravable (Impuesto)?',
            'manage_stock' => '¿Administrar stock?',
            'stock_min' => 'Stock mínimo',
            'price' => 'Precio',
            'tax' => 'Impuesto',
            'expiration_date' => 'Fecha de vencimiento',
        ];
    }
}
