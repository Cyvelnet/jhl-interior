<?php

namespace App\Http\Requests\Api;

use App\ProjectCategory;
use Illuminate\Foundation\Http\FormRequest;

class ProjectCategoryStoreForm extends FormRequest
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
            'name'        => 'required|unique:project_categories,name',
            'description' => 'nullable',
            'is_enabled'  => 'nullable',
        ];
    }

    public function save()
    {
        return ProjectCategory::create($this->validated());
    }

    public function attributes()
    {
        return [
            'name' => 'Category',
        ];
    }
}
