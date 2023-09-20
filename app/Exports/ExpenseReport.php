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


class ExpenseReport implements FromCollection, WithHeadings, WithStyles, WithColumnWidths, ShouldAutoSize
{
    use Exportable;

    private $params;

    public function __construct(Request $request)
    {
        $this->params = $request->all();
    }

    public function headings(): array
    {
        return [
            __("lang.expenses.fields.date"),  //A          
            __("lang.expenses.fields.reference"), //B
            __("lang.expenses.fields.amount"), //C
            __("lang.expenses.fields.comments"), //D
            __("lang.expenses.fields.created_at"), //E
            __("lang.expenses.fields.status"), //F            
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
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter("A1:F1");
        $sheet->getStyle("A1:F1")->applyFromArray([
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

        $sheet->getStyle("A1:F" . ($sheet->getHighestRow()))->applyFromArray([
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
        $start = Carbon::parse($this->params["start"])->startOfDay();
        $end = Carbon::parse($this->params["end"])->endOfDay();

        $expenses = Expense::with(["user", "branch"])
            ->whereBetween("date", [$start, $end]);

        return $expenses->get()->map(function ($expense) {
            return [
                "date" => $expense["date"],
                "reference" => $expense["reference"],
                "amount" => $expense["amount"],
                "comments" => $expense["note"],
                "created_at" => $expense["created_at"],
                "status" => empty($expense["deleted_at"]) ? __("lang.active") : __("lang.inactive"),
            ];
        });
    }
}
