<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\SubCategory;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class CategoryRepository.
 *
 * @package namespace App\Repositories\\Inventories;
 */
class SubCategoryRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'category_id',
        'description',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return SubCategory::class;
    }
}
