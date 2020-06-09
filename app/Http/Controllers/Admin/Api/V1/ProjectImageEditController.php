<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProjectImageEditController extends Controller
{
    public function __invoke(Request $request)
    {
        $this->validate($request, $this->getValidationRules());

        // ensure file is exists before perform any photo editing operation

        $file = $request->input('file');
        $storePath = "public/projects/";
        $filePath = "{$storePath}/{$file}";

        $name = pathinfo(storage_path($filePath), PATHINFO_FILENAME);
        $ext = pathinfo(storage_path($filePath), PATHINFO_EXTENSION);

        if ($file && \Storage::exists($filePath)) {

            $image = \Image::make(\Storage::path($filePath));

            if ($request->input('cropData.scaleX') != '1') {
                $image->flip('h');
            }
            if ($request->input('cropData.scaleY') != '1') {
                $image->flip('v');
            }


            $image->crop((int) $request->input('cropData.width'),
                (int) $request->input('cropData.height'),
                (int) $request->input('cropData.x'),
                (int) $request->input('cropData.y'));

            $hash = Str::random(8);

            $newFile = "{$name}_{$hash}.{$ext}";

            $image->save(storage_path("app/{$storePath}/{$newFile}"));

            // make a cover from edited images

            \Image::make(storage_path("app/{$storePath}/{$newFile}"))->fit(645, 430)->save(storage_path("app/public/projects/{$name}_{$hash}_cover.{$ext}"));

            return response()->json([
                'status'        => true,
                'file'          => $file,
                'new_file'      => $newFile,
                'new_filename'      => "{$name}_{$hash}",
                'new_file_url'  => url(\Storage::url("projects/{$newFile}")),
                'new_ext'           => $ext,
                'new_cover_url' => url(\Storage::url("projects/{$name}_{$hash}_cover.{$ext}")),
            ]);
        }

        return response()->json([
            'status'  => false,
            'message' => 'Source file not found.',
        ]);
    }

    private function getValidationRules()
    {
        return [
            'file'            => 'required',
            'cropData.height' => 'required|numeric|min:50',
            'cropData.width'  => 'required|numeric|min:50',
            'cropData.x'      => 'required|numeric',
            'cropData.y'      => 'required|numeric',
        ];
    }

}
