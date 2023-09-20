<?php

namespace App\Repositories;

use App\Models\PaymentMethod;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class PaymentMethodRepository.
 *
 * @package namespace App\Repositories;
 */
class PaymentMethodRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return PaymentMethod::class;
    }
}
