<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Status;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


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

    public function userStatus(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status', 'id_state')->select('id_state', 'state');
    }
}