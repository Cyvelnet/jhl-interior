<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ProjectStoreForm;
use App\Http\Requests\Api\ProjectUpdateForm;
use App\Project;
use App\Transformers\ProjectTransformer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * Class ProjectController
 *
 * @package App\Http\Controllers\Admin\Api\V1
 */
class ProjectController extends ApiController
{
    protected $transformer = ProjectTransformer::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Project::with(['category'])
            ->join('project_categories', 'projects.project_categories_id', '=', 'project_categories.id')
            ->when(request('sort'), function ($query) {
                return $query->orderBy(request('sort'), request('sort_direction', 'asc'));
            })
            ->when(request('search'), function ($query) {
                $q = request('search');
                return $query->where('projects.name', 'like', "%{$q}%")
                    ->orWhere('project_categories.name', 'like', "%{$q}%")
                    ->orWhere('client_name', 'like', "%{$q}%")
                    ->orWhere('location', 'like', "%{$q}%");
            })
            ->paginate(request('perPage'), ['projects.*', 'project_categories.name as project_category']);

        return $this->transform($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $form
     *
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectStoreForm $form)
    {
        $project = $form->save();

        if (!!$project) {
            return response()->success([
                'message' => "The project {$project->name} has been successfully created.",
                'project' => $this->transform($project)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return $this->transform($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     *
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectUpdateForm $form, Project $project)
    {
        $project = $form->save($project);

        if (!!$project) {
            return response()->success([
                'message' => "The project {$project->name} has been successfully updated.",
                'project' => $this->transform($project)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {

        if ($project->delete()) {
            return response()->success("The project {$project->name} has been successfully deleted.");
        }

        return response()->failed('Operation has failed.');
    }


}
