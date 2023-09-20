<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateExpenseRequest extends FormRequest
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
            'user_id' => 'required|exists:users,id',
            'date' => 'required',
            'reference' => 'required|string|max:255|unique:expenses,reference',
            'amount' => 'required|numeric|min:0',
            'note' => 'required'
        ];
    }

    public function attributes()
    {
        return [
            'branch_office_id' => __('lang.expense_modal_branch'),
            'reference' => __('lang.expense_modal_reference'),
            'amount' => __('lang.expense_modal_amount'),
            'note' => __('lang.expense_modal_note'),
            
        ];
    }
}
