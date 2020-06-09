<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('is_published')->default(false);
            $table->enum('progress', [
                \App\Project::PROJECT_PROGRESS_ONGOING, \App\Project::PROJECT_PROGRESS_COMPLETED,
            ])->default(\App\Project::PROJECT_PROGRESS_ONGOING);
            $table->text('highlight')->nullable();
            $table->text('description')->nullable();
            $table->decimal('value')->nullable();
            $table->string('client_name')->nullable();
            $table->string('client_website')->nullable();
            $table->date('date')->nullable();
            $table->string('location')->nullable();
            $table->unsignedBigInteger('project_categories_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('project_categories_id')
                ->references('id')
                ->on('project_categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
