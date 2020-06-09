<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

/**
 * Class RoleUpdateForm
 *
 * @package App\Http\Requests\Api
 */
class RoleUpdateForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->route('role')->can_edit;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'             => ['required', Rule::unique('roles', 'name')->ignore($this->route('role')->id)],
            'permissions.data' => 'required|array|min:1',
        ];
    }

    /**
     * @param  Role  $role
     */
    public function save(Role $role)
    {
        try {

            \DB::beginTransaction();

            $role->update($this->only('name'));

            $role->syncPermissions($this->input('permissions.data.*.permission', []));

            \DB::commit();

            return $role;

        } catch (\Exception $exception) {
            \Log::debug($exception->getMessage());
            \Log::debug($exception->getTraceAsString());
            \DB::rollback();
            return false;

        }
    }
}
