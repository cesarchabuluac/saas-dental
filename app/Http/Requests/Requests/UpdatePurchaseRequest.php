<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UpdatePurchaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->can('inventories.purchases.update', $this->route('purchase'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'supplier_id' => 'required|integer|exists:inv_suppliers,id',
            'user_id' => 'required|integer|exists:users,id',
            'reference' => 'required|string|max:255|unique:inv_purchases,reference,' . $this->purchase,
            'purchase_date' => 'required|date',
            'comments' => 'nullable|string|max:255',
            'status' => 'required|string|max:255',
            'subtotal' => 'required|numeric',
            'tax' => 'required|numeric',
            'discount' => 'required|numeric',
            'shipping' => 'required|numeric',
            'total' => 'required|numeric',
            'items' => 'required|array',         
        ];
    }

    public function attributes()
    {
        return [
            'supplier_id' => 'proveedor',
            'user_id' => 'usuario',
            'purchase_date' => 'fecha de compra',
            'comments' => 'comentarios',
            'status' => 'estado',
            'subtotal' => 'subtotal',
            'tax' => 'impuesto',
            'discount' => 'descuento',
            'shipping' => 'envío',
            'total' => 'total',
            'items' => 'artículos',
        ];
    }
}
