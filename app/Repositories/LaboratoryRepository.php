<?php

namespace App\Repositories;

use App\Models\Laboratory;
use Prettus\Repository\Eloquent\BaseRepository;


/**
 * Interface LaboratoryRepository.
 *
 * @package namespace App\Repositories;
 */
class LaboratoryRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Laboratory::class;
    }


}
