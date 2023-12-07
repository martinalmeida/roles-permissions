<?php

namespace App\Services;

use App\Models\Rol;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;


class RolService
{
    public function showRols(): array
    {
        $roles = Rol::with('userStatus')
                ->where('status', 1)
                ->orWhere('status', 2)
                ->orderBy('id', 'asc')
                ->get()
                ->toArray();

        return $roles;
    }

    public function createRol(array $rol_data): Rol
    {
        $new_rol = Rol::create([
            'name' => $rol_data['name'],
            'description' => $rol_data['description']
        ]);

        return $new_rol; 
    }

    public function updateRole(Request $request, int $id): bool
    {
        $rol = Rol::findOrFail($id);
        $updateResult = $rol->update([
            'name' => $request->name,
            'description' => $request->description
        ]);
        return $updateResult;
    }

    public function deleteRole(int $id): bool
    {
        $role = Rol::findOrFail($id);
        $deleteResult = $role->update([
            'status' => 0
        ]);
        return $deleteResult;
    }

    
}