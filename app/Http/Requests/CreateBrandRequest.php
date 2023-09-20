<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateBrandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.brands.store', $this->route('brand'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|unique:inv_brands,name',
            'description' => 'nullable|string|max:255',            
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'nombre',
            'description' => 'descripción',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El campo nombre es obligatorio.',
            'name.string' => 'El campo nombre debe ser una cadena de caracteres.',
            'name.max' => 'El campo nombre no debe ser mayor a 255 caracteres.',
            'name.unique' => 'El campo nombre ya ha sido registrado.',
            'description.string' => 'El campo descripción debe ser una cadena de caracteres.',
            'description.max' => 'El campo descripción no debe ser mayor a 255 caracteres.',
        ];
    }
}
