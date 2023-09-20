<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateBranchOfficeRequest extends FormRequest
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
            'postal_code' => 'nullable',
            'country' => 'nullable', 
            'phone' => 'nullable',
            'email' => 'nullable',
            'address' => 'nullable',
            'membrete' => 'nullable',
        ];
    }

    public function attributes()
    {
        return [
            'name' => __('lang.branch_offices.fields.name'),
            'postal_code' => __('lang.branch_offices.fields.postal_code'),
            'country' => __('lang.branch_offices.fields.country'), 
            'phone' => __('lang.branch_offices.fields.phone'),
            'email' => __('lang.branch_offices.fields.email'),
            'address' => __('lang.branch_offices.fields.address'),
            'membrete' => __('lang.branch_offices.fields.membrete'),
        ];
    }
}
