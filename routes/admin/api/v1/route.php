<?php

Route::get('check-permissions', 'CheckPermissionController');


Route::get('categories', 'UserController@index')->name('categories.index')->middleware(['can:categories.read']);
Route::get('categories/{category}',
    'UserController@show')->name('categories.show')->middleware(['can:categories.read']);
Route::post('categories', 'UserController@store')->name('categories.store')->middleware(['can:categories.create']);
Route::patch('categories/{category}',
    'UserController@update')->name('categories.update')->middleware(['can:categories.update']);
Route::delete('categories/{category}',
    'UserController@destroy')->name('categories.destroy')->middleware(['can:categories.delete']);

Route::resource('categories', 'ProjectCategoryController');

Route::get('users', 'UserController@index')->name('users.index')->middleware(['can:users.read']);
Route::get('users/{user}', 'UserController@show')->name('users.show')->middleware(['can:users.read']);
Route::post('users', 'UserController@store')->name('users.store')->middleware(['can:users.create']);
Route::patch('users/{user}', 'UserController@update')->name('users.update')->middleware(['can:users.update']);
Route::delete('users/{user}', 'UserController@destroy')->name('users.destroy')->middleware(['can:users.delete']);

Route::get('roles', 'RoleController@index')->name('roles.index')->middleware(['can:roles.read']);
Route::get('roles/{role}', 'RoleController@show')->name('roles.show')->middleware(['can:roles.read']);
Route::post('roles', 'RoleController@store')->name('roles.store')->middleware(['can:roles.create']);
Route::patch('roles/{role}', 'RoleController@update')->name('roles.update')->middleware(['can:roles.update']);
Route::delete('roles/{role}', 'RoleController@destroy')->name('roles.destroy')->middleware(['can:roles.delete']);

Route::get('projects/statistics', 'ProjectStatisticController');

Route::post('projects/images/upload', 'ProjectImageUploadController@upload');
Route::patch('projects/images/edit', 'ProjectImageEditController');

Route::patch('projects/{project}/toggle-publish',
    'ProjectTogglePublishController')->middleware(['can:projects.update']);

Route::get('projects', 'ProjectController@index')->name('projects.index')->middleware(['can:projects.read']);
Route::get('projects/{project}', 'ProjectController@show')->name('projects.show')->middleware(['can:projects.read']);
Route::post('projects', 'ProjectController@store')->name('projects.store')->middleware(['can:projects.create']);
Route::patch('projects/{project}',
    'ProjectController@update')->name('projects.update')->middleware(['can:projects.update']);
Route::put('projects/{project}',
    'ProjectController@update')->name('projects.update')->middleware(['can:projects.update']);
Route::delete('projects/{project}',
    'ProjectController@destroy')->name('projects.destroy')->middleware(['can:projects.delete']);

Route::get('data/categories', 'DataController@categories');
Route::get('data/roles', 'DataController@roles');

Route::get('acls', 'ACLController@index');

Route::get('my-profile', 'ProfileController@index');
Route::patch('my-profile', 'ProfileController@update');
Route::post('my-profile', 'ProfileController@update');

