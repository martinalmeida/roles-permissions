<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id('nit');
            $table->integer('digito');
            $table->string('nombre');
            $table->string('representante');
            $table->bigInteger('telefono');
            $table->string('direccion');
            $table->string('email')->unique();
            $table->string('pais')->default('COLOMBIA');
            $table->string('ciudad')->nullable();
            $table->bigInteger('contacto')->nullable();
            $table->string('email_tec')->nullable();
            $table->string('email_logis')->nullable();
            $table->string('content_type')->nullable();
            $table->longText('base_64')->nullable();
            $table->smallInteger('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};