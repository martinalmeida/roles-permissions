<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rol extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $fillable = [
        'id',
        'name',
        'description',
        'status'
    ];

    public function userStatus(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status', 'id_state')->select('id_state', 'state');
    }
}