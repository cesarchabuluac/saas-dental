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
            'name' => [
                'required', 'min:3'
            ],
            // 'email' => [
            //     'required', 'email', \Rule::unique((new \User)->getTable())->ignore($this->route()->user->id ?? null)
            // ],
            // 'email' => 'required|string|max:255|unique:users,email,'.$this->user,
            'password' => 'nullable|string|min:6',
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
