<?php

namespace App\Repositories;

use App\Models\Faq;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class FaqRepository.
 *
 * @package namespace App\Repositories;
 */
class FaqRepository extends BaseRepository
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
        return Faq::class;
    }
}