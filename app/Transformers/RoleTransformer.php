<?php

namespace App\Transformers;

use League\Fractal;
use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\Role;

class RoleTransformer extends TransformerAbstract
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
     * @param  \Spatie\Permission\Models\Role  $resource
     *
     * @return array
     */
    public function transform(\Spatie\Permission\Models\Role $resource)
    {
        return [

            'id'           => (int) $resource->id,
            'name'         => $resource->name,
            'can_delete'   => (bool) $resource->can_delete,
            'can_edit'     => (bool) $resource->can_edit,
            'created_at'   => $resource->created_at,
            'created_date' => $resource->created_at->format('d M Y H:i'),
            'updated_at'   => $resource->updated_at,

        ];
    }

    public function includePermissions(\Spatie\Permission\Models\Role $resource)
    {
        return $this->collection($resource->permissions, function ($permission) {
            return [
                'permission' => $permission->name,
            ];
        });
    }
}
