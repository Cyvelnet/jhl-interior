<?php

namespace App\Http\Controllers;

use App\Project;
use App\ProjectCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HomePageController extends Controller
{
    public function index()
    {

        $projects = Project::published()->take(8)->get()->map(function (Project $project) {
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


        $categories = ProjectCategory::whereHas('projects')->whereIn('id',
            $projects->pluck('project_categories_id')->unique())->take(5)->get();

        return view('home', compact('projects', 'categories'));
    }
}
