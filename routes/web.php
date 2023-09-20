<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\TenantImpersonationController;

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

// Route::group(['middleware' => ['is_verified']], function () {
    Route::get('email/verify/{tenant}', [VerificationController::class, 'verify'])->name('verification.verify');
// });

Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
