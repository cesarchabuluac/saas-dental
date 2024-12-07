<?php

namespace App\Repositories;

use App\Models\Currency;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Class CurrencyRepository.
 *
 * @package namespace App\Repositories;
 */
class CurrencyRepository extends BaseRepository implements CacheableInterface
{    
    use CacheableRepository;

    protected $fieldSearchable = [
        'name' => 'like',
        'code' => 'like',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */

    public function model()
    {
        return Currency::class;
    }    
}
