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
            // Asegúrate de ajustar el valor según el ID correspondiente al módulo asociado
        ]);

        SubModule::create([
            'name' => 'Usuario',
            'page' => '/usuario',
            'description' => 'pagina de los usuarios del sistema',
            'status' => 1,
            'module_id' => 2,
            // Asegúrate de ajustar el valor según el ID correspondiente al módulo asociado
        ]);

        SubModule::create([
            'name' => 'Roles',
            'page' => '/roles',
            'description' => 'roles del sistema',
            'status' => 1,
            'module_id' => 2,
            // Asegúrate de ajustar el valor según el ID correspondiente al módulo asociado
        ]);

        SubModule::create([
            'name' => 'Permisos',
            'page' => '/permisos',
            'description' => 'permisos del sistema',
            'status' => 1,
            'module_id' => 2,
            // Asegúrate de ajustar el valor según el ID correspondiente al módulo asociado
        ]);
    }
}