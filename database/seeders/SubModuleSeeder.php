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
            'name' => 'Roles',
            'page' => '/roles',
            'description' => 'roles del sistema',
            'status' => 1,
            'module_id' => 2,
        ]);

        SubModule::create([
            'name' => 'Permisos',
            'page' => '/permisos',
            'description' => 'permisos del sistema',
            'status' => 1,
            'module_id' => 2,
        ]);
    }
}