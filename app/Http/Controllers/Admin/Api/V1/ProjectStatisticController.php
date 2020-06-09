<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\Controller;
use App\Project;
use Illuminate\Http\Request;

class ProjectStatisticController extends Controller
{
    public function __invoke()
    {
        $projects = Project::get(['name', 'progress', 'is_published']);

        $total = $projects->count();

        $published = $projects->filter(function ($project) {
            return $project->is_published === true;
        })->count();

        $completed = $projects->filter(function ($project) {
            return $project->progress === Project::PROJECT_PROGRESS_COMPLETED;
        })->count();

        $ongoing = $projects->filter(function ($project) {
            return $project->progress === Project::PROJECT_PROGRESS_ONGOING;
        })->count();


        return response([
            'total'             => $total,
            'ongoing'           => $ongoing,
            'ongoing_percent'   => ($ongoing / $total) * 100,
            'completed'         => $completed,
            'completed_percent' => ($completed / $total) * 100,
            'published'         => $published,
            'published_percent' => ($published / $total) * 100,
        ]);
    }
}
