<?php

namespace App\Exports;

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


class ExpenseReport implements FromCollection, WithHeadings, WithColumnWidths, WithStyles, ShouldAutoSize
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
            "Fecha", // __("lang.expenses.fields.date"),  //A  
            "Categoria", // __("lang.expenses.fields.expense_category_id"),  //B  
            "Motivo", // __("lang.expenses.fields.reason"),  //C      
            "Referencia", // __("lang.expenses.fields.reference"), //D
            "Importe", // __("lang.expenses.fields.amount"), //E
            "Comentarios", // __("lang.expenses.fields.comments"), //F
            "Fecha de Creación", // __("lang.expenses.fields.created_at"), //G
            "Estatus", // __("lang.expenses.fields.status"), //H
        ];
    }

    public function columnWidths(): array
    {
        return [
            "A" => 30,
            "B" => 30,
            "C" => 30,
            "D" => 30,
            "E" => 30,
            "F" => 30,
            "G" => 30,
            "H" => 30,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter("A1:H1");
        $sheet->getStyle("A1:H1")->applyFromArray([
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

        $sheet->getStyle("A1:H" . ($sheet->getHighestRow()))->applyFromArray([
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
        return  $this->data->map(function ($expense) {
            return [
                "date" => $expense["date"],
                "category" => $expense["category"]['name'],
                "reason" => empty($expense["reason"]) ? " -- " : $expense["reason"],
                "reference" => $expense["reference"],
                "amount" => $expense["amount"],
                "comments" => $expense["note"],
                "created_at" => $expense["created_at"],
                "status" => empty($expense["deleted_at"]) ? "Activo" : "Inactivo",
            ];
        });
    }
}
