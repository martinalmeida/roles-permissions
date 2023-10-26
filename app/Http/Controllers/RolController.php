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
                ->orderBy('name', 'asc')
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

}