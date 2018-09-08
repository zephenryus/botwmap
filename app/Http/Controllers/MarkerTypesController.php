<?php

namespace App\Http\Controllers;

use App\MarkerType;
use Illuminate\Http\Request;

class MarkerTypesController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index () {
        return MarkerType::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create () {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store (Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\MarkerType $markerType
     *
     * @return \Illuminate\Http\Response
     */
    public function show (MarkerType $markerType) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MarkerType $markerType
     *
     * @return \Illuminate\Http\Response
     */
    public function edit (MarkerType $markerType) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\MarkerType          $markerType
     *
     * @return \Illuminate\Http\Response
     */
    public function update (Request $request, MarkerType $markerType) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MarkerType $markerType
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy (MarkerType $markerType) {
        //
    }
}
