<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['create']]);
    }


    public function create(Request $request){
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'primer_apellido' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
            ]);
            $user = User::create([
                'name' => $request->name,
                'primer_apellido' => $request->primer_apellido,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $credentials = $request->only('name', 'primer_apellido', 'email', 'password');
            $token = Auth::guard('api')->attempt($credentials);
            return response()->json([
                'message' => 'Usuario creado exitosamente.',
                'user' => $user,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                "message" => $e,
                "type" => "danger",
                "data" => null,
                "status" => 404
            ]);
        }
    }

    public function getUsers(Request $request)
    {
        try {
            $users = User::with('userStatus', 'userRol')
                ->where('status', 1)
                ->orWhere('status', 2)
                ->orderBy('id', 'asc')
                ->get();

            return response()->json([
                "message" => "Usuarios encontrados en el sistema.",
                "type" => "success",
                "data" => $users,
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
}