<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;


class RolController extends Controller
{
    public function getRoles(Request $request)
    {
        try {
            $roles = Rol::where('status', 1)
                ->orderBy('id', 'asc')
                ->get(['id', 'name', 'description', 'status',]);

            if (count($roles) > 0) {
                return response()->json([
                    "message" => "Roles encontrados en el sistema.",
                    "type" => "success",
                    "data" => $roles,
                    "status" => 200
                ]);
            } else {
                return response()->json([
                    "message" => "No hay roles registrados.",
                    "type" => "warning",
                    "data" => null,
                    "status" => 202
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al obtener los roles.",
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
            Rol::create([
                'name' => $request->name,
                'description' => $request->description,
            ]);
            return response()->json([
                "message" => "El rol fue creado exitosamente!",
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