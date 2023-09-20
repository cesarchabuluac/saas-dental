<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inv_purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('supplier_id')->constrained('inv_suppliers');
            $table->foreignId('warehouse_id')->constrained('inv_warehouses');
            $table->foreignId('user_id')->constrained();
            $table->string('reference');
            $table->date('purchase_date');
            $table->string('comments')->nullable();
            $table->enum('status', ['received', 'pending', 'ordered', 'paid', 'partial', 'due'])->default('pending');
            $table->decimal('subtotal', 10, 2)->default(0.00);
            $table->decimal('tax', 10, 2)->default(0.00);
            $table->decimal('discount', 10, 2)->default(0.00);
            $table->decimal('shipping', 10, 2)->default(0.00);            
            $table->decimal('total', 10, 2)->default(0.00);         
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
        Schema::dropIfExists('inv_purchases');
    }
}
