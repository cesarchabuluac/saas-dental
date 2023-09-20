<?php

namespace App\Repositories;

use App\Models\Notification;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class NotificationRepository.
 *
 * @package namespace App\Repositories;
 */
class NotificationRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'type',
        'read_at'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Notification::class;
    }
}
