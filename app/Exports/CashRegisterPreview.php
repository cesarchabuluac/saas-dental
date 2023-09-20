<?php

namespace App\Exports;

use App\Models\CashRegister as ModelsCashRegister;
use App\Repositories\ActionPaymentRepository;
use App\Repositories\CashRegisterDetailRepository;
use App\Repositories\CashRegisterRepository;
use App\Repositories\ExpenseRepository;
use App\Repositories\PaymentRepository;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class CashRegisterPreview implements FromView, ShouldAutoSize
{
    use Exportable;

    private $params;
    private $payments;
    private $expenses;
    private $date;


    public function __construct(Request $request, $payments, $expenses, $date)
    {
        $this->params = $request;
        $this->payments = $payments;
        $this->expenses = $expenses;
        $this->date = $date;
    }

    public function view(): View
    {
        return view('exports.cash-register', [
            'expenses' => $this->expenses,
            'payments' => $this->payments,
            'register' => [],
            'date' => $this->date,
        ]);
    }
}
