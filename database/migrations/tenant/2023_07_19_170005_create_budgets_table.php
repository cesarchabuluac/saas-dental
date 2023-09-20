<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budgets', function(Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('branch_office_id')->constrained();
            $table->boolean('approved')->default(0);
            $table->decimal('subtotal', 18,2)->default(0);
            $table->decimal('discount', 18,2)->default(0);
            $table->decimal('tax', 18,2)->default(0);
            $table->decimal('total', 18,2)->default(0);
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
        Schema::dropIfExists('budgets');
    }
}
