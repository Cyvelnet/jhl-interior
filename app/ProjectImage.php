<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ProjectImage
 *
 * @package App
 */
class ProjectImage extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = ['name', 'title', 'filename', 'ext', 'path', 'display_order', 'project_id'];


    public function getCoverPathAttribute()
    {
        return "/projects/{$this->filename}_cover.{$this->ext}";
    }

    public function getCoverUrlAttribute()
    {
        return url(\Storage::url($this->cover_path));
    }
    public function getUrlAttribute()
    {
        return url(\Storage::url($this->path));
    }

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }
}
