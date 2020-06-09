<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\Controller;
use App\Project;
use Illuminate\Http\Request;

/**
 * Class ProjectTogglePublishController
 *
 * @package App\Http\Controllers\Admin\Api\V1
 */
class ProjectTogglePublishController extends Controller
{
    /**
     * @param  Project  $project
     * @param  Request  $request
     */
    public function __invoke(Project $project, Request $request)
    {
        $project->update([
            'is_published' => !$project->is_published,
        ]);

        $status = $project->is_published ? 'published': 'unpublished';

        return response()->success("The project {$project->name} is {$status}.");
    }
}
