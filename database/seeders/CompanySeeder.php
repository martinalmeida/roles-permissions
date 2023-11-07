<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create([
            'nit' => 1234754,
            'digito' => 1,
            'nombre' => 'Empresa A',
            'representante' => 'Representante A',
            'telefono' => 1234567890,
            'direccion' => 'Dirección A',
            'email' => 'empresaA@example.com',
            'pais' => 'COLOMBIA',
            'ciudad' => 'Ciudad A',
            'contacto' => 9876543210,
            'email_tec' => 'tecnicoA@example.com',
            'email_logis' => 'logisticaA@example.com',
            'image' => null,
            'status' => 1,
        ]);

        Company::create([
            'nit' => 321345,
            'digito' => 6,
            'nombre' => 'Empresa B',
            'representante' => 'Representante B',
            'telefono' => 9876543210,
            'direccion' => 'Dirección B',
            'email' => 'empresaB@example.com',
            'pais' => 'COLOMBIA',
            'ciudad' => 'Ciudad B',
            'contacto' => 1234567890,
            'email_tec' => 'tecnicoB@example.com',
            'email_logis' => 'logisticaB@example.com',
            'image' => null,
            'status' => 1,
        ]);
    }
}