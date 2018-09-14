<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MarkersTest extends TestCase {
    use RefreshDatabase;

    /** @test It belongs to a map region */
    function it_belongs_to_a_map_region () {
        $marker = create(\App\Marker::class);
        $this->assertInstanceOf(\App\MapRegion::class, $marker->mapRegion);
    }

    /** @test It has a type */
    function it_has_a_type () {
        $marker = create(\App\Marker::class);
        $this->assertInstanceOf(\App\MarkerType::class, $marker->type);
    }

    /** @test It has a category */
    function it_has_a_category () {
        $marker = create(\App\Marker::class);
        $this->assertInstanceOf(\App\MarkerCategory::class, $marker->category);
    }

    /** @test It has a sub-category */
    function it_has_a_sub_category () {
        $marker = create(\App\Marker::class);
        $this->assertInstanceOf(\App\MarkerCategory::class, $marker->subCategory);
    }
}
