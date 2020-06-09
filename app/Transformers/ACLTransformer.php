<?php

namespace App\Transformers;

use League\Fractal;
use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;


/**
 * Class ACLTransformer
 *
 * @package App\Transformers
 */
class ACLTransformer extends TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = ['permissions'];

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
     * @var $resource
     */
    public function transform($resource)
    {
        return [
            'name' => $resource['module'],
        ];
    }

    public function includePermissions($resource)
    {
        return $this->collection($resource['permissions'], new ACLPermissionTransformer());
    }
}
