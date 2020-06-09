<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * Class Project
 *
 * @package App
 * @property int $id
 * @property string $name
 * @property bool $is_published
 * @property string|null $highlight
 * @property string|null $description
 * @property float|null $value
 * @property string|null $client_name
 * @property string|null $client_website
 * @property \Illuminate\Support\Carbon|null $date
 * @property string|null $location
 * @property int $project_categories_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\ProjectCategory $category
 * @property-read mixed $currency
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProjectImage[] $images
 * @property-read int|null $images_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Project onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project published()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereClientName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereClientWebsite($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereHighlight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereIsPublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereProjectCategoriesId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Project whereValue($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Project withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Project withoutTrashed()
 */
	class Project extends \Eloquent {}
}

namespace App{
/**
 * Class ProjectCategory
 *
 * @package App
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property bool $is_enabled
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereIsEnabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectCategory whereUpdatedAt($value)
 */
	class ProjectCategory extends \Eloquent {}
}

namespace App{
/**
 * Class ProjectImage
 *
 * @package App
 * @property int $id
 * @property string $name
 * @property string $filename
 * @property string $ext
 * @property string|null $title
 * @property string $path
 * @property int|null $display_order
 * @property int $project_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read mixed $cover_path
 * @property-read mixed $cover_url
 * @property-read mixed $url
 * @property-read \App\Project $project
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereDisplayOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereExt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereFilename($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ProjectImage whereUpdatedAt($value)
 */
	class ProjectImage extends \Eloquent {}
}

namespace App{
/**
 * Class User
 *
 * @package App
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property \Illuminate\Support\Carbon|null $last_login_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read int|null $clients_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User exceptUser(\App\User $user)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereLastLoginAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

