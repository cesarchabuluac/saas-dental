<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
			$table->string('last_name');
			$table->string('mother_last_name')->nullable();
			$table->string('rut')->nullable();
			$table->date('birthday')->nullable();
			$table->string('email', 100)->nullable();
			$table->string('cellphone', 25)->nullable();
			$table->string('phone', 25)->nullable();
			$table->string('address')->nullable();
            $table->text('comments')->nullable();
            $table->boolean('active')->default(true);
            $table->boolean("is_default")->default(0);
            $table->enum('document_type', array('Pasaporte', 'RUT', 'Otro'))->default('RUT');
            $table->decimal('positive_balance', 10,2)->default(0);
            $table->boolean('access_web')->default(false);
            $table->foreignId('user_id')->nullable()->constrained();
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
        Schema::dropIfExists('patients');
    }
}
