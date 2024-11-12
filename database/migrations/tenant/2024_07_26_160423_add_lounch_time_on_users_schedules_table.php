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
        Schema::table('user_schedules', function (Blueprint $table) {
            // $table->time('lunch_start_time')->nullable()->after('start_time');
            // $table->time('lunch_end_time')->nullable()->after('lunch_start_time');
            $table->json('breaks')->nullable()->after('end_time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_schedules', function (Blueprint $table) {
            // $table->dropColumn('lunch_start_time');
            // $table->dropColumn('lunch_end_time');
            $table->dropColumn('breaks');
        });
    }
};
