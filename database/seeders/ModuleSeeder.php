<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Module::create([
            'name' => 'Módulo A',
            'icon' => 'icono_a',
            'description' => 'Descripción del módulo A',
            'status' => 1,
        ]);

        Module::create([
            'name' => 'Módulo B',
            'icon' => 'icono_b',
            'description' => 'Descripción del módulo B',
            'status' => 1,
        ]);
    }
}
