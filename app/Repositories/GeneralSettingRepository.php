<?php

namespace App\Repositories;

use App\Models\GeneralSetting;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class GeneralSettingRepository.
 *
 * @package namespace App\Repositories;
 */
class GeneralSettingRepository extends BaseRepository
{
    protected $fieldSearchable = [
        'key' => 'like',
        'display_name' => 'like',
        'value' => 'like',
    ];

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
