<?php

namespace App\Http\Requests\Api;

use App\Role;
use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\Rule;

/**
 * Class UserUpdateForm
 *
 * @package App\Http\Requests
 */
class UserUpdateForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'            => 'required',
            'email'           => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($this->route('user')),
            ],
            'password'        => 'nullable|min:8',
            'contact_no'      => 'nullable',
            'roles.data'      => 'required|array|min:1',
            'roles.data.*.id' => 'nullable|exists:roles,id',
        ];
    }

    /**
     * @param  User  $user
     */
    public function save(User $user)
    {
        try {

            \DB::beginTransaction();

            $user->fill($this->only(['contact_no', 'email', 'contact_no']));

            if ($this->input('password')) {
                $user->password = bcrypt($this->input('password'));
            }

            $roles = new Collection();
            // create new roles
            foreach ($this->input('roles.data') as $key => $data) {

                $role = \Spatie\Permission\Models\Role::firstOrCreate(['name' => ucwords($data['name'])],
                    array_merge(Arr::except($data, ['id']),
                        ['can_delete' => true, 'is_super' => false, 'guard_name' => 'web']));

                $roles->push($role);

            }

            $user->save();

            $user->syncRoles($roles);

            \DB::commit();

            return $user;

        } catch (\Exception $exception) {
            \Log::debug($exception->getMessage());
            \Log::debug($exception->getTraceAsString());
            \DB::rollback();

        }
    }
}
