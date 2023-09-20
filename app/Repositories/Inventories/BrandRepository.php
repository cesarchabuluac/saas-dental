<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Brand;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class BrandRepository.
 *
 * @package namespace App\Repositories\Inventories;
 */
class BrandRepository extends BaseRepository
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
        return Brand::class;
    }
}
