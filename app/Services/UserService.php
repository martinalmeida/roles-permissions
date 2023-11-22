<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;


class UserService
{
    public function createUser(array $user_data): User
    {
        $user = User::create([
            'name' => $user_data['name'],
            'primer_apellido' => $user_data['primer_apellido'],
            'email' => $user_data['email'],
            'password' => Hash::make($user_data['password']),
        ]);

        return $user; 
    }

    public function showUsers(): array
    {
        $users = User::with('userStatus', 'userRol')
                ->where('status', 1)
                ->orWhere('status', 2)
                ->orderBy('id', 'asc')
                ->get()
                ->toArray();

        return $users;
    }

    public function updateUser(Request $request, int $id): bool
    {
        $user = User::findOrFail($id);
        $updateResult = $user->update([
            'name' => $request->name,
            'primer_apellido' => $request->primer_apellido,
            'segundo_apellido' => $request->segundo_apellido,
            'telefono' => $request->telefono,
            'nombrefiscal' => $request->nombrefiscal,
            'direccionfiscal' => $request->direccionfiscal,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol_id' => $request->rol,
            'status' => $request->status,
        ]);
        return $updateResult;
    }

    public function deleteUser(int $id): bool
    {
        $user = User::findOrFail($id);
        $deleteResult = $user->update([
            'status' => 0
        ]);
        return $deleteResult;
    }
}