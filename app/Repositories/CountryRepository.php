<?php

namespace App\Repositories;

use App\Models\Country;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class CountryRepository.
 *
 * @package namespace App\Repositories;
 */
class CountryRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'iso' => '=',
        'name' => 'like',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Country::class;
    }
}