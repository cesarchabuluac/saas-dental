<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Unit;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UnitRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class UnitRepository extends BaseRepository
{
    /*
    * @var array
    */
    protected $fieldSearchable = [
        'name',
        'abbreviation',
        'description',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Unit::class;
    }
}
