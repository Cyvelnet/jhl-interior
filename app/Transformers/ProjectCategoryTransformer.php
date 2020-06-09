<?php

namespace App\Transformers;

use League\Fractal;
use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\ProjectCategory; 

class ProjectCategoryTransformer extends TransformerAbstract
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
     * @var \App\ProjectCategory $resource
     * @return array
     */
    public function transform(ProjectCategory $resource)
    {
        return [

            'id' => (int) $resource->id,
			'name' => $resource->name,
			'description' => $resource->description,
			'is_enabled' => $resource->is_enabled,
			'created_at' => $resource->created_at,
			'updated_at' => $resource->updated_at,
			'deleted_at' => $resource->deleted_at,
			
        ];
    }
}
