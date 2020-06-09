<?php

namespace App\Transformers;

use League\Fractal;
use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\ProjectImage;

class ProjectImageTransformer extends TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [];

    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [];

    /**
     * Transform object into a generic array
     *
     * @return array
     * @var \App\ProjectImage $resource
     */
    public function transform(ProjectImage $resource)
    {
        return [

            'id'         => (int) $resource->id,
            'name'       => $resource->name,
            'filename'   => $resource->filename,
            'ext'        => $resource->ext,
            'file'       => $resource->name,
            'title'      => $resource->title,
            'cover_url'  => url(\Storage::url($resource->cover_path)),
            //'path' => $resource->path,
            'url'        => url(\Storage::url($resource->path)),
            //'display_order' => (int) $resource->display_order,
            'project_id' => (int) $resource->project_id,
            'created_at' => $resource->created_at,
            'updated_at' => $resource->updated_at,

        ];
    }
}
