<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AppController;

Route::prefix('auth')->group(function () {
    Route::post('login', [AppController::class, 'login']);
    Route::post('register', [AppController::class, 'register']);
    Route::post('logout', [AppController::class, 'logout']);
    Route::get('init', [AppController::class, 'init']);
});

Route::prefix('user')->group(function () {
    Route::post('update', [UserController::class, 'update']);
});

// Route::resource('users', UsersController::class);

Route::get('/', function () {
    return view('app');
});

Route::any('/{any}', function () {
    return view('app');
})->where('any', '.*');



