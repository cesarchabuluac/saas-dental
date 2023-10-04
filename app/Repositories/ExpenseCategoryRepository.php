<?php

namespace App\Repositories;

use App\Models\ExpenseCategory;
use Carbon\Carbon;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Interface ExpenseRepository.
 *
 * @package namespace App\Repositories;
 */
class ExpenseCategoryRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ExpenseCategory::class;
    }
}
