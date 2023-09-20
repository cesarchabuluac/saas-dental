<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAppointmentRequest extends FormRequest
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
            'user_id' => 'required|exists:users,id',
            'patient_id' => 'required|exists:patients,id',
            'branch_office_id' => 'required|exists:branch_offices,id',
            'date' => 'required',
            'state' => 'required',
            'duration' => 'required|integer|between:1,6',
            'intern_observation' => 'nullable',
        ];
    }

    public function attributes()
    {
        return [            
            'user_id' => __('lang.appointment_professional'),
            'patient_id' => __('lang.patient'),
            'branch_office_id' => __('lang.branch_office'),
        ];
    }
}
