<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCompanyRequest;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Services\CompanyService;
use Illuminate\Foundation\Validation\ValidatesRequests;

class CompanyController extends Controller
{
    use ValidatesRequests;

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getCompanies(Request $request)
    {
        try {
            $companies = Company::with('userStatus')
                ->where('status', 1)
                ->orWhere('status', 2)
                ->orderBy('nit', 'asc')
                ->get();

            return response()->json([
                "message" => "Listado de empresas.",
                "type" => "success",
                "data" => $companies,
                "status" => 200
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al obtener la lista de empresas.",
                "type" => "danger",
                "data" => null,
                "status" => 404
            ]);
        }
    }

    public function create(CreateCompanyRequest $request, CompanyService $companyService)
    {
        try {
            $company = $companyService->createCompany($request->validated());
            $company_image =$companyService->uploadImage($request, $company->id);
            if ($company_image) {
                return response()->json(["message" => "La empresa fue creada exitosamente!"], 200);
            }
        } catch (\Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ]);
        }
    }
}


