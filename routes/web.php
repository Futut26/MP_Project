<?php

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::prefix('rumah-baru')->group(function () {
    Route::get('/', [HomeController::class, 'RumahBaru'])->name('rumah-baru');
    Route::get('/detail/{id}', [HomeController::class, 'DetailRumahBaru'])->name('detail-rumah-baru');
});

Route::prefix('order')->group(function () {
    Route::get('/{id}', [OrderController::class, 'index'])->name('pesan-order');
    // Route::get('/detail/{id}/pesan/', [HomeController::class, 'PesanOrder'])->name('pesan-order');
});

// Route::prefix('rumah-sewa')->group(function () {
//     Route::get('/', [HomeController::class, 'RumahSewa'])->name('rumah-sewa');
//     Route::get('/detail/{id}', [HomeController::class, 'DetailRumahSewa'])->name('detail-rumah-sewa');
// });

Route::get('/admin', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware('admin')->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
