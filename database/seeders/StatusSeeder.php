<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Status;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            'id_state' => 0,
            'state' => 'Eliminado',
        ]);

        Status::create([
            'id_state' => 1,
            'state' => 'Activo',
        ]);

        Status::create([
            'id_state' => 2,
            'state' => 'Inactivo',
        ]);
    }
}