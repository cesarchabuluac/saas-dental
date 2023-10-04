<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;

class UserExport implements FromCollection
{
    public $collections;

    public function __construct($collections)
    {
        // $this->params = $request->all();
        $this->collections = $collections;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return $this->collections;
    }
}
