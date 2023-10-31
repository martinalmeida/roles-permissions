<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Rol;


class Permission extends Model
{
    use HasFactory;

    protected $table = 'permissions';

    protected $fillable = [
        'id',
        'rol_id',
        'sub_module_id',
        'r',
        'w',
        'u',
        'd',
    ];

    public function permissionsRol()
    {
        return $this->belongsTo(Rol::class, 'rol_id', 'id')->select('id', 'name');
    }
}