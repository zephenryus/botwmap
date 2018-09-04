<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkerTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marker_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('marker_type_name');
            $table->string('marker_type_slug');
            $table->string('icon')->default('images/markers/default.png');
            $table->text('marker_type_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marker_types');
    }
}
