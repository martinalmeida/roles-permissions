<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rol;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::create([
            'name' => 'Administrador',
            'description' => 'Rol para administradores del sistema',
            'status' => 1,
        ]);

        Rol::create([
            'name' => 'Usuario',
            'description' => 'Rol para usuarios del sistema',
            'status' => 1,
        ]);
    }
}