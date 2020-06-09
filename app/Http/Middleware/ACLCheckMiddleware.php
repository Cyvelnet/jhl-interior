<?php

namespace App\Http\Middleware;

use Closure;

class ACLCheckMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  array  $permissions
     *
     * @return mixed
     */
    public function handle($request, Closure $next, ...$permissions)
    {
        $request->user()->hasAllDirectPermissions($permissions);

        return $next($request);
    }
}
