<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    protected $fillable = [
        'id',
        'digito',
        'nombre',
        'representante',
        'telefono',
        'direccion',
        'email',
        'pais',
        'ciudad',
        'contacto',
        'email_tec',
        'email_logis',
        'content_type',
        'base_64',
        'status'
    ];

    public function companiesUser()
    {
        return $this->hasMany(User::class, 'nit', 'nit')->select('id', 'name');
    }
}