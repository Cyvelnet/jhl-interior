<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ProjectCategory
 *
 * @package App
 */
class ProjectCategory extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = ['name', 'description', 'is_enabled'];

    /**
     * @var string[]
     */
    protected $casts = ['is_enabled' => 'bool'];

    protected static function boot()
    {
        parent::boot();

        self::addGlobalScope('ordering', function ($query) {
            return $query->latest('project_categories.created_at')->latest('project_categories.id');
        });
    }

    public function projects()
    {
        return $this->hasMany(Project::class, 'project_categories_id');
    }


}
