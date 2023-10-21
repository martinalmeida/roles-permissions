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
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rol_id')->nullable();
            $table->unsignedBigInteger('sub_module_id')->nullable();
            $table->smallInteger('r')->default(0);
            $table->smallInteger('w')->default(0);
            $table->smallInteger('u')->default(0);
            $table->smallInteger('d')->default(0);
            $table->foreign('rol_id')
                ->references('id')->on('roles')
                ->onDelete('set null');
            $table->foreign('sub_module_id')
                ->references('id')->on('sub_modules')
                ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permissions');
    }
};