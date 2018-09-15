<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('item_game_name')->unique();
            $table->unsignedInteger('item_type_id')->default(1);
            $table->string('item_icon')->default('images/icons/items/NoImage.png');
            $table->string('item_name')->default('');
            $table->text('item_description')->nullable();
            $table->unsignedSmallInteger('sale_price')->default(0);
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
        Schema::dropIfExists('items');
    }
}
