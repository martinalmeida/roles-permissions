<?php

use Illuminate\Support\Facades\Route;


// Route app initialize
Route::get('/', function () {
    return view('app');
})->name('login');

// Routes for vue.js app
Route::get('/{pathMatch}', function () {
    return view('app');
})->where('pathMatch', ".*")->middleware('auth:api');