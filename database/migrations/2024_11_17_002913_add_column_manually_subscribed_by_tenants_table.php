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
        // Schema::table('tenants', function (Blueprint $table) {
        //     $table->foreignId('manually_subscribed_by')->nullable()->after('trial_ends_at')->constrained('users');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::table('tenants', function (Blueprint $table) {
        //     $table->dropColumn('manually_subscribed_by');
        // });
    }
};
