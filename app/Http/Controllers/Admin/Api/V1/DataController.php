<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\ProjectCategory;
use App\Role;
use App\Transformers\ProjectCategoryTransformer;
use App\Transformers\RoleTransformer;
use Illuminate\Http\Request;

class DataController extends ApiController
{
    public function categories(Request $request)
    {
        $q = $request->input('query');

        $categories = ProjectCategory::where('name', 'like', "%{$q}%")->get();

        return $this->transform($categories, new ProjectCategoryTransformer());

    }

    public function roles(Request $request)
    {
        $q = $request->input('query');

        $roles = \Spatie\Permission\Models\Role::where('name', 'like', "%{$q}%")->get();

        return $this->transform($roles, new RoleTransformer());

    }
}
