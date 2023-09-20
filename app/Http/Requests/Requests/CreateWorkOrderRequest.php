<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\DateFormat;

class CreateWorkOrderRequest extends FormRequest
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
            'branch_office_id' => 'required|exists:branch_offices,id',
            'patient_id' => 'required|exists:patients,id',
            'professional_id' => 'required|exists:users,id',
            'laboratory_id' => 'required|exists:laboratories,id',
            'application_date' => 'required',
            'delivery_date' => 'required',
            
        ];
    }

    public function attributes()
    {
        return [
            'branch_office_id' => __('lang.branch_office'),
            'patient_id' => __('lang.patient'),
            'professional_id' => __('lang.professional'),
            'laboratory_id' => __('lang.laboratory'),
            'application_date' => __('lang.work_order_application_date'),
            'delivery_date' => __('lang.work_order_delivery_date'),
        ];
        
    }

    
}
