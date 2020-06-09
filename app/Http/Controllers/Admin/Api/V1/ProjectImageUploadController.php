<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Class ProjectImageUploadController
 *
 * @package App\Http\Controllers\Admin\Api\V1
 */
class ProjectImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        $this->validate($request, ['files' => 'required|image']);

        try {
            $file = $request->file('files')->store('public/projects');

            $name = pathinfo(storage_path($file), PATHINFO_BASENAME);
            $fileName = pathinfo(storage_path($file), PATHINFO_FILENAME);
            $ext = pathinfo(storage_path($file), PATHINFO_EXTENSION);

            \Image::make(storage_path("app/{$file}"))->fit(645, 430)->save(storage_path("app/public/projects/{$fileName}_cover.{$ext}"));

            return response([
                'success'   => true,
                'file'      => $name,
                'filename'  => $fileName,
                'ext'       => $ext,
                'url'       => url(\Storage::url($file)),
                'cover_url' => url(\Storage::url("projects/{$fileName}_cover.{$ext}")),
            ]);
        } catch (\Exception $e) {
            return response([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }
}
