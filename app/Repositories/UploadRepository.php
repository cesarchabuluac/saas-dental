<?php

namespace App\Repositories;

use App\Models\Media;
use App\Models\Upload;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UploadRepository
 * @package App\Repositories
 * @version December 30, 2021, 11:30 am UTC
 *
 * @method Upload findWithoutFail($id, $columns = ['*'])
 * @method Upload find($id, $columns = ['*'])
 * @method Upload first($columns = ['*'])
 */
class UploadRepository extends BaseRepository
{
     /**
     * @var array
     */
    protected $fieldSearchable = [

    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Upload::class;
    }

    public function getByUuid($uuid = '')
    {
        $uploadModel = Upload::query()->where('uuid', $uuid)->first();
        return $uploadModel;
    }
    
    public function getByModelId($model_id = '', $model = 'upload')
    {
        if ($model == 'upload') {
            return Upload::query()->where('id', $model_id)->first();
        }        
        return Media::query()->where('id', $model_id)->first();
        
    }

    /**
     * @param $uuid
     */
    public function clear($data)
    {
        $uploadModel = $this->getByUuid($data['uuid']);
        Media::query()->where('id', '=', $data['id'])->delete();
        return $uploadModel->delete();
    }

    /**
     * clear all uploaded cache
     */
    public function clearAll()
    {
        Upload::query()->where('id', '>', 0)->delete();
        Media::query()->where('model_type', '=', 'App\Models\Upload')->delete();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function allMedia($collection = null)
    {
        $medias = Media::where('model_type', '=', 'App\Models\Upload');
        if ($collection) {
            $medias = $medias->where('collection_name', $collection);
        }
        $medias = $medias->orderBy('id','desc')->get();
        return $medias;
    }


    public function collectionsNames()
    {
        $medias = Media::all('collection_name')->pluck('collection_name','collection_name')->map(function ($c) {
                return ['value' => $c,
                    'title' => title_case(preg_replace('/_/', ' ', $c))
                ];
        })->unique();
        unset($medias['default']);
        $medias->prepend(['value' => 'default', 'title' => 'Default'],'default');
        return $medias;
    }

}
