<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePlanRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'image' => ['required'],
            'name' => ['required', 'string', 'unique:plans,name'],
            'amount' => ['required', 'numeric'],
            'currency_id' => ['required', 'exists:currencies,id'],
            'interval' => [
                function ($attribute, $value, $fail) {
                    //day, week, month or year
                    $interval_data = ['day', 'week', 'quarter', 'semester', 'month', 'year'];
                    // If data is not in interval_data array it fails with a message
                    if (! in_array($value, $interval_data)) {
                        $fail('The '.$attribute.' is invalid.');
                    }
                },
            ],
            'description' => ['sometimes', 'max:100'],
            'is_popular' => ['required'],            
            'limit_doctor' => ['required', 'integer'],
            'limit_assistant' => ['required', 'integer'],
            'limit_receptionist' => ['required', 'integer'],
            'limit_patient' => ['required', 'integer'],
            // 'limit_purchases' => ['required', 'integer'],
            // 'limit_invoices' => ['required', 'integer'],
            // 'features' => ['required', 'array'],
        ];
    }
}
