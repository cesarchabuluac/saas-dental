<?php

namespace App\Repositories;

use App\Models\Check;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface CheckRepository.
 *
 * @package namespace App\Repositories;
 */
class CheckRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'payment_id',
        'reference',
        'bank',
        'serie',
        'date',
        'charged',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Check::class;
    }
}
