<?php

namespace App\Http\Controllers\Admin\Api\V1;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class CheckPermissionController extends Controller
{
    public function __invoke(Request $request)
    {
        return response()->success(
            [
                'allow' => $request->user()->hasAnyPermission($request->input('permission')) || $request->user()->hasRole('Super Admin'),
            ]);
    }
}
