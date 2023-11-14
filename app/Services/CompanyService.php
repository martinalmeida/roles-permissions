<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use App\Models\Company;
use App\Http\Requests\CreateCompanyRequest;

class CompanyService
{

    public function uploadImage(CreateCompanyRequest $request, int $company_id):?string
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $urlImage = Storage::url($image->storeAs('public/companies/'.$company_id, $image->hashName()));
            $companyUpdate = Company::where('id', $company_id)->update([
                'image' => env('APP_URL') . $urlImage
            ]);
            return $companyUpdate;
        }else{
            return true;
        }
    }


    public function createCompany(array $company_data): Company
    {
        $company = Company::create([

            'nit' => $company_data['nit'],
            'digito' => $company_data['digito'],
            'nombre' => $company_data['nombre'],
            'representante' => $company_data['representante'],
            'telefono' => $company_data['telefono'],
            'direccion' => $company_data['direccion'],
            'email' => $company_data['email'],
            'pais' => $company_data['pais'],
            'ciudad' => $company_data['ciudad'] ?? null,
            'contacto' => $company_data['contacto'] ?? null,
            'email_tec' => $company_data['email_tec'] ?? null,
            'email_logis' => $company_data['email_logis'] ?? null,
    
        ]);

        return $company; 
    }

    public function showCompanies(): array
    {
        $companies = Company::with('userStatus')
            ->where('status', 1)
            ->orWhere('status', 2)
            ->orderBy('nit', 'asc')
            ->get()
            ->toArray();

        return $companies;
    }
    
    
}