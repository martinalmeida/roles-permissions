<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseRequest;

class CompanyRequest extends BaseRequest
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

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function customMessages(): array
    {
        return [
            'email.unique' => 'La dirección de correo electrónico ya se encuentra registrada.',
        ];
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->setCustomMessages($this->customMessages());
    }
}
