<?php

namespace App\Repositories;

use App\Models\CashRegister;
use App\Models\CashRegisterDetail;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class CashRegisterRepository.
 *
 * @package namespace App\Repositories;
 */
class CashRegisterDetailRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'cash_register_id',
        'user_id',
        'professional_id',
        'relation_id',
        'origin',
        // 'type',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return CashRegisterDetail::class;
    }
}
