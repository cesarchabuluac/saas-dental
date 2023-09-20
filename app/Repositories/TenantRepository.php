<?php

namespace App\Repositories;

use App\Models\Tenant;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * class TenantRepository.
 *
 * @package namespace App\Repositories;
 */
class TenantRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Tenant::class;
    }
}
