<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnamnesisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anamnesis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();            
            $table->text('first_reason_consultation')->nullable();
            $table->text('medical_history')->nullable();
            $table->text('allergies')->nullable();
            $table->text('medicines')->nullable();
            $table->text('habits')->nullable();
            $table->text('family_background')->nullable();
            $table->text('others')->nullable();
            $table->boolean('pregnancy')->default(false);
            $table->boolean('coagulation_problems')->default(false);
            $table->boolean('local_analgesic_problems')->default(false);
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
        Schema::dropIfExists('anamnesis');
    }
}
