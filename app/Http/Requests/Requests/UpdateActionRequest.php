<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateActionRequest extends FormRequest
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
            'action_group_id' => 'required|exists:action_groups,id',
            'cost' => 'required|numeric',
            'area' => 'required|min:3',
            'group' => 'nullable',
        ];
    }

    public function attributes()
    {
        return [
            'action_group_id' => __('lang.clinical_actions_group'),
            'cost' => __('lang.clinical_actions_cost'),
            'group' => __('lang.clinical_actions_group'),
        ];
    }
}
