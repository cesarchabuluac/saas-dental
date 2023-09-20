<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdjustmentItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_adjustment_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('adjustment_id')->constrained('inv_adjustments');
            $table->foreignId('medicine_id')->constrained('inv_medicines');
            $table->enum('type', ['addition', 'subtraction'])->default('addition');
            $table->string('name');
            $table->string('sku');
            $table->decimal('quantity', 18, 2)->default(0.00);
            $table->string('comment')->nullable();
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
        Schema::dropIfExists('inv_adjustment_items');
    }
}
