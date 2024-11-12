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

class BudgetActionExport implements FromCollection, WithHeadings, WithColumnWidths, WithStyles, ShouldAutoSize
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
            "Presupuesto", //A
            "Doctor", //B  
            "Tipo de Acción", //C      
            "Acción", //D
            "Área", //E
            "Descuento", //F
            "Costo", //G
            "Estado", //H            
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
        return  $this->data->map(function ($action) {
            return [
                "Presupuesto" => empty($action['budget']["name"]) ? $action['budget']['label'] : $action['budget']['name'],
                "Professional" => $action['professional'] ? $action['professional']['name'] : " -- ", 
                "Tipo de Accion" => $action['action']['action_type'] == "clinical" ? "Clínica" : "Laboratorio",
                "Accion" => $action['action_name'],
                "Area" => $action["area"],
                "Descuento" => $action["discount"],
                "Subtotal" => $action["subtotal"],
                "Estatus" => $action["status"],
            ];
        });
    }
}
