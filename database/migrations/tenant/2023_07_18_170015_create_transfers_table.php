<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_transfers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('from_warehouse_id')->constrained('inv_warehouses');
            $table->foreignId('to_warehouse_id')->constrained('inv_warehouses');
            $table->string('reference')->nullable();
            $table->date('transfer_date');
            $table->enum('status', ['pending', 'in_transit', 'completed'])->default('pending');
            $table->string('note')->nullable();
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
        Schema::dropIfExists('inv_transfers');
    }
}
