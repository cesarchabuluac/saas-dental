<?php

namespace App\Repositories;

use App\Models\Company;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class CompanyRepository.
 *
 * @package namespace App\Repositories;
 */
class CompanyRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'user_id',
        'tenant_id',
        'name',
        'rfc',
        'address',
        'numb_ext',
        'numb_int',
        'suburb',
        'city',
        'town',
        'estate',
        'country',
        'zipcode',
        'phone',
        'currency_code',
        'currency_name',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Company::class;
    }
}
