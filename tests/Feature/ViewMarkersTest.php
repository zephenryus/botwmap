<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ViewMarkersTest extends TestCase {
    use RefreshDatabase;

    /** @test A guest can view all markers
     * Given a guest user
     * And an existing marker
     * When the user view the marker index
     * Then the user should see the marker's name
     */
    function a_guest_can_view_all_markers () {
        $marker = create(\App\Marker::class);
        $this->get(route('markers'))
             ->assertSee($marker->marker_name);
    }

    /** @test Markers can be filtered
     * Given an existing marker of a certain type
     * When the markers are requested by type
     * Then the marker with a certain type should be returned
     * But not markers of different types
     */
    function markers_can_be_filtered () {
        $markerWithCorrectType = create(\App\Marker::class);
        $markerWithIncorrectType = create(\App\Marker::class);
        $this->get(route('markers', [
            'filter' => $markerWithCorrectType->marker_type_id,
        ]))
             ->assertSee($markerWithCorrectType->marker_name)
             ->assertDontSee($markerWithIncorrectType->marker_name);
    }

    /** @test Markers can be filtered with multiple filters
     * Given existing markers of different types
     * When an array of types are requested
     * Then the markers of each type in the array should be returned
     */
    function markers_can_be_filtered_with_multiple_filters () {
        $marker1 = create(\App\Marker::class);
        $marker2 = create(\App\Marker::class);
        $marker3 = create(\App\Marker::class);

        $filter = implode(',', [$marker1->marker_type_id, $marker2->marker_type_id, $marker3->marker_type_id]);

        $this->get(route('markers', ['filter' => $filter]))
             ->assertSee($marker1->marker_name)
             ->assertSee($marker2->marker_name)
             ->assertSee($marker3->marker_name);

    }
}
