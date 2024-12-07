<?php

namespace App\Repositories;

use App\Models\Action;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Interface ActionRepository.
 *
 * @package namespace App\Repositories;
 */
class ActionRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;
    
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name' => 'like',
        'group' => 'like',
        'area' => 'like',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Action::class;
    }
}
