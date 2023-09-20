<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Category;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class CategoryRepository.
 *
 * @package namespace App\Repositories\\Inventories;
 */
class CategoryRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Category::class;
    }
}
