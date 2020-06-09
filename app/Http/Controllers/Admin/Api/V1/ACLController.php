<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Transformers\ACLTransformer;
use Illuminate\Http\Request;

/**
 * Class PermissionController
 *
 * @package App\Http\Controllers\Admin\Api\V1
 */
class ACLController extends ApiController
{
    /**
     * @var string
     */
    protected $transformer = ACLTransformer::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->transform(config('acl'));
    }
}
