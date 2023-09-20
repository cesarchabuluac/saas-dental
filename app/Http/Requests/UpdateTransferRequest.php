<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTransferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.transfers.update', $this->transfer);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'from_warehouse_id' => 'required|integer|exists:inv_warehouses,id',
            'to_warehouse_id' => 'required|integer|exists:inv_warehouses,id',
            'transfer_date' => 'required|date',
            'reference' => 'required|string|max:255|unique:inv_transfers,reference,' . $this->transfer,
            'items' => 'required|array',
            'items.*.medicine_id' => 'required|integer|exists:inv_medicines,id',
            'items.*.quantity' => 'required|integer',
        ];
    }

    public function attributes()
    {
        return [
            'user_id' => 'user',
            'from_warehouse_id' => 'from warehouse',
            'to_warehouse_id' => 'to warehouse',
            'transfer_date' => 'transfer date',
            'reference' => 'reference',
            'items.*.medicine_id' => 'medicine',
            'items.*.quantity' => 'quantity',
        ];
    }

    public function messages()
    {
        return [
            'user_id.required' => 'The user field is required.',
            'from_warehouse_id.required' => 'The from warehouse field is required.',
            'to_warehouse_id.required' => 'The to warehouse field is required.',
            'transfer_date.required' => 'The transfer date field is required.',
            'reference.required' => 'The reference field is required.',
            'reference.unique' => 'The reference has already been taken.',
            'items.required' => 'The items field is required.',
        ];
    }
}
