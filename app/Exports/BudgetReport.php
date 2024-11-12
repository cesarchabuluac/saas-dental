<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class BudgetReport implements FromCollection, WithHeadings, WithColumnWidths, WithStyles, ShouldAutoSize
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
            "Folio", //A
            "Presupuesto", //B  
            "Paciente", //C      
            "Correo", //D
            "Tipo Documento", //E
            "Sucursal", //F
            "Total", //G
            "Pagado", //H
            "Deuda", //I
            "Fecha Alta", //J
            "Aprobado", //K
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
            "I" => 30,
            "J" => 30,
            "K" => 30,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter("A1:K1");
        $sheet->getStyle("A1:K1")->applyFromArray([
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

        $sheet->getStyle("A1:K" . ($sheet->getHighestRow()))->applyFromArray([
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
        return  $this->data->map(function ($budget) {
            return [
                "Folio" => $budget["label"],
                "Presupuesto" => empty($budget["name"]) ? " -- " : $budget["name"],
                "Paciente" => $budget["patient"]["full_name"], 
                "Correo" => $budget["patient"]["email"],
                "Tipo Documento" => $budget["document_type"] . " " . $budget["patient"]["rut"],
                "Sucursal" => $budget["branch"]["name"],
                "Total" => $budget["total"],
                "Pagado" => $budget["total_paid"],
                "Deuda" => $budget["total_debt"],
                "Fecha Alta" => $budget["created_at"],
                "Aprobado" => $budget["approved"] ? "Si" : "No",
            ];
        });
    }
}
