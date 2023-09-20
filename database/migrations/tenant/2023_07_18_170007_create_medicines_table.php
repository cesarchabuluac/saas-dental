<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_medicines', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('warehouse_id')->constrained('inv_warehouses');
            // $table->foreignId('supplier_id')->constrained('inv_suppliers');
            $table->foreignId('unit_id')->constrained('inv_units');
            $table->foreignId('brand_id')->constrained('inv_brands');
            $table->foreignId('category_id')->constrained('inv_categories');
            $table->foreignId('sub_category_id')->nullable()->constrained('inv_sub_categories');           
            $table->foreignId('user_id')->constrained('users');
            $table->string('name');
            $table->string('sku');
            $table->string('description')->nullable();
            $table->boolean('is_taxable')->default(true);
            $table->boolean('tax', 18, 2)->default(0);
            $table->decimal('price', 18, 2)->default(0);
            $table->boolean('manage_stock')->default(true);
            $table->integer('stock_min')->default(0);
            $table->date('expiration_date')->nullable();
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
        Schema::dropIfExists('inv_medicines');
    }
}
