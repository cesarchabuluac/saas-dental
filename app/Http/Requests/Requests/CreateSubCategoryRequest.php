<?php

namespace App\Http\Requests;

use App\Models\Inventories\SubCategory;
use Illuminate\Foundation\Http\FormRequest;

class CreateSubCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.subcategories.store', SubCategory::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:inv_sub_categories,name|string|max:255',
            'category_id' => 'required|integer|exists:inv_categories,id',
            'description' => 'nullable|string|max:255',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'subcategoría',
            'category_id' => 'categoría',
            'description' => 'descripción',
        ];
    }
}
