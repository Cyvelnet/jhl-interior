<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class SiteSetting
 *
 * @package App
 */
class SiteSetting extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = ['name', 'group', 'value', 'value_type'];
}
