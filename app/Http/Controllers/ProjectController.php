<?php

namespace App\Http\Controllers;

use App\Project;
use App\ProjectCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * Class ProjectController
 *
 * @package App\Http\Controllers
 */
class ProjectController extends Controller
{

    /*
    Route::view('/projects', "projects");
    Route::get('/projects/{name}', "ProjectController@detail");*/


    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $projects = Project::published()->get()->map(function (Project $project) {
            $class = Str::snake($project->category->name);

            if ($project->is_new) {
                $class .= ' new';
            }

            if ($project->progress === Project::PROJECT_PROGRESS_COMPLETED) {
                $class .= ' completed';
            }

            if ($project->progress === Project::PROJECT_PROGRESS_ONGOING) {
                $class .= ' on-going';
            }

            $project->css_class = $class;
            return $project;
        });

        $categories = ProjectCategory::whereHas('projects')->take(5)->get();

        $predefinedCategories = $this->getPredefinedProjectCategories($projects);

        return view('projects', compact('projects', 'categories', 'predefinedCategories'));
    }

    public function show(Project $project)
    {
        return view('project-view', compact('project'));
    }
}
