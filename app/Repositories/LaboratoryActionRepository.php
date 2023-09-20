<?php

namespace App\Repositories;

use App\Models\LaboratoryAction;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface LaboratoryActionRepository.
 *
 * @package namespace App\Repositories;
 */
class LaboratoryActionRepository extends BaseRepository
{
   
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
