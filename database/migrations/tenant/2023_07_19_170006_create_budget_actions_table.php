<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_actions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('budget_id')->constrained();
            $table->integer('action_id');
            $table->bigInteger('action_group_id')->nullable();
            $table->string('action_name')->nullable();
            $table->string('action_group_name')->nullable();
            $table->decimal('price', 18, 2)->default(0);
            $table->enum('action_type', array('clinical', 'laboratory'))->nullable();
            $table->string('area', 35)->nullable();
            $table->string('status', 35)->nullable();
            $table->decimal('discount', 18, 2)->default(0);
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
        Schema::dropIfExists('budget_actions');
    }
}
