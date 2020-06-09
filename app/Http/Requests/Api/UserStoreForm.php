<?php

namespace App\Http\Requests\Api;

use App\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\Rule;

class UserStoreForm extends FormRequest
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
                'required', 'email',
            ],
            'password'        => 'required|min:8',
            'contact_no'      => 'nullable',
            'roles.data'      => 'required|array|min:1',
            'roles.data.*.id' => 'nullable|exists:roles,id',
        ];
    }

    public function save()
    {

        try {

            \DB::beginTransaction();

            $user = new User($this->only(['name', 'email', 'contact_no']));

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

            $user->refresh();

            return $user;

        } catch (\Exception $exception) {
            \Log::debug($exception->getMessage());
            \Log::debug($exception->getTraceAsString());
            \DB::rollback();
            return false;

        }
    }
}
