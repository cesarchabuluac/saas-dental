<?php

namespace App\Repositories;

use App\Models\LaboratoryAction;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Interface LaboratoryActionRepository.
 *
 * @package namespace App\Repositories;
 */
class LaboratoryActionRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;
   
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'cost',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return LaboratoryAction::class;
    }
}
