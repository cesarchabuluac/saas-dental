<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUnitRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.units.update', $this->route('unit'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|unique:inv_units,name,' . $this->unit,
            'abbreviation' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'unidad',
            'abbreviation' => 'abreviatura',
            'description' => 'descripción',
        ];
    }
}
