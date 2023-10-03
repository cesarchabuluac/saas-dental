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
        Schema::create('do_domains', function (Blueprint $table) {
            $table->unsignedBigInteger("id")->primary(); //: 1705124592,            
            $table->string('tenant_id');
            $table->foreign('tenant_id')->references('id')->on('tenants')->onUpdate('cascade')->onDelete('cascade');
            $table->string("type"); //: "A",
            $table->string("name"); //: "www.demo",
            $table->string("data"); //: "64.227.97.30",
            $table->string("priority")->nullable(); //: null,
            $table->string("port")->nullable(); //: null,
            $table->string("ttl")->nullable(); //: 3600,
            $table->string("weight")->nullable(); //: null,
            $table->string("flags")->nullable(); //: null,
            $table->string("tag")->nullable(); //: null
            $table->boolean('is_site_available')->default(false);
            $table->boolean('is_site_ssl')->default(false);
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
        Schema::dropIfExists('do_domains');
    }
};
