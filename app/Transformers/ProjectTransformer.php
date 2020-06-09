<?php

namespace App\Transformers;

use App\ProjectImage;
use League\Fractal;
use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\Project;

/**
 * Class ProjectTransformer
 *
 * @package App\Transformers
 */
class ProjectTransformer extends TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = ['category', 'images'];

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
     * @var \App\Project $resource
     */
    public function transform(Project $resource)
    {
        return [
            'id'             => (int) $resource->id,
            'name'           => $resource->name,
            'progress'       => $resource->progress,
            'is_published'   => $resource->is_published,
            'highlight'      => $resource->highlight,
            'description'    => $resource->description,
            'currency'       => 'RM',
            'value'          => $resource->value,
            'value_pretty'   => number_format($resource->value, 2),
            'client_name'    => $resource->client_name,
            'client_website' => $resource->client_website,
            'date'           => $resource->date,
            'location'       => $resource->location,
            // 'project_categories_id' => (int) $resource->project_categories_id,
            'created_at'     => $resource->created_at,
            'updated_at'     => $resource->updated_at,
            'deleted_at'     => $resource->deleted_at,

        ];
    }

    public function includeCategory(Project $resource)
    {
        return $this->item($resource->category, new ProjectCategoryTransformer());
    }

    public function includeImages(Project $resource)
    {
        return $this->collection($resource->images, new ProjectImageTransformer());
    }
}
