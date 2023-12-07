<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SesionRequest;

class SesionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'logout']]);
    }

    public function login(SesionRequest $request)
    {
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
    }

    public function getAllDataSesion()
    {
        try {
            $data = Auth::guard('api')->user();
            return response()->json(["message" => "Datos de sesion.", "data" => $data], 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e], 400);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('api')->logout();
        return response()->json(["message" => "Sesión cerrada exitosamente."], 200);
    }
}