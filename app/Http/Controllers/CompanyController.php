<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Company;

class CompanyController extends Controller
{
    public function getCompanies(Request $request)
    {
        try {
            $companies = Company::where('status', 1)
                ->orWhere('status', 2)
                ->orderBy('nit', 'asc')
                ->select([
                    'nit',
                    'digito',
                    'nombre',
                    'representante',
                    'telefono',
                    'direccion',
                    'email',
                    'pais',
                    'ciudad',
                    'contacto',
                    'email_tec',
                    'email_logis',
                    DB::raw('CASE WHEN status = 1 THEN "Activo" ELSE "Inactivo" END as status'),
                ])
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

    public function create(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'description' => 'required',
            ]);
            Company::create([
                'name' => $request->name,
                'description' => $request->description,
            ]);
            return response()->json([
                "message" => "El usuario fue creado exitosamente!",
                "type" => "success",
                "data" => null,
                "status" => 200
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Revisa los datos ingresados y vuelve a intentar de nuevo.",
                "type" => "warning",
                "data" => null,
                "status" => 404
            ]);
        }
    }
}