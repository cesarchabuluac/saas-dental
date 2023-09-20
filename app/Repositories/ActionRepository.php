<?php

namespace App\Repositories;

use App\Models\Action;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface ActionRepository.
 *
 * @package namespace App\Repositories;
 */
class ActionRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'cost',
        'group',
        'area',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Action::class;
    }
}
