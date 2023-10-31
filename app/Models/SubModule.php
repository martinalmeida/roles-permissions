<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Permission;


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

    public function submodulesPermission()
    {
        return $this->belongsTo(Permission::class, 'id', 'sub_module_id')->select('id', 'r', 'w', 'u', 'd');
    }
}