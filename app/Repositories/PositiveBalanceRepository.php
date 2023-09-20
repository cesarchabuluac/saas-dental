<?php

namespace App\Repositories;

use App\Models\PositiveBalance;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class PositiveBalanceRepository.
 *
 * @package namespace App\Repositories;
 */
class PositiveBalanceRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
       
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return PositiveBalance::class;
    }
}
