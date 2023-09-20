<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('branch_office_id')->constrained();
			$table->dateTime('date');
			$table->text('intern_observation')->nullable();
			$table->string('patient_name')->nullable();
			$table->string('patient_phone')->nullable();
			$table->string('patient_rut')->nullable();
			$table->string('patient_email')->nullable();			
			$table->string('state')->nullable();
            $table->integer('duration')->nullable();
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
        Schema::dropIfExists('appointments');
    }
}
