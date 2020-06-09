<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ProjectCategoryStoreForm;
use App\Http\Requests\Api\ProjectCategoryUpdateForm;
use App\ProjectCategory;
use App\Transformers\ProjectCategoryTransformer;
use App\Transformers\ProjectTransformer;
use Illuminate\Http\Request;

class ProjectCategoryController extends ApiController
{
    protected $transformer = ProjectCategoryTransformer::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ProjectCategory::when(request('sort'), function ($query) {
            return $query->orderBy(request('sort'), request('sort_direction', 'asc'));
        })->when(request('search'), function ($query) {
            $q = request('search');
            return $query->where('name', 'like', "%{$q}%")
                ->orWhere('description', 'like', "%{$q}%");
        })
            ->paginate(request('perPage'), ['project_categories.*']);

        return $this->transform($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ProjectCategoryStoreForm  $form
     *
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectCategoryStoreForm $form)
    {
        $category = $form->save();

        if (!!$category) {
            return response()->success([
                'message'  => 'The category has been successfully created.',
                'category' => $this->transform($category)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProjectCategory  $category
     *
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectCategory $category)
    {
        return $this->transform($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProjectCategoryUpdateForm  $form
     * @param  \App\ProjectCategory  $category
     *
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectCategoryUpdateForm $form, ProjectCategory $category)
    {
        $category = $form->save($category);

        if (!!$category) {
            return response()->success([
                'message'  => 'The category has been successfully updated.',
                'category' => $this->transform($category)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProjectCategory  $category
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectCategory $category)
    {
        if ($category->delete()) {
            return response()->success("The category {$category->name} has been successfully deleted.");
        }

        return response()->failed('Operation has failed.');
    }
}
