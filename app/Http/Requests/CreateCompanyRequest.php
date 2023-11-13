<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nit' => 'required|max:20',
            'digito' => 'required|max:6',
            'nombre' => 'required|max:255',
            'representante' => 'required|max:255',
            'telefono' => 'required|max:20',
            'direccion' => 'required|max:255',
            'email' => 'required|max:255',
            'pais' => 'required|max:255',
        ];
    }
}
