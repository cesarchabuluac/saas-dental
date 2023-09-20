<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAdjustmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.adjustments.store', $this->adjustment);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'warehouse_id' => 'required|integer|exists:inv_warehouses,id',
            'date' => 'required|date',
            'reference' => 'required|string|max:255|unique:inv_adjustments,reference',
            'items' => 'required|array',
            'items.*.medicine_id' => 'required|integer|exists:inv_medicines,id',
            'items.*.quantity' => 'required|integer',   
            'items.*.type' => 'required|string|in:addition,subtraction'         
        ];
    }

    public function attributes()
    {
        return [
            'warehouse_id' => 'warehouse',
            'items.*.medicine_id' => 'medicine',
            'items.*.quantity' => 'quantity',
            'items.*.type' => 'type',
        ];
    }

    public function messages()
    {
        return [
            'warehouse_id.required' => 'The warehouse field is required.',
            'type.required' => 'The type field is required.',
            'date.required' => 'The date field is required.',
            'reference.required' => 'The reference field is required.',
            'reference.unique' => 'The reference has already been taken.',
            'items.required' => 'The items field is required.',            
            'items.*.medicine_id.required' => 'The medicine field is required.',
            'items.*.quantity.required' => 'The quantity field is required.',
            'items.*.type.required' => 'The type field is required.',
        ];
    }
}
