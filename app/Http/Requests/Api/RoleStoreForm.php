<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

/**
 * Class RoleStoreForm
 *
 * @package App\Http\Requests\Api
 */
class RoleStoreForm extends FormRequest
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
            'name'             => ['required', Rule::unique('roles', 'name')],
            'permissions.data' => 'required|array|min:1',
        ];
    }

    public function save()
    {
        try {

            \DB::beginTransaction();

            $role = Role::create([
                'name'       => $this->input('name'),
                'can_edit'   => true,
                'guard_name' => 'api',
            ]);

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
