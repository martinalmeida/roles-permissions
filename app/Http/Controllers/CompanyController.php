<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CompanyService;
use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Http\Requests\CreateCompanyRequest;

class CompanyController extends Controller
{
    use ValidatesRequests;

    public function __construct()
    {
        $this->middleware('auth:api');
    }
     
    public function show(Request $request, CompanyService $companyService)
    {
        $companies = $companyService->showCompanies();
        if ($companies){
            return response()->json(["message" => $companies,], 200);
        } else {
            return response()->json(["message" => "Error al obtener la lista de empresas."], 400);
        } 
    }

    public function create(CreateCompanyRequest $request, CompanyService $companyService)
    {  
        $company = $companyService->createCompany($request->validated());
        $company_image =$companyService->uploadImage($request, $company->id);
        if ($company_image) {
            return response()->json(["message" => "La empresa fue creada exitosamente!"], 200);
        } else {
            return response()->json(["message" => "Error al crear la empresa."], 400);
        }
    }
}


