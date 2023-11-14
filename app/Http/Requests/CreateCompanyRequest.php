<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

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
            'email' => 'required|max:255|unique:companies,email',
            'pais' => 'required|max:255',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'email.unique' => 'Esta dirección de correo electrónico ya se encuentra registrada.',
        ];
    }
}
