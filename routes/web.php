<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SesionController;


// Route app initialize
Route::get('/', function () {
    return view('app');
})->name('login');

// Routes for login and logout
Route::controller(SesionController::class)->group(function () {
    Route::post('/validated', 'validated');
    Route::get('/dataSesion', 'getAllDataSesion')->middleware('auth');
    Route::get('/logout', 'logout')->middleware('auth');
});

// Routes for vue.js app
Route::get('/{pathMatch}', function () {
    return view('app');
})->where('pathMatch', ".*")->middleware('auth');