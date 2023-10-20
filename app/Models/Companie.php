<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Companie extends Model
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
        'correo',
        'pais',
        'ciudad',
        'contacto',
        'email_tec',
        'email_logis',
        'content_type',
        'base_64',
        'status'
    ];
}