<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLaboratoryRequest extends FormRequest
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
            'name' => 'required|min:3|unique:laboratories,name,' . $this->laboratory,
            'document_type' => 'required|in:Pasaporte,RUT,Otro',
            'rut' => 'required|min:9|max:50|unique:laboratories,rut,' . $this->laboratory,
            'phone_country' => 'required',
            'phone' => 'required|max:25',
            'address' => 'required|max:255',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre es requerido',
            'name.min' => 'El nombre debe tener al menos 3 caracteres',
            'name.unique' => 'El nombre ya está en uso',
            'document_type.required' => 'El tipo de documento es requerido',
            'document_type.in_array' => 'El tipo de documento es inválido',
            'rut.required' => 'El documento es requerido',
            'rut.min' => 'El documento debe tener al menos 9 caracteres',
            'rut.max' => 'El documento debe tener máximo 50 caracteres',
            'rut.unique' => 'El documento ya está en uso',
            'phone_country.required' => 'El código de país es requerido',
            'phone.required' => 'El teléfono es requerido',
            'phone.max' => 'El teléfono debe tener máximo 25 caracteres',
            'address.required' => 'La dirección es requerida',
            'address.max' => 'La dirección debe tener máximo 255 caracteres',
        ];
    }
}
