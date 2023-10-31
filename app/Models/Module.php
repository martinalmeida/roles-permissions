<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SubModule;


class Module extends Model
{
    use HasFactory;

    protected $table = 'modules';

    protected $fillable = [
        'id',
        'name',
        'icon',
        'description',
        'status'
    ];

    public function moduleSubmodule()
    {
        return $this->hasMany(SubModule::class, 'id', 'module_id')->select('module_id', 'description');
    }
}