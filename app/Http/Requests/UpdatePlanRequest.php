<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UpdatePlanRequest extends FormRequest
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
            'image' => ['nullable'],
            'name' => ['sometimes', 'string', 'unique:plans,name,'.$this->id],
            'limit_doctor' => ['required', 'integer'],
            'limit_assistant' => ['required', 'integer'],
            'limit_receptionist' => ['required', 'integer'],
            'limit_patient' => ['required', 'integer'],
            'is_popular' => ['required'],
        ];
    }

     /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $features = collect($this->features) ?? collect([]);

        $this->merge([
            'features' => $features->pluck('id')->toArray(),
        ]);
    }
}
