<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Collection;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function getPredefinedProjectCategories(Collection $projects, $allLabel = 'New Projects')
    {
        $predefinedCategories = ['*' => $allLabel];

        $firstNewProjects = $projects->first(function ($project) {
            return $project->is_new === true;
        });
        $firstCompletedProjects = $projects->first(function ($project) {
            return $project->progress === Project::PROJECT_PROGRESS_COMPLETED;
        });

        if ($firstNewProjects) {
            $predefinedCategories['.new'] = 'New Projects';
        }

        if ($firstCompletedProjects) {
            $predefinedCategories['.completed'] = 'Completed';
        }

        return $predefinedCategories;
    }
}
