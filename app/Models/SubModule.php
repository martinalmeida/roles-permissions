<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubModule extends Model
{
    use HasFactory;

    protected $table = 'sub_modules';

    protected $fillable = [
        'id',
        'name',
        'page',
        'description',
        'status',
        'module_id'
    ];
}