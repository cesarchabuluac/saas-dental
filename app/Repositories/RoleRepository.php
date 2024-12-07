<?php

namespace App\Repositories;

use Prettus\Repository\Contracts\CacheableInterface;
use Spatie\Permission\Models\Role;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class RoleRepository
 * @package App\Repositories
 * @version Nov 11, 2021, 15:38 pm UTC
 *
 * @method Role findWithoutFail($id, $columns = ['*'])
 * @method Role find($id, $columns = ['*'])
 * @method Role first($columns = ['*'])
*/

class RoleRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;
    
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
        return Role::class;
    }
}
