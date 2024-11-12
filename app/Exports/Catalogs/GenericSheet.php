<?php

namespace App\Exports\Catalogs;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class GenericSheet implements FromCollection, WithHeadings, WithTitle
{

    protected $collection;
    protected $title;
    protected $headings = [];

    public function __construct($collection, $title, $headings)
    {
        $this->collection = $collection;
        $this->title = $title;
        $this->headings = $headings;
    }

    public function collection()
    {
        return $this->collection;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function headings(): array
    {
        return $this->headings;
    }
}
