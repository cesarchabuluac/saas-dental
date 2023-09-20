<?php

namespace App\Repositories;

use App\Models\BranchOffice;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface BranchOfficeRepository.
 *
 * @package namespace App\Repositories;
 */
class BranchOfficeRepository extends BaseRepository
{
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