<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // responses

        \Response::macro('success', function ($message) {

            $response = ['is_success' => true, 'message' => $message];

            if (is_array($message)) {
                $response = array_merge($response, $message);
            }

            return \Response::make($response);
        });

        \Response::macro('failed', function ($message, $code = 400) {

            $response = ['is_success' => false, 'message' => $message, 'code' => $code];

            if (is_array($message)) {
                $response = array_merge($response, $message);
            }

            return \Response::make($response, $code);
        });

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
