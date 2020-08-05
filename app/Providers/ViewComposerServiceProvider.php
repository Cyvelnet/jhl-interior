<?php

namespace App\Providers;

use App\Project;
use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

        view()->composer(['admin.app'], function ($view) {
            $projectCount = Project::count();
            return $view->with('project_count', $projectCount);
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
