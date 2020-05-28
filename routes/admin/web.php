<?php

Route::get('dashboard', function () {
    dd('dashboard');
})->name('dashboard.index');

Route::get('/', function () {
    return redirect()->route('admin.dashboard.index');
});
