<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyService
{

    public function uploadImage(Request $request, int $company_id):?string
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


    public function createCompany(Request $request): Company
    {

        $company = Company::create([
            'nit' => $request->nit,
            'digito' => $request->digito,
            'nombre' => $request->nombre,
            'representante' => $request->representante,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
            'email' => $request->email,
            'pais' => $request->pais,
            'ciudad' => $request->ciudad ?? null,
            'contacto' => $request->contacto ?? null,
            'email_tec' => $request->email_tec ?? null,
            'email_logis' => $request->email_logis ?? null,
        ]);

        return $company; 
    }       
}