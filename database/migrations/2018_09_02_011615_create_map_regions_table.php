<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMapRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('map_regions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('region_name');
            $table->float('north_boundary');
            $table->float('east_boundary');
            $table->float('south_boundary');
            $table->float('west_boundary');
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
        Schema::dropIfExists('map_regions');
    }
}
