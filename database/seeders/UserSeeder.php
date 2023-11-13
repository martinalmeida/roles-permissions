<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'a_paterno' => 'padmin',
            'a_materno' => 'madmin',
            'telefono' => 3182834018,
            'nombrefiscal' => 'Empresa XYZ',
            'direccionfiscal' => 'Dirección XYZ',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'status' => 1,
            'rol_id' => 1,
            'company_id' => 1,
        ]);

        User::create([
            'name' => 'user',
            'a_paterno' => 'puser',
            'a_materno' => 'muser',
            'telefono' => 3182834018,
            'nombrefiscal' => 'Empresa XYZ',
            'direccionfiscal' => 'Dirección XYZ',
            'email' => 'user@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'status' => 1,
            'rol_id' => 1,
            'company_id' => 2,
        ]);
    }
}