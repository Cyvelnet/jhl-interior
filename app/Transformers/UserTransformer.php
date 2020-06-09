<?php

namespace App\Transformers;

use League\Fractal;
use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\User;

/**
 * Class UserTransformer
 *
 * @package App\Transformers
 */
class UserTransformer extends TransformerAbstract
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = ['roles'];

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
     * @var \App\User $resource
     */
    public function transform(User $resource)
    {
        return [

            'id'                => (int) $resource->id,
            'name'              => $resource->name,
            'email'             => $resource->email,
            'contact_no'        => $resource->contact_no,
            'email_verified_at' => $resource->email_verified_at,
            'registered_date'   => $resource->created_at->format('d M Y H:i'),
            'last_login_date'   => optional($resource->last_login_at)->format('d M Y H:i'),
            'show_delete'       => optional(request()->user())->id !== $resource->id,
            'show_edit'         => optional(request()->user())->id !== $resource->id,
            'created_at'        => $resource->created_at,
            'updated_at'        => $resource->updated_at,

        ];
    }

    /**
     * @param  User  $resource
     *
     * @return Collection
     */
    public function includeRoles(User $resource)
    {
        return $this->collection($resource->roles, new RoleTransformer());
    }
}
