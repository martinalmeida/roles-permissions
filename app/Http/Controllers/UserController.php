<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class RolController extends Controller
{
    public function getUsers(Request $request)
    {
        try {
            $roles = User::where('status', 1)
                ->orWhere('status', 2)
                ->orderBy('id', 'asc')
                ->select([
                    'id',
                    'name',
                    'a_paterno',
                    'a_materno',
                    'telefono',
                    'email',
                    DB::raw('CASE WHEN status = 1 THEN "Activo" ELSE "Inactivo" END as status'),
                ])
                ->get();

            return response()->json([
                "message" => "Usuarios encontrados en el sistema.",
                "type" => "success",
                "data" => $roles,
                "status" => 200
            ]);
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
            $newrol = User::create([
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