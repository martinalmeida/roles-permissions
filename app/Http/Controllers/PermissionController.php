<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;


class PermissionController extends Controller
{
    public function getModules(Request $request)
    {
        try {
            $modules = Permission::join('sub_modules', 'sub_modules.id', '=', 'permissions.sub_module_id')
                ->join('modules', 'modules.id', '=', 'sub_modules.module_id')
                ->where('modules.status', '=', 1)
                ->where('rol_id', '=', auth()->user()->rol_id)
                ->orderBy('modules.name', 'desc')
                ->get(['modules.id', 'modules.name', 'modules.icon', 'modules.description',]);

            if (count($modules) > 0) {
                return response()->json([
                    "message" => "Modulos disponibles en el sistema.",
                    "type" => "success",
                    "data" => $modules,
                    "status" => 200
                ]);
            } else {
                return response()->json([
                    "message" => "No hay modulos disponibles en el sistema.",
                    "type" => "warning",
                    "data" => null,
                    "status" => 202
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al obtener los modulos.",
                "type" => "danger",
                "data" => null,
                "status" => 404
            ]);
        }
    }

    public function getSubModules(Request $request)
    {
        try {
            $modules = Permission::join('sub_modules', 'sub_modules.id', '=', 'permissions.sub_module_id')
                ->join('modules', 'modules.id', '=', 'sub_modules.module_id')
                ->where('modules.status', '=', 1)
                ->where('sub_modules.status', '=', 1)
                ->where('rol_id', '=', auth()->user()->rol_id)
                ->orderBy('sub_modules.name', 'desc')
                ->get(['sub_modules.id', 'sub_modules.name', 'sub_modules.page', 'sub_modules.description', 'sub_modules.module_id', 'r', 'w', 'u', 'd']);

            if (count($modules) > 0) {
                return response()->json([
                    "message" => "Submodulos disponibles en el sistema.",
                    "type" => "success",
                    "data" => $modules,
                    "status" => 200
                ]);
            } else {
                return response()->json([
                    "message" => "No hay submodulos disponibles en el sistema.",
                    "type" => "warning",
                    "data" => null,
                    "status" => 404
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "message" => "Error al obtener los modulos.",
                "type" => "danger",
                "data" => null,
                "status" => 404
            ]);
        }
    }

}