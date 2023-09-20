<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.suppliers.store', Supplier::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'code' => 'required|unique:inv_suppliers,code|string|max:255',
            'name' => 'required|unique:inv_suppliers,name|string|max:255',
            'email' => 'nullable|email|unique:inv_suppliers,email|string|max:255',
            'phone' => 'nullable|unique:inv_suppliers,phone|string|max:255',
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'zip' => 'nullable|string|max:6',
        ];
    }

    public function attributes()
    {
        return [
            // 'code' => 'código', 
            'name' => 'proveedor',
            'email' => 'correo electrónico',
            'phone' => 'teléfono',
            'address' => 'dirección',
            'city' => 'ciudad',
            'state' => 'estado',
            'country' => 'país',
            'zip' => 'código postal',
        ];
    }
}
