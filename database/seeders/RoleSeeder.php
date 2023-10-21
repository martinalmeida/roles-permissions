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
            'name' => 'Admin',
            'description' => 'Rol para administradores',
            'status' => 1,
        ]);

        Rol::create([
            'name' => 'Usuario',
            'description' => 'Rol para usuarios normales',
            'status' => 1,
        ]);
    }
}
