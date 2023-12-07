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
    Route::post('/logout', 'logout');
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
    Route::put('/updateCompany/{id}', 'update');
    Route::delete('/deleteCompany/{id}', 'delete');
});

// Routes for roles
Route::controller(RolController::class)->group(function () {
    Route::get('/showRoles', 'show');
    Route::post('/createRole', 'create');
    Route::put('/updateRole/{id}', 'update');
    Route::delete('/deleteRole/{id}', 'delete');
});

// Routes for users
Route::controller(UserController::class)->group(function () {
    Route::get('/showUsers', 'show');
    Route::post('/createUser', 'create');
    Route::put('/updateUser/{id}', 'update');
    Route::delete('/deleteUser/{id}', 'delete');
});