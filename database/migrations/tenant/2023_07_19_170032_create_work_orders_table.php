<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('branch_office_id')->constrained();
            $table->foreignId('laboratory_id')->constrained();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->bigInteger('professional_id')->unsigned();
            $table->string('patient',100);
            $table->string('user',100);
            $table->string('professional',100);
            $table->longText('delivery_materials');
			$table->dateTime('application_date')->nullable();
            $table->dateTime('delivery_date')->nullable();
            $table->string('work_todo',50);
            $table->string('colour',100);
            $table->string('area_dental',100);
            $table->longText('clinical_specification')->nullable();
            $table->longText('lab_specification')->nullable();
            $table->enum('status', array('Enviado', 'En proceso', 'Recibido'))->default('En proceso');
            $table->softDeletes();
            $table->timestamps();
            $table->foreign('professional_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_orders');
    }
}
