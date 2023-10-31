<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubModule;

class SubModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubModule::create([
            'name' => 'Inicio',
            'page' => '/inicio',
            'description' => 'pagina de inicio',
            'status' => 1,
            'module_id' => 1,
        ]);

        SubModule::create([
            'name' => 'Usuarios',
            'page' => '/usuarios',
            'description' => 'pagina de los usuarios del sistema',
            'status' => 1,
            'module_id' => 2,
        ]);

        SubModule::create([
            'name' => 'Roles y Permisos',
            'page' => '/roles',
            'description' => 'pagina de roles y permisos del sistema',
            'status' => 1,
            'module_id' => 2,
        ]);

        SubModule::create([
            'name' => 'Empresas',
            'page' => '/empresas',
            'description' => 'pagina de las empresas del sistema',
            'status' => 1,
            'module_id' => 2,
        ]);
    }
}