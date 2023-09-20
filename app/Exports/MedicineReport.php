<?php

namespace App\Exports;

use App\Models\Expense;
use App\Models\Inventories\Medicine;
use App\Models\Patient;
use App\Models\Payment;
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


class MedicineReport implements FromCollection, WithHeadings, WithStyles, WithColumnWidths, ShouldAutoSize
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
            __("lang.inventories.medicines.sku"),  //A      
            __("lang.inventories.medicines.medicine"), //B    
            __("lang.inventories.medicines.description"), //C
            __("lang.inventories.medicines.unit"), //D
            __("lang.inventories.medicines.category"), //E
            __("lang.inventories.medicines.brand"), //F
            __("lang.inventories.medicines.price"), //G
            __("lang.inventories.medicines.stock"), //H
            __("lang.inventories.medicines.expiration_date"), //I           
            __("lang.inventories.medicines.status"), //J            
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
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter("A1:J1");
        $sheet->getStyle("A1:J1")->applyFromArray([
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

        $sheet->getStyle("A1:J" . ($sheet->getHighestRow()))->applyFromArray([
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
        $unit_id = $this->params['unit_id'] ?? null;
        $category_id = $this->params['category_id'] ?? null;
        $brand_id = $this->params['brand_id'] ?? null;

        $medicines = Medicine::query()
            ->with(['unit', 'brand', 'category', 'subCategory'])
            ->when($unit_id, function ($query) use ($unit_id) {
                $query->where('unit_id', $unit_id);
            })
            ->when($brand_id, function ($query) use ($brand_id) {
                $query->where('brand_id', $brand_id);
            })
            ->when($category_id, function ($query) use ($category_id) {
                $query->where('category_id', $category_id);
            });

        return $medicines->get()->map(function ($medicine) {
            return [
                "sku" => $medicine['sku'],
                "name" => $medicine['name'],
                "description" => $medicine['description'],
                "unit" => $medicine['unit'] ? $medicine['unit']['name'] : '',
                "category" => $medicine['category'] ? $medicine['category']['name'] : '',
                "brand" => $medicine['brand'] ? $medicine['brand']['name'] : '',
                "price" => $medicine['price'],
                "stock" => $medicine['current_stock'],
                "expiration_date" => $medicine['expiration_date'],
                "status" => empty($medicine["deleted_at"]) ? __("lang.active") : __("lang.inactive"),
            ];
        });
    }
}
