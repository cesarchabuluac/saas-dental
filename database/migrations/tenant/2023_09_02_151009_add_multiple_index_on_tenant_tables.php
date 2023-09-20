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
        Schema::table('users', function (Blueprint $table) {
            $table->index('id');
        });

        Schema::table('appointments', function (Blueprint $table) {
            $table->index('user_id');
            $table->index('date');
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->index('payment_date');
            $table->index('check_paid');
        });

        Schema::table('action_payments', function (Blueprint $table) {
            $table->index('payment_id');
            $table->index('professional_id');
            $table->index('payment_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex('id');
        });

        Schema::table('appointments', function (Blueprint $table) {
            $table->dropIndex('user_id');
            $table->dropIndex('date');
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->dropIndex('payment_date');
            $table->dropIndex('check_paid');
        });

        Schema::table('action_payments', function (Blueprint $table) {
            $table->dropIndex('payment_id');
            $table->dropIndex('professional_id ');
            $table->dropIndex('payment_date');
        });
    }
};
