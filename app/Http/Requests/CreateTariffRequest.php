<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTariffRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|unique:tariffs,name',
            'price' => 'required|numeric',
            'laboratory_id' => 'required|exists:laboratories,id',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'nombre',
            'price' => 'precio',
            'laboratory_id' => 'laboratorio',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El campo :attribute es obligatorio',
            'name.min' => 'El campo :attribute debe tener al menos :min caracteres',
            'name.unique' => 'El campo :attribute ya existe',
            'price.required' => 'El campo :attribute es obligatorio',
            'price.numeric' => 'El campo :attribute debe ser un número',
            'laboratory.required' => 'El campo :attribute es obligatorio',
            'laboratory.min' => 'El campo :attribute debe tener al menos :min caracteres',
            'laboratory_id.required' => 'El campo :attribute es obligatorio',
            'laboratory_id.exists' => 'El campo :attribute no existe',
        ];
    }
}

