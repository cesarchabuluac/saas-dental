<?php

namespace App\Repositories;

use App\Models\CashRegister;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class CashRegisterRepository.
 *
 * @package namespace App\Repositories;
 */
class CashRegisterRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'branch_office_id',
        'user_id',
        // 'type_register',
        'closing_date',
        'total_income',
        'total_expenses',
        'total_balance',
        'total_difference',
        'comments',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return CashRegister::class;
    }
}
