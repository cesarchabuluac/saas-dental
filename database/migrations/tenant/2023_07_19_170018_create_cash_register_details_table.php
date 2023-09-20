<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCashRegisterDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cash_register_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cash_register_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->bigInteger('professional_id')->unsigned()->nullable();
            $table->bigInteger('relation_id')->unsigned();
            $table->enum('origin', ['payment', 'expense']);
            $table->enum('type', ['clinic','laboratory']);
            $table->softDeletes();
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
        Schema::dropIfExists('cash_register_details');
    }
}
