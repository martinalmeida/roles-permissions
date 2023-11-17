<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;


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
}