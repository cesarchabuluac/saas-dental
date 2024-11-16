<?php

namespace App\Models;

use Spatie\Permission\Models\Role as SpatieRole;
use App\Models\User;

class Role extends SpatieRole
{
    public function usersWithTrashed()
    {
        return $this->belongsToMany(User::class, 'model_has_roles', 'role_id', 'model_id')
            ->withTrashed(); // Incluye usuarios soft-deleted
    }
}
