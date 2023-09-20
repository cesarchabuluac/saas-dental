<?php

namespace App\Repositories;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class PermissionRepository
 * @package App\Repositories
 * @version Jan 04, 2022, 5:54 am UTC
 *
 * @method Permission findWithoutFail($id, $columns = ['*'])
 * @method Permission find($id, $columns = ['*'])
 * @method Permission first($columns = ['*'])
 */
class PermissionRepository extends BaseRepository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'guard_name'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Permission::class;
    }

    public function givePermissionToRole(array $input)
    {
        $role = Role::findOrfail($input['roleId']);
        return $role->givePermissionTo($input['permission']);
    }

    public function revokePermissionToRole(array $input)
    {
        $role = Role::findOrfail($input['roleId']);
        return $role->revokePermissionTo($input['permission']);
    }

    public function roleHasPermission(array $input)
    {
        $role = Role::findOrfail($input['roleId']);
        if ($role->hasPermissionTo($input['permission'])) {
            return true;
        }
        return false;
    }
}