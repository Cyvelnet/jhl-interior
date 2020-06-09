<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UserStoreForm;
use App\Http\Requests\Api\UserUpdateForm;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * Class UserController
 *
 * @package App\Http\Controllers\Admin\Api\V1
 */
class UserController extends ApiController
{
    protected $transformer = UserTransformer::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = User::join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
            ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
            ->when(request('sort'), function ($query) {
                return $query->orderBy(request('sort'), request('sort_direction', 'asc'));
            })->when(request('search'), function ($query) {
                $q = request('search');
                return $query->where('users.name', 'like', "%{$q}%")
                    ->orWhere('users.email', 'like', "%{$q}%")
                    ->orWhere('users.contact_no', 'like', "%{$q}%");
            })->groupBy('users.id')->paginate(null, ['users.*', 'roles.name as role']);

        return $this->transform($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserStoreForm  $form
     *
     * @return \Illuminate\Http\Response
     */
    public function store(UserStoreForm $form)
    {
        $user = $form->save();

        if (!!$user) {
            return response()->success([
                'message' => 'The user has been successfully created.', 'user' => $this->transform($user)->getArray(),
            ]);
        }

        return response()->failed(['message' => 'Operation has failed.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     *
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $this->transform($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateForm $form, User $user)
    {
        $user = $form->save($user);

        if (!!$user) {
            return response()->success([
                'message' => 'The user has been successfully updated.', 'user' => $this->transform($user)->getArray(),
            ]);
        }

        return response()->failed('Operation has failed.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if ($user->delete()) {
            return response()->success('The user has been successfully deleted.');
        }

        return response()->failed('Operation has failed.');
    }
}
