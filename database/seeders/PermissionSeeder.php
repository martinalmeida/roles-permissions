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
            'sub_module_id' => 1,
            'r' => 1,
            'w' => 1,
            'u' => 1,
            'd' => 1,
        ]);

        Permission::create([
            'rol_id' => 1,
            'sub_module_id' => 2,
            'r' => 1,
            'w' => 1,
            'u' => 1,
            'd' => 1,
        ]);

        Permission::create([
            'rol_id' => 1,
            'sub_module_id' => 3,
            'r' => 1,
            'w' => 0,
            'u' => 1,
            'd' => 0,
        ]);

        Permission::create([
            'rol_id' => 1,
            'sub_module_id' => 4,
            'r' => 1,
            'w' => 0,
            'u' => 1,
            'd' => 0,
        ]);
    }
}