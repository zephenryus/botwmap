<?php

namespace App\Http\Controllers;

use App\Marker;
use Illuminate\Http\Request;

class MarkersController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index () {
        if (request()->input('types')) {
            $types = explode(',', request()->input('types'));

            return Marker::whereIn('marker_type_id', $types)
                         ->orderBy('marker_name', 'desc')
                         ->get();
        }
        // else {
        //     $defaultFilters = [
        //         2130,
        //         772,
        //     ];
        //
        //     return Marker::whereIn('marker_type_id', $defaultFilters)
        //                  ->orderBy('marker_name', 'desc')
        //                  ->with('type')
        //                  ->get();
        // }

        return [];
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
     * @param  \App\Marker $location
     *
     * @return \Illuminate\Http\Response
     */
    public function show (Marker $location) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Marker $location
     *
     * @return \Illuminate\Http\Response
     */
    public function edit (Marker $location) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Marker              $location
     *
     * @return \Illuminate\Http\Response
     */
    public function update (Request $request, Marker $location) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Marker $location
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy (Marker $location) {
        //
    }
}
