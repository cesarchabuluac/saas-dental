<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
			$table->foreignId('branch_office_id')->constrained();
			$table->foreignId('user_id')->constrained();
			$table->date('date');
            $table->string('reference');
            $table->decimal('amount', 18, 2);
            $table->string('note');
			$table->boolean('is_closed')->default(0);
            $table->unsignedInteger('closed_by')->nullable();
            $table->dateTime('closed_at')->nullable();
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
        Schema::dropIfExists('expenses');
    }
}
