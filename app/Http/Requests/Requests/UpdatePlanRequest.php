<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'title' => 'required',
            'type' => 'required',
            'price' => 'required|numeric',
            'currency' => 'required',
            'duration_in_days' => 'required|numeric|digits_between:7,365',
            'app_director_limit' => 'required|numeric|min:0',
            'app_doctor_limit' => 'required|numeric|min:0',
            'app_dental_assistant_limit' => 'required|numeric|min:0',
            'app_receptionist_limit' => 'required|numeric|min:0',
            'app_patient_limit' => 'required|numeric|min:0',
        ];
    }
}
