<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('branch_office_id')->constrained();
            $table->foreignId('budget_id')->constrained();
            $table->decimal('amount', 18,2)->default(0);
            $table->string('method', 50);
            $table->integer('has_partials')->nullable();
            $table->integer('divided_on')->nullable();
            $table->unsignedInteger('parent_payment')->nullable();
            $table->unsignedInteger('check_id')->nullable();
            $table->boolean('check_paid')->default(0);
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
        Schema::dropIfExists('payments');
    }
}
