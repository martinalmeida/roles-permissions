<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SesionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'logout']]);
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|max:255',
                'password' => 'required|max:255',
            ]);
            $credentials = $request->only('email', 'password');
            $token = Auth::guard('api')->setTTL(1440)->attempt($credentials);
            $user = Auth::guard('api')->user();
            if ($token && $user->status == 1) {
                return response()->json([
                    "message" => "Bienvenido al sistema de gestión roles y permisos.",
                    'authorization' => [
                        'token' => $token,
                        'type' => 'bearer',
                    ],
                ], 200);
            } else {
                return response()->json([
                    "message" => "Las credenciales que ingresaste no son correctas, vuelve a intentarlo."
                ], 401);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al iniciar sesión.",
            ], 500);
        }
    }

    public function getAllDataSesion()
    {
        try {
            $data = Auth::guard('api')->user();
            return response()->json([
                "message" => "Datos de sesion.",
                "data" => $data,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                "message" => $e,
            ], 400);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('api')->logout();
        return response()->json([
            "message" => "Sesión cerrada exitosamente.",
        ], 200);
    }
}