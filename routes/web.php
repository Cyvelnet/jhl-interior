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

Route::view('/', 'home');
Route::view('/home', 'home');
Route::view('/about', 'about');
Route::view('/culture', 'culture');
Route::view('/mission', 'mission');
Route::view('/chart', 'chart');
Route::view('/services', 'services');
Route::view('/info', 'info');
Route::view('/nature', 'nature');
Route::view('/core', 'core');
Route::view('/contact', 'contact');
Route::view('/project-view', 'project-view');

Route::view('/projects', "projects");
Route::get('/projects/{name}', "ProjectsController@detail");

Auth::routes(['register' => false, 'reset' => false, 'confirm' => false, 'verify' => false]);

Route::get('/home', 'HomeController@index')->name('home');
