<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientNumbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_numbers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->string('country_calling_code', 4);
            $table->string('country_code', 4);
            $table->string('e164');
            $table->string('format_international');
            $table->string('format_national');
            $table->string('formatted_number');
            $table->boolean('is_valid');
            $table->string('national_number');
            $table->string('phone_number');
            $table->string('type');
            $table->string('uri');
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
        Schema::dropIfExists('patient_numbers');
    }
}
