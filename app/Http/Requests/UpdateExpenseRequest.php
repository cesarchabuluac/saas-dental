<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'user_id' => 'required|exists:users,id',
            'date' => 'required',
            'reference' => 'required|string|max:255|unique:expenses,reference,' . $this->expense,
            'amount' => 'required|numeric|min:0',
            'note' => 'required'
        ];
    }
}
