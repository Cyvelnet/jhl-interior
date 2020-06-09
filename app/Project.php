<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Project
 *
 * @package App
 */
class Project extends Model
{
    use SoftDeletes;

    const PROJECT_PROGRESS_ONGOING = 'on-going';
    const PROJECT_PROGRESS_COMPLETED = 'completed';


    protected $fillable = [
        'name', 'highlight', 'progress', 'is_published', 'description', 'value', 'client_name', 'client_website',
        'date',
        'location',
        'project_categories_id',
    ];

    protected $casts = [
        'is_published' => 'bool',
        'date'         => 'date',
    ];

    protected static function boot()
    {
        parent::boot();

        self::addGlobalScope('ordering', function ($query) {
            return $query->latest('created_at')->latest('id');
        });
    }

    /**
     * @param $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    public function getCurrencyAttribute()
    {
        return 'RM';
    }

    public function getIsNewAttribute()
    {
        return $this->created_at->gt(now()->subMonths(3));
    }

    public function category()
    {
        return $this->belongsTo(ProjectCategory::class, 'project_categories_id');
    }

    public function images()
    {
        return $this->hasMany(ProjectImage::class, 'project_id');
    }
}
