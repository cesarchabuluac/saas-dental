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
        Schema::table('budget_actions', function (Blueprint $table) {
            // Agregar índice a la columna action_id
            $table->index('action_id');

            // Agregar índice a la columna group_id
            $table->index('action_group_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('budget_actions', function (Blueprint $table) {
            $table->dropIndex(['action_id']);
            $table->dropIndex(['action_group_id']);
        });
    }
};
