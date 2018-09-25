<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkerCategoryMarkerTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marker_category_marker_type', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->unsignedInteger('marker_type_id');
            $table->unsignedInteger('marker_category_id');
            $table->timestamps();

            // $table->foreign('marker_id')->references('id')->on('markers');
            // $table->foreign('category_id')->references('id')->on('marker_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marker_category_marker_type');
    }
}
