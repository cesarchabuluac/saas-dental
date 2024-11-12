<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->foreignId('currency_id')->nullable()->after('amount')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plans', function (Blueprint $table) {

            // $table->dropConstrainedForeignId('plans_currency_id_foreign');
            // $table->dropIfExists('plans_currency_id_foreign');

            // $table->dropIfExists('currency_id');

            $table->dropForeign(['currency_id']); // Eliminar la restricción de clave foránea
            $table->dropColumn('currency_id');   // Eliminar la columna
        });
    }
};
