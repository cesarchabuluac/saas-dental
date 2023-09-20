<?php

namespace App\Repositories;

use App\Models\Currency;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class CurrencyRepository.
 *
 * @package namespace App\Repositories;
 */
class CurrencyRepository extends BaseRepository
{    

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
