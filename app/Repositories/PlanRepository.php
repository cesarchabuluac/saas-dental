<?php

namespace App\Repositories;

use App\Models\Plan;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class PlanRepository.
 *
 * @package namespace App\Repositories;
 */
class PlanRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;

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
        return Plan::class;
    }
}
