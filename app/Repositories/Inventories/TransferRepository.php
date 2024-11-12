<?php

namespace App\Repositories\Inventories;

use App\Models\Inventories\Transfer;
use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class TransferRepository.
 *
 * @package namespace App\Repositories\\Inventories;
 */
class TransferRepository extends BaseRepository
{

     /**
     * @var array
    */
    protected $fieldSearchable = [];
    
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Transfer::class;
    }   
}
