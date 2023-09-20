<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCloseRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('close_registers', function (Blueprint $table) {
            // $table->id();
            // $table->foreign('user_id')->constrained();
            // $table->enum('type_register', ['clinic','laboratory']);
            // $table->date('closing_date');
            // $table->decimal('income', 18, 2)->default(0);
            // $table->decimal('expenses', 18, 2)->default(0);
            // $table->decimal('balance', 18, 2)->default(0);  
            // $table->decimal('difference', 18, 2)->default(0);
            // $table->string('note')->nullable();
            // $table->softDeletes();            
            // $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('close_registers');
    }
}
