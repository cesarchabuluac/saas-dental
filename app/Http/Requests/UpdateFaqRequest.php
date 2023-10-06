<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFaqRequest extends FormRequest
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
            'title' => 'required|string|min:3|unique:faqs,title,' . $this->faq,
            'subtitle' => 'required|string|min:3',
            'faq_items' => 'required|array|min:1',
            'faq_items.*.question' => ['required'],
            'faq_items.*.answer' => ['required'],
        ];
    }
}
