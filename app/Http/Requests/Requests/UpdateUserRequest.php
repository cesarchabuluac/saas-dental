<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UpdateUserRequest extends FormRequest
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
            'name' => ['required', 'min:3'],
            'password' => 'nullable|string|min:6',
            'roles' => 'required|array',
            'schedule' => 'required_if:roles,4|array',
        ];
    }

    public function attributes()
    {
        return [            
            'password' => __('lang.user_password'),
        ];
    }

    public function messages()
    {
        return [            
            'password.regex' => __('password.password_format'),
        ];
    }
}
