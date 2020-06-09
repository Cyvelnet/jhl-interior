<?php

namespace App\Http\Requests\Api;

use App\ProjectCategory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProjectCategoryUpdateForm extends FormRequest
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
            'name'        => ['required', Rule::unique('project_categories', 'name')->ignore($this->route('category'))],
            'description' => 'nullable',
            'is_enabled'  => 'nullable',
        ];
    }

    public function save(ProjectCategory $category)
    {
        $category->fill($this->validated())->save();

        $category->refresh();

        return $category;
    }

    public function attributes()
    {
        return [
            'name' => 'Category',
        ];
    }


}
