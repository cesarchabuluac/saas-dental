<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMedicineRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.medicines.update', $this->route('medicine'));
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
            'sku' => 'required|string|max:255|unique:inv_medicines,sku,'.$this->medicine,
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
}
