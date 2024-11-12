<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 127);            
            $table->string('code', 5);
            $table->string('symbol', 63);
            $table->string('position')->default('left');
            $table->unsignedTinyInteger('decimal_digits')->nullable();
            $table->unsignedTinyInteger('rounding')->nullable();
            $table->boolean('is_default')->default(0);
            $table->string('note')->nullable();
            $table->boolean('status')->nullable()->default(true);
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
        Schema::dropIfExists('currencies');
    }
};
