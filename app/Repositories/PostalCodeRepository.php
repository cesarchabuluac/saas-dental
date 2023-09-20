<?php

namespace App\Repositories;

use App\Models\PostalCode;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class PostalCodeRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id',
        'cp',
        'settlement',
        'settlement_type',
        'municipality',
        'state',
        'city',
        'country'
    ];


    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PostalCode::class;
    }
}
