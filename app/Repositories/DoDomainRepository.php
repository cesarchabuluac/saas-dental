<?php

namespace App\Repositories;

use App\Models\DoDomain;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * class TenantRepository.
 *
 * @package namespace App\Repositories;
 */
class DoDomainRepository extends BaseRepository
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
        return DoDomain::class;
    }
}
