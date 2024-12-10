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
            $table->boolean('is_popular')->default(false)->after('description');
            $table->integer('limit_director')->default(0)->comment('0 means unlimited')->after('sort_order');
            $table->integer('limit_doctor')->default(0)->comment('0 means unlimited')->after('sort_order');
            $table->integer('limit_assistant')->default(0)->comment('0 means unlimited')->after('limit_doctor');
            $table->integer('limit_receptionist')->default(0)->comment('0 means unlimited')->after('limit_assistant');
            $table->integer('limit_patient')->default(0)->comment('0 means unlimited')->after('limit_receptionist');
            $table->integer('limit_domains')->default(0)->comment('0 means unlimited')->after('limit_patient');
            $table->integer('limit_purchases')->default(0)->comment('0 means unlimited')->after('limit_domains');
            $table->integer('limit_invoices')->default(0)->comment('0 means unlimited, and here invoice means sales limit, ex: sales->invoice')->after('limit_purchases');
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
            $table->dropColumn('is_popular');
            $table->dropColumn('limit_director');
            $table->dropColumn('limit_doctor');
            $table->dropColumn('limit_assistant');
            $table->dropColumn('limit_receptionist');
            $table->dropColumn('limit_patient');
            $table->dropColumn('limit_domains');
            $table->dropColumn('limit_purchases');
            $table->dropColumn('limit_invoices');
        });
    }
};
