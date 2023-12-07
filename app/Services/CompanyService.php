<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use App\Models\Company;
use App\Http\Requests\CreateCompanyRequest;
use Illuminate\Http\Request;

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

    public function showCompanies(string $searchQuery, int $page): array
    {
        $searchQuery = addcslashes($searchQuery, '%_');
        $perPage = 10;
        $companies = Company::with('userStatus')
            ->where(function ($query) {
                $query->where('status', 1)
                    ->orWhere('status', 2);
            })
            ->when($searchQuery, function ($query, $searchQuery) {
                $query->where(function ($query) use ($searchQuery) {
                    $query->where('nombre', 'LIKE', '%' . $searchQuery . '%')
                        ->orWhere('email', 'LIKE', '%' . $searchQuery . '%'); 
                });
            })
            ->orderBy('nit', 'asc')
            ->paginate($perPage, ['*'], 'page', $page);

        $companiesArray = $companies->toArray();
        return $companiesArray;
    }

    public function updateCompany(Request $request, int $id): bool
    {
        $user = Company::findOrFail($id);
        $updateResult = $user->update([
            'nit' => $request->nit,
            'digito' => $request->digito,
            'nombre' => $request->nombre,
            'representante' => $request->representante,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
            'email' => $request->email,
            'pais' => $request->pais,
            'ciudad' => $request->ciudad,
            'contacto' => $request->contacto,
            'email_tec' => $request->email_tec,
            'email_logis' => $request->email_logis,
        ]);
        return $updateResult;
    }

    public function deleteCompany(int $id): bool
    {
        $company = Company::findOrFail($id);
        $deleteResult = $company->update([
            'status' => 0
        ]);
        return $deleteResult;
    }
}