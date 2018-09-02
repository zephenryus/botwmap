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
}
