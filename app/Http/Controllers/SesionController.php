<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class SesionController extends Controller
{
    public function validated(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|max:255',
                'password' => 'required|max:255',
            ]);
            $authenticated = auth()->attempt(['email' => $request->email, 'password' => $request->password, 'status' => 1]);
            if ($authenticated) {
                return response()->json([
                    "message" => "Bienvenido al sistema de gestión roles y permisos.",
                    "type" => "success",
                    "status" => 200
                ]);
            } else {
                return response()->json([
                    "message" => "Las credenciales que ingresaste no son correctas, vuelve a intentarlo.",
                    "type" => "danger",
                    "status" => 404
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al iniciar sesión.",
                "type" => "danger",
                "status" => 404
            ]);
        }
    }

    public function getAllDataSesion()
    {
        try {
            $data = Auth::user();
            return response()->json([
                "message" => "Datos de sesion.",
                "type" => "success",
                "data" => $data,
                "status" => 200
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al obtener los datos de sesion.",
                "type" => "danger",
                "data" => null,
                "status" => 404
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->flush();
        return redirect('/');
    }
}