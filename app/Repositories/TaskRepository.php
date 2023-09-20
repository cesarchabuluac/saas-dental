<?php

namespace App\Repositories;

use App\Models\Task;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class TaskRepository.
 *
 * @package namespace App\Repositories;
 */
class TaskRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'user_id',
        'title',
        'due_date',
        'description',
        'tags',
        'is_completed',
        'is_important',
        'is_deleted',
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Task::class;
    }
}
