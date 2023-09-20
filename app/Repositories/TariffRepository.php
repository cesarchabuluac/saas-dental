<?php

namespace App\Repositories;

use App\Models\Tariff;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * class TariffRepository.
 *
 * @package namespace App\Repositories;
 */
class TariffRepository extends BaseRepository
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
        return Tariff::class;
    }
}
