<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLaboratoryActionRequest extends FormRequest
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
            'name' => 'required|min:3',
            'cost' => 'required|numeric',
        ];
    }

    public function attributes()
    {
        return [
            'cost' => __('lang.laboratory_actions_cost'),
        ];
    }

    // public function messages()
    // {
    //     return [
    //         'cost.required' => 'El campo :attribute es obligatorio',
    //     ];
    // }
}
