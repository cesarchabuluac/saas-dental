<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UpdateExpenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('expenses.update', $this->route('expense'));
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
            'date' => 'required',
            'reason' => 'required|string|min:3',
            'expense_category_id' => 'required|exists:expense_categories,id',
            'reference' => 'required|string|max:255|unique:expenses,reference,' . $this->expense,
            // 'reference' => 'required|string|max:255|unique:expenses,reference,' . $this->expense . ',id',
            'amount' => 'required|numeric|min:0',
            'note' => 'required'
        ];
    }

    public function attributes()
    {
        return [
            'branch_office_id' => __('lang.expense_modal_branch'),
            'expense_category_id' => __('lang.expenses.fields.expense_category_id'),
            'reason' => __('lang.expenses.fields.reason'),
            'reference' => __('lang.expense_modal_reference'),
            'amount' => __('lang.expense_modal_amount'),
            'note' => __('lang.expense_modal_note'),
        ];
    }
}
