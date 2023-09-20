<?php

namespace App\Repositories;

use App\Models\GeneralSetting;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepository.
 *
 * @package namespace App\Repositories;
 */
class SettingRepository extends BaseRepository
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
        return GeneralSetting::class;
    }   
}
