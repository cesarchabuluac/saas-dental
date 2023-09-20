<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDocumentTypeAndPhoneCountryToTableLaboratories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('laboratories', function (Blueprint $table) {
            $table->enum('document_type', array('Pasaporte', 'RUT', 'Otro'))->default('RUT')->after('name');
            $table->string('phone_country', 5)->default('CL')->after('rut');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('laboratories', function (Blueprint $table) {
            $table->dropColumn('document_type');
            $table->dropColumn('phone_country');
        });
    }
}
