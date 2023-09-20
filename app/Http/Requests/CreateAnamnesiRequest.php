<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAnamnesiRequest extends FormRequest
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
            'patient_id' => 'required|exists:patients,id',
            'first_reason_consultation' => 'nullable',
            'medical_history' => 'nullable',
            'allergies' => 'nullable',
            'medicines' => 'nullable',
            'habits' => 'nullable',
            'family_background' => 'nullable',
            'others' => 'nullable',
            'pregnancy' => 'required|boolean',
            'coagulation_problems' => 'required|boolean',
            'local_analgesic_problems' => 'required|boolean'
        ];
    }
}
