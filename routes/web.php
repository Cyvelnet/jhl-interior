<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', 'HomePageController@index');/*
Route::view('/home', 'home');*/
Route::view('/about', 'about')->name('about');
Route::view('/culture', 'culture')->name('culture');;
Route::view('/mission', 'mission')->name('mission');;/*
Route::view('/chart', 'chart');*/
Route::view('/services', 'services')->name('services');;/*
Route::view('/info', 'info');*/
Route::view('/our-business-nature', 'nature')->name('business-nature');/*
Route::view('/core', 'core');*/
Route::view('/contact', 'contact')->name('contact');;

Route::resource('projects', 'ProjectController')->only(['show', 'index']);

Auth::routes(['register' => false, 'reset' => false, 'confirm' => false, 'verify' => false]);
/*
Route::get('/home', 'HomeController@index')->name('home');*/
