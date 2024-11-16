<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePatientRequest extends FormRequest
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
            'name' => 'required|min:3|max:100',
            'last_name' => 'required|min:3|max:100',
            'mother_last_name' => 'nullable|min:3|max:100',
            'rut' => 'required|min:9|max:50|unique:patients,rut,' . $this->patient,
            'birthday' => 'nullable',
            'email' => 'required|email|max:100|unique:patients,email,' . $this->patient,
            'cellphone' => 'required|max:25',
            'phone_country' => 'required',
            'phone' => 'required|max:25',
            'address' => 'required|max:255',
            'comments' => 'nullable',
            'active' => 'nullable',
            'is_default' => 'nullable',
            'document_type' => 'nullable',
            'positive_balance' => 'nullable',
            'access_web' => 'nullable',
            'user_id' => 'nullable',
        ];
    }

    public function attributes()
    {
        return [
            'name' => __('lang.patient_name'),
            'last_name' => __('lang.patient_last_name'),
            'mother_last_name' => __('lang.patient_mother_last_name'),
            'rut' => __('lang.patient_document'),
            'birthday' => __('lang.patient_birthday'),
            'email' => __('lang.email'),
            'cellphone' => __('lang.patient_cellphone'),
            'phone' => __('lang.patient_phone'),
            'address' => __('lang.patient_address'),
            'comments' => __('lang.patient_comments'),
            'document_type' => __('lang.patient_document_type'),
            'positive_balance' => __('lang.patient_positive_balance'),
        ];
    }
}
