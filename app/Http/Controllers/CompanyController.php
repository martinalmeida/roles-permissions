<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    public function getUsers(Request $request)
    {
        try {
            $roles = Company::where('status', 1)
                ->orderBy('id', 'asc')
                ->get(['id', 'name', 'a_paterno', 'a_materno', 'telefono', 'email', 'status',]);

            if (count($roles) > 0) {
                return response()->json([
                    "message" => "Usuarios encontrados en el sistema.",
                    "type" => "success",
                    "data" => $roles,
                    "status" => 200
                ]);
            } else {
                return response()->json([
                    "message" => "No hay usuarios registrados.",
                    "type" => "warning",
                    "data" => null,
                    "status" => 202
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al obtener los usuarios.",
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
            $newrol = Company::create([
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