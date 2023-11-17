<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreateUserRequest;
use App\Services\UserService;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['create']]);
    }


    public function create(CreateUserRequest $request, UserService $userService){
        $user = $userService->createUser($request->validated());
        if ($user) {
            $credentials = $request->only('name', 'primer_apellido', 'email', 'password');
            $token = Auth::guard('api')->attempt($credentials);

            return response()->json([
                'message' => 'Usuario creado exitosamente.', 'user' => $user,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ], 201);

        } else {
            return response()->json(['message' => 'Error al crear usuario'], 500);
        }
    }

    public function show(UserService $userService)
    {
        $users = $userService->showUsers();
        if ($users){
            return response()->json(["message" => $users,], 200);
        } else {
            return response()->json(["message" => "Error al obtener la lista de usuarios."], 400);
        } 
    }
}