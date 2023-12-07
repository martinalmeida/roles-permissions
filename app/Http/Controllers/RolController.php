<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RolService;
use App\Http\Requests\RolRequest;
use App\Models\Rol;
use App\Models\SubModule;
use App\Models\Permission;

class RolController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function show(RolService $rolService)
    {
        $roles = $rolService->showRols();
        if ($roles){
            return response()->json(["message" => $roles,], 200);
        } else {
            return response()->json(["message" => "Error al obtener la lista de roles."], 400);
        } 
    }

    public function create(RolRequest $request, RolService $rolService)
    {
        $new_rol = $rolService->createRol($request->validated());
        if ($new_rol) {
            $submodules = SubModule::get('id');
            foreach ($submodules as $submodule) {
                Permission::create([
                    'sub_module_id' => $submodule->id,
                    'rol_id' => $new_rol->id,
                ]);
            }
            return response()->json(['message' => 'El rol fue creado exitosamente!'], 200);
        } else {
            return response()->json(['message' => 'Error al crear el rol'], 400);
        } 
    }

    public function update(Request $request, RolService $rolService, $id)
    {
        $rol = $rolService->updateRole($request, $id);
        if ($rol) {
            return response()->json(["message" => "Rol actualizado exitosamente."], 200);
        } else {
            return response()->json(["message" => "Error al actualizar el rol."], 400);
        }
    }

    public function delete(RolService $rolService, $id)
    {
        $rol = $rolService->deleteRole($id);
        if ($rol) {
            return response()->json(["message" => "Rol eliminado exitosamente."], 200);
        } else {
            return response()->json(["message" => "Error al eliminar el rol."], 400);
        }
    }
}