<?php

namespace App\Repositories;

use App\Models\BranchOffice;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

/**
 * Interface BranchOfficeRepository.
 *
 * @package namespace App\Repositories;
 */
class BranchOfficeRepository extends BaseRepository implements CacheableInterface
{
    use CacheableRepository;

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'country',
        'postal_code',
        'phone',
        'email',
        'address',
        'is_active',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return BranchOffice::class;
    }
}