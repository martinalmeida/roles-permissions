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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('a_paterno');
            $table->string('a_materno');
            $table->integer('telefono');
            $table->string('nombrefiscal')->nullable();
            $table->string('direccionfiscal')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('content_type')->nullable();
            $table->longText('base_64')->nullable();
            $table->smallInteger('status')->default(1);
            $table->unsignedBigInteger('rol_id')->nullable();
            $table->unsignedBigInteger('nit')->nullable();
            $table->foreign('rol_id')
                ->references('id')->on('roles')
                ->onDelete('set null');
            $table->foreign('nit')
                ->references('nit')->on('companies')
                ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};