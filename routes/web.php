<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::post('set-locale', [\App\Http\Controllers\LocalizationController::class, 'setLocale'])->name('set-locale');

Route::get('/', [HomeController::class, 'index']);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
