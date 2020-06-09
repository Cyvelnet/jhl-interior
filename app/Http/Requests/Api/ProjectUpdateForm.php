<?php

namespace App\Http\Requests\Api;

use App\Project;
use Illuminate\Foundation\Http\FormRequest;

class ProjectUpdateForm extends FormRequest
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

            'name'               => 'required',
            'category.id'        => 'required|exists:project_categories,id',
            'client_name'        => 'required',
            'description'        => 'required',
            'value'              => 'nullable|numeric',
            'date'               => 'nullable|date',
            'images.data'        => 'required|array',
            'images.data.*.file' => 'required',
            'images.data.*.url'  => 'required',
        ];
    }

    public function save(Project $project)
    {
        try {

            \DB::beginTransaction();

            $project->update($this->except([
                    'category', 'images',
                ]) + ['project_categories_id' => $this->input('category.id')]);

            // remove unused images
            $project->images()->whereNotIn('id', array_filter($this->input('images.data.*.id')))->delete();

            // insert new image
            $newImages = array_filter($this->input('images.data', []), function ($row) {
                return !isset($row['id']);
            });

            foreach ($newImages as $image) {
                $filePath = storage_path('app/public/projects/'.$image['file']);
                $project->images()->create([
                    'name'     => $image['file'],
                    'ext'      => $image['ext'],
                    'filename' => $image['filename'],
                    'title'    => pathinfo($filePath, PATHINFO_BASENAME),
                    'path'     => '/projects/'.$image['file'],
                ]);
            }

            // update existing image
            $oldImages = array_filter($this->input('images.data', []), function ($row) {
                return isset($row['id']);
            });

            foreach ($oldImages as $image) {

                $filePath = storage_path('app/public/projects/'.$image['file']);

                $project->images()->find($image['id'])->update([
                    'name'     => $image['file'],
                    'title'    => pathinfo($filePath, PATHINFO_BASENAME),
                    'path'     => '/projects/'.$image['file'],
                    'ext'      => $image['ext'],
                    'filename' => $image['filename'],
                ]);
            }

            \DB::commit();

            return $project;

        } catch (\Exception $exception) {
            \Log::debug($exception->getMessage());
            \Log::debug($exception->getTraceAsString());
            \DB::rollback();
            return false;

        }
    }

    public function messages()
    {
        return [
            'images.data.required' => 'You must upload at least one image to project gallery.',
        ];
    }
}
