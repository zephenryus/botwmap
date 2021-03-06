<?php

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
    return view('app');
});

Route::get('/markers', 'MarkersController@index')->name('markers');
Route::get('/markers/{marker}', 'MarkersController@show');
Route::get('/marker-types', 'MarkerTypesController@index')->name('marker-types');
Route::get('marker-categories', 'MarkerCategoriesController@index');
Route::get('marker-categories/{marker-category}', 'MarkerCategoriesController@show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
