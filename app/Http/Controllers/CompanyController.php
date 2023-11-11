<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
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

    public function create(Request $request)
    {
        try {
            $request->validate([
                'nit' => 'required|max:20',
                'digito' => 'required|max:6',
                'nombre' => 'required|max:255',
                'representante' => 'required|max:255',
                'telefono' => 'required|max:20',
                'direccion' => 'required|max:255',
                'email' => 'required|max:255',
            ]);
            $image = $request->file('image');
            $urlImage = Storage::url($image->storeAs('public/companies', $image->hashName()));
            Company::create([
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
                'image' => env('APP_URL') . $urlImage,
            ]);
            return response()->json([
                "message" => "La empresa fue creada exitosamente!",
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