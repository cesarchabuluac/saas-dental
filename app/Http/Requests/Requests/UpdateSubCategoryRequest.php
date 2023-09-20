<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.subcategories.update', $this->route('subcategory'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|unique:inv_sub_categories,name,' . $this->subcategory,
            'category_id' => 'required|integer|exists:inv_categories,id',
            'description' => 'nullable|string|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'categoría',
            'category_id' => 'categoría',
            'description' => 'descripción',
        ];
    }
}
