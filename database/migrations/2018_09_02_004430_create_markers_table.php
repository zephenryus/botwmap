<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up () {
        Schema::create('markers', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            // $table->unsignedInteger('map_id')->default(1); // For scalability
            $table->unsignedInteger('map_region_id')->default(1);
            $table->unsignedInteger('marker_type_id');
            $table->string('marker_name');
            $table->text('marker_description');
            $table->float('x');
            $table->float('y');
            $table->float('z');
            $table->string('source');
            $table->timestamps();

            // $table->foreign('map_region_id')->references('id')->on('map_regions');
            // $table->foreign('marker_type_id')->references('id')->on('marker_types');

            $table->index('marker_name');
            $table->index('marker_type_id');
            // $table->unique(['marker_type_id', 'marker_name', 'x', 'z']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down () {
        Schema::dropIfExists('markers');
    }
}
