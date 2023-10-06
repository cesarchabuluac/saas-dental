<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Log;

class DynamicFieldsValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $values)
    {
        Log::info($values);
        // Implementa la lógica de validación aquí
        foreach ($values as $value) {
            if (!empty($value)) {
                return true; // Al menos un campo tiene valor
            }
        }

        return false; // Ningún campo tiene valor
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Al menos un campo debe tener valor.';
    }
}
