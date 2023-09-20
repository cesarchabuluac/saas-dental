<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('action_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('payment_id')->constrained();
			$table->foreignId('budget_action_id')->constrained();
            $table->unsignedInteger('user_id')->nullable();
			$table->unsignedInteger('professional_id')->nullable();
            $table->decimal('amount', 18, 2)->default(0);
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
        Schema::dropIfExists('action_payments');
    }
}
