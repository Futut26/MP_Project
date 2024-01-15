<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('User/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'loginGoogle' => Route::has('login.google'),
    ]);
});

Route::get('/auth/google/callback', [AuthenticatedSessionController::class, 'handleGoogleCallback']);

Route::get('/verify-email', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::prefix('rumah-baru')->group(function () {
    Route::get('/', [HomeController::class, 'RumahBaru'])->name('rumah-baru');
    Route::get('/detail/{id}', [HomeController::class, 'DetailRumahBaru'])->name('detail-rumah-baru');
});

Route::prefix('order')->group(function () {
    Route::get('/{id}', [OrderController::class, 'index'])->name('pesan-order');
    Route::get('/{id}/detail/', [OrderController::class, 'detail'])->name('detail-pesan-order');
});

// Route::prefix('rumah-sewa')->group(function () {
//     Route::get('/', [HomeController::class, 'RumahSewa'])->name('rumah-sewa');
//     Route::get('/detail/{id}', [HomeController::class, 'DetailRumahSewa'])->name('detail-rumah-sewa');
// });

Route::get('/admin', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware('admin')->name('dashboard');

// middleware auth and verified email



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
