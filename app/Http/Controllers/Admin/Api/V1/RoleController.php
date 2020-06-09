<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RoleStoreForm;
use App\Http\Requests\Api\RoleUpdateForm;
use App\Transformers\RoleTransformer;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;

class RoleController extends ApiController
{
    protected $transformer = RoleTransformer::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::latest('created_at')->when(request('sort'), function ($query) {
            return $query->orderBy(request('sort'), request('sort_direction', 'asc'));
        })
            ->when(request('search'), function ($query) {
                $q = request('search');
                return $query->where('roles.name', 'like', "%{$q}%");
            })->paginate();

        return $this->transform($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  RoleStoreForm  $form
     *
     * @return \Illuminate\Http\Response
     */
    public function store(RoleStoreForm $form)
    {
        $role = $form->save();
        $isSuccess = !!$role;

        if (!!$role) {
            return response()->success([
                'message' => 'The role and permissions has been successfully saved.',
                'role'    => $this->transform($role)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \Spatie\Permission\Models\Role  $role
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Role::where('can_edit', true)->find($id);

        if (!$role) {
            abort(404, "No role has been found.");
        }

        return $this->transform($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  RoleUpdateForm  $form
     * @param  \Spatie\Permission\Models\Role  $role
     *
     * @return \Illuminate\Http\Response
     */
    public function update(RoleUpdateForm $form, Role $role)
    {
        $role = $form->save($role);

        if (!!$role) {
            return response()->success([
                'message' => 'The role and permissions has been successfully updated.',
                'role'    => $this->transform($role)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Spatie\Permission\Models\Role  $role
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        if ($role->can_delete && $role->delete()) {
            return response()->success("The role {$role->name} has been successfully deleted.");
        }

        return response()->failed('Operation has failed.');
    }
}
