<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.categories.update', $this->route('category'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|unique:inv_categories,name,' . $this->category,
            'description' => 'nullable|string|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'categoría',
            'description' => 'descripción',
        ];
    }
}
