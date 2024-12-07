<?php

namespace App\Repositories;

use App\Models\ActionGroup;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Interface ActionGroupRepository.
 *
 * @package namespace App\Repositories;
 */
class ActionGroupRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name' => 'like',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ActionGroup::class;
    }
}
