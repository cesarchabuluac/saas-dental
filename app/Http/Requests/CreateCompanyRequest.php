<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'user_id' => 'required|exists:users,id',
            'tenant_id' => 'required|exists:tenants,id',
            'name' => 'required',
            'tenant_id' => 'required|max:20',
            'currency_code' => 'required',
        ];
    }
}
