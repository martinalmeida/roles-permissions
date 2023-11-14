<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SesionController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Routes for login and logout
Route::controller(SesionController::class)->group(function () {
    Route::post('/login', 'login');
    Route::get('/dataSesion', 'getAllDataSesion');
    Route::get('/refresh', 'refresh');
    Route::get('/logout', 'logout');
});

// Routes for permissions
Route::controller(PermissionController::class)->group(function () {
    Route::get('/getModules', 'getModules');
    Route::get('/getSubModules', 'getSubModules');
});

// Routes for companies
Route::controller(CompanyController::class)->group(function () {
    Route::get('/showCompany', 'show');
    Route::post('/createCompany', 'create');
});

// Routes for roles
Route::controller(RolController::class)->group(function () {
    Route::get('/getRoles', 'getRoles');
    Route::post('/createRole', 'create');
});

// Routes for users
Route::controller(UserController::class)->group(function () {
    Route::get('/getUsers', 'getUsers');
    Route::post('/createUser', 'create');
});