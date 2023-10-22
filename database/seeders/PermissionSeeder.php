<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
            'rol_id' => 1,
            // Ajusta el valor según el ID correspondiente al rol
            'sub_module_id' => 1,
            // Ajusta el valor según el ID correspondiente al submódulo
            'r' => 1,
            // Permisos de lectura
            'w' => 1,
            // Permisos de escritura
            'u' => 1,
            // Permisos de actualización
            'd' => 1,
            // Permisos de eliminación
        ]);

        Permission::create([
            'rol_id' => 1,
            // Ajusta el valor según el ID correspondiente al rol
            'sub_module_id' => 2,
            // Ajusta el valor según el ID correspondiente al submódulo
            'r' => 1,
            // Permisos de lectura
            'w' => 1,
            // Permisos de escritura
            'u' => 1,
            // Permisos de actualización
            'd' => 1,
            // Permisos de eliminación
        ]);

        Permission::create([
            'rol_id' => 2,
            // Ajusta el valor según el ID correspondiente al rol
            'sub_module_id' => 1,
            // Ajusta el valor según el ID correspondiente al submódulo
            'r' => 1,
            // Permisos de lectura
            'w' => 0,
            // Sin permisos de escritura
            'u' => 1,
            // Permisos de actualización
            'd' => 0,
            // Sin permisos de eliminación
        ]);

        Permission::create([
            'rol_id' => 2,
            // Ajusta el valor según el ID correspondiente al rol
            'sub_module_id' => 2,
            // Ajusta el valor según el ID correspondiente al submódulo
            'r' => 1,
            // Permisos de lectura
            'w' => 0,
            // Sin permisos de escritura
            'u' => 1,
            // Permisos de actualización
            'd' => 0,
            // Sin permisos de eliminación
        ]);
    }
}