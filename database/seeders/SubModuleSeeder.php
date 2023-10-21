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
            'name' => 'Submódulo A',
            'page' => 'Página A',
            'description' => 'Descripción del submódulo A',
            'status' => 1,
            'module_id' => 1, // Asegúrate de ajustar el valor según el ID correspondiente al módulo asociado
        ]);

        SubModule::create([
            'name' => 'Submódulo B',
            'page' => 'Página B',
            'description' => 'Descripción del submódulo B',
            'status' => 1,
            'module_id' => 2, // Asegúrate de ajustar el valor según el ID correspondiente al módulo asociado
        ]);
    }
}
