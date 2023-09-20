<?php

namespace App\Repositories;

use App\Models\Message;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class MessageRepository.
 *
 * @package namespace App\Repositories;
 */
class MessageRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'email',
        'description',
    ];


    /**
     * Configure the Model
     **/
    public function model()
    {
        return Message::class;
    }
}
