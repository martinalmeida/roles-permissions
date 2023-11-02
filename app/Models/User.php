<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Rol;
use App\Models\Status;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'a_paterno',
        'a_materno',
        'telefono',
        'nombrefiscal',
        'direccionfiscal',
        'email',
        'password',
        'content_type',
        'base_64',
        'status',
        'rol_id',
        'nit'
    ];

    public function userRol(): BelongsTo
    {
        return $this->belongsTo(Rol::class, 'rol_id', 'id')->select('id', 'name');
    }

    public function userStatus(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status', 'id_state')->select('id_state', 'state');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}