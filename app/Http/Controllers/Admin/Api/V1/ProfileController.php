<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileController extends ApiController
{
    public function index(Request $request)
    {
        return $this->transform($request->user(), new UserTransformer());
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $this->validate($request,
            [
                'name'       => 'required',
                'email'      => ['required', 'email', Rule::unique('users', 'email')->ignore($user)],
                'contact_no' => 'nullable',
                'password'   => 'nullable|min:8',
            ]);

        $user->fill($request->except('password'));

        if ($request->input('password')) {

            $user->password = bcrypt($request->input('password'));

        }

        if ($user->save()) {

            return response()->success([
                'message' => 'Your user account information has been updated successfully. Changes are expected to taking effect at your next login.',
            ]);
        }

        return response()->failed('Operation has failed.');

    }
}
