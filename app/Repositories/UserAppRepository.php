<?php

namespace App\Repositories;

use App\Models\UserApp;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserAppRepository.
 *
 * @package namespace App\Repositories;
 */
class UserAppRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'id',
        'name',
        'email',
        'password',
        'api_token',
        'device_token',
        'role_id',
        'remember_token'
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return UserApp::class;
    }
}
