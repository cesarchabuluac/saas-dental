<?php

namespace App\Exports\Catalogs;

use App\Models\Expense;
use App\Models\Patient;
use App\Repositories\ExpenseRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\WithHeadings;

use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Sheet;

class LaboratoryActions implements FromCollection, WithHeadings, WithColumnWidths, WithStyles, ShouldAutoSize
{
    use Exportable;

    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function headings(): array
    {
        return [
            "Nombre",
            "Costo",
        ];
    }

    public function columnWidths(): array
    {
        return [
            "A" => 30,
            "B" => 30,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter("A1:B1");
        $sheet->getStyle("A1:B1")->applyFromArray([
            "font" => [
                "bold" => true,
                "size" => 12,
                "color" => [
                    "rgb" => "000000"
                ]
            ],
            "fill" => [
                "type" => "solid",
                "color" => [
                    "rgb" => "3366CC"
                ]
            ]
        ]);

        $sheet->getStyle("A1:B" . ($sheet->getHighestRow()))->applyFromArray([
            "borders" => [
                "allBorders" => [
                    "borderStyle" => Border::BORDER_THIN,
                    "color" => ["rgb" => "000000"]
                ]
            ]
        ]);
    }



    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return  $this->data->map(function ($action) {
            return [
                "Nombre" => $action["name"],
                "Costo" => $action["cost"],
            ];
        });
    }
}
