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
            $table->increments('id');
            $table->unsignedInteger('map_region_id');
            $table->unsignedInteger('marker_name_id');
            $table->float('x');
            $table->float('y');
            $table->float('z');
            $table->string('source');
            $table->unsignedInteger('marker_type_id');
            $table->unsignedInteger('marker_category_id');
            $table->unsignedInteger('marker_sub_category_id');
            $table->timestamps();
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
