<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;


class PermissionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getModules(Request $request)
    {
        try {
            $modules = Permission::join('sub_modules', 'sub_modules.id', '=', 'permissions.sub_module_id')
                ->join('modules', 'modules.id', '=', 'sub_modules.module_id')
                ->where('modules.status', '=', 1)
                ->where('rol_id', '=', auth()->user()->rol_id)
                ->orderBy('modules.name', 'asc')
                ->get(['modules.id', 'modules.name', 'modules.icon', 'modules.description',]);

            if (count($modules) > 0) {
                return response()->json([
                    "success" => true,
                    "message" => "Modulos disponibles en el sistema.",
                    "data" => $modules,
                ]);
            } else {
                return response()->json([
                    "success" => false,
                    "message" => "No hay modulos disponibles en el sistema.",
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "Error al obtener los modulos.",
            ], 500);
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
                ->orderBy('sub_modules.name', 'asc')
                ->get(['sub_modules.id', 'sub_modules.name', 'sub_modules.page', 'sub_modules.description', 'sub_modules.module_id', 'r', 'w', 'u', 'd']);

            if (count($modules) > 0) {
                return response()->json([
                    "success" => true,
                    "message" => "Submodulos disponibles en el sistema.",
                    "data" => $modules,
                ], 200);
            } else {
                return response()->json([
                    "success" => false,
                    "message" => "No hay submodulos disponibles en el sistema.",
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "Error al obtener los modulos.",
            ], 500);
        }
    }

}