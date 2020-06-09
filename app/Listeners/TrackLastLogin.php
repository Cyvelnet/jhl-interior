<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class TrackLastLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Login  $event
     *
     * @return void
     */
    public function handle(\Illuminate\Auth\Events\Login $event)
    {
        $event->user->update([
            'last_login_at' => now(),
        ]);
    }
}
