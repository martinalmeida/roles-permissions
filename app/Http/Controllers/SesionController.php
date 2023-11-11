<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class SesionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh', 'logout']]);
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|max:255',
                'password' => 'required|max:255',
            ]);
            $credentials = $request->only('email', 'password');
            $token = Auth::guard('api')->attempt($credentials);
            $user = Auth::guard('api')->user();
            if ($token && $user->status == 1) {
                return response()->json([
                    "message" => "Bienvenido al sistema de gestión roles y permisos.",
                    "type" => "success",
                    'authorisation' => [
                        'token' => $token,
                        'type' => 'bearer',
                    ],
                    "status" => 200
                ]);
            } else {
                return response()->json([
                    "message" => "Las credenciales que ingresaste no son correctas, vuelve a intentarlo.",
                    "type" => "warning",
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
            $data = Auth::guard('api')->user();
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

    public function refresh()
    {
        return response()->json([
            "message" => "Bienvenido al sistema de gestión roles y permisos.",
            'type' => 'success',
            'authorisation' => [
                'token' => Auth::guard('api')->refresh(),
                'type' => 'bearer',
            ],
            "status" => 200
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('api')->logout();
        $request->session()->flush();
        return redirect('/');
    }
}