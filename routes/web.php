<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SesionController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UserController;


// Route app initialize
Route::get('/', function () {
    return view('app');
})->name('login');

// Routes for login and logout
// Route::controller(SesionController::class)->group(function () {
//     Route::post('/validated', 'validated');
//     Route::get('/dataSesion', 'getAllDataSesion')->middleware('auth');
//     Route::get('/logout', 'logout')->middleware('auth');
// });

// Routes for permissions
Route::controller(PermissionController::class)->group(function () {
    Route::get('/getModules', 'getModules');
    Route::get('/getSubModules', 'getSubModules');
})->middleware('auth');

// Routes for companies
Route::controller(CompanyController::class)->group(function () {
    Route::get('/getCompanies', 'getCompanies');
    Route::post('/createCompany', 'create');
})->middleware('auth');

// Routes for roles
Route::controller(RolController::class)->group(function () {
    Route::get('/getRoles', 'getRoles');
    Route::post('/createRole', 'create');
})->middleware('auth');

// Routes for users
Route::controller(UserController::class)->group(function () {
    Route::get('/getUsers', 'getUsers');
    Route::post('/createUser', 'create');
})->middleware('auth');

// Routes for vue.js app
Route::get('/{pathMatch}', function () {
    return view('app');
})->where('pathMatch', ".*")->middleware('auth');