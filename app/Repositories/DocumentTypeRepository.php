<?php

namespace App\Repositories;

use App\Models\DocumentType;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * class DocumentTypeRepository.
 *
 * @package namespace App\Repositories;
 */
class DocumentTypeRepository extends BaseRepository
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
        return DocumentType::class;
    }
}
