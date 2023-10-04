<?php

namespace App\Exports;

use App\Criteria\PaymentCriteria;
use App\Models\Expense;
use App\Models\Patient;
use App\Models\Payment;
use App\Repositories\ExpenseRepository;
use App\Repositories\PaymentRepository;
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


class PaymentReport implements FromCollection, WithHeadings, WithStyles, WithColumnWidths, ShouldAutoSize
{
    use Exportable;

    protected $paymentRepository;
    private $params;


    public function __construct(Request $request, PaymentRepository $paymentRepository)
    {
        $this->params = $request->all();
        $this->paymentRepository = $paymentRepository;
    }

    public function headings(): array
    {
        return [
            "ID de Pago", //__("lang.payments.id"),  //A      
            "Fecha de Pago", //__("lang.payments.payment_date"), //B    
            "Presupuesto", //__("lang.payments.budget"), //C
            "Paciente", //__("lang.payments.patient"), //D
            "Monto", //__("lang.payments.amount"), //E
            "Método", //__("lang.payments.method"), //F
            "Banco", //__("lang.payments.bank"), //G
            "Referencia", //__("lang.payments.reference"), //H
            "Serie", //__("lang.payments.serie"), //I           
            "Marcado Como Pagado", //__("lang.payments.charged"), //J            
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
        $start = Carbon::parse($this->params["start"])->startOfDay();
        $end = Carbon::parse($this->params["end"])->endOfDay();
        $method = $this->params['method'] ?? null;
        $filterBy = $this->params['filter_by'] ?? null;

        $payments = $this->paymentRepository->pushCriteria(new PaymentCriteria())->with('branch', 'budget.patient', 'check')
            ->where(function ($q) {
                $q->whereNull('payments.has_partials')
                    ->orWhere('payments.has_partials', 0);
            })
            ->where(function ($query) use ($filterBy, $method) {
                if ($filterBy === 'paid') {
                    $query->where('payments.check_paid', true);
                } elseif ($filterBy === 'unpaid') {
                    $query->where('payments.check_paid', false);
                }
                if ($method) {
                    $query->where('payments.method', $method);
                }
            });


        if ($start && $end) {
            $payments = $payments->whereBetween('payments.payment_date', [$start, $end]);
        }


        return $payments->get()->map(function ($payment) {
            return [
                "id" => $payment["id"],
                "payment_date" => $payment["payment_date"],
                "budget" => $payment["budget"]["label"],
                "patient" => $payment["budget"]["patient"]["full_name"],
                "amount" => $payment["amount"],
                "method" => $payment["method"],
                "bank" => !empty($payment["check"]) ? $payment["check"]["bank"] : "",
                "reference" => !empty($payment["check"]) ? $payment["check"]["reference"] : "",
                "serie" => !empty($payment["check"]) ? $payment["check"]["serie"] : "",
                "charged" => $payment["check_paid"] == 1 ? "Si" : "No",
            ];            
        });
    }
}
