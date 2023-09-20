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

class CashRegister implements FromView, ShouldAutoSize
{

    use Exportable;

    /** @var CashRegisterRepository */
    private $cashRegisterRepository;

    /** @var CashRegisterDetailRepository */
    private $cashRegisterDetailRepository;

    /** @var  PaymentRepository */
    private $paymentRepository;

    /** @var  ActionPaymentRepository */
    private $actionPaymentRepository;

    /** @var  ExpenseRepository */
    private $expenseRepository;


    private $params;


    public function __construct(
        Request $request,
        CashRegisterRepository $cashRegisterRepo,
        CashRegisterDetailRepository $cashRegisterDetailRepo,
        PaymentRepository $paymentRepo,
        ActionPaymentRepository $actionPaymentRepo,
        ExpenseRepository $expenseRepo
    ) {
        $this->params = $request;
        $this->cashRegisterRepository = $cashRegisterRepo;
        $this->cashRegisterDetailRepository = $cashRegisterDetailRepo;
        $this->paymentRepository = $paymentRepo;
        $this->actionPaymentRepository = $actionPaymentRepo;
        $this->expenseRepository = $expenseRepo;
    }

    public function view(): View
    {

        $cashRegister = $this->cashRegisterRepository->with('user', 'cashRegisterDetails')->find($this->params->id);

        $expenses = $this->cashRegisterRepository
            ->join('cash_register_details as crd', 'crd.cash_register_id', '=', 'cash_registers.id')
            ->join('expenses as e', 'crd.relation_id', '=', 'e.id')
            ->where('cash_registers.id', $this->params->id)
            ->where('crd.origin', 'expense')
            ->where('e.is_closed', 1)
            ->select(
                'cash_registers.id',
                'cash_registers.closing_date',
                'cash_registers.comments',
                'e.id as expense_id',
                'e.reference',
                'e.amount',
                'e.note'
            )
            ->get();

        $payments = $this->cashRegisterRepository
            ->join('cash_register_details as crd', 'crd.cash_register_id', '=', 'cash_registers.id')
            ->join('payments as pymt', 'pymt.id', '=', 'crd.relation_id')
            ->join('action_payments as ap', 'ap.payment_id', '=', 'pymt.id')
            ->join('budget_actions as ba', 'ap.budget_action_id', '=', 'ba.id')
            ->join('actions as a', 'ba.action_id', '=', 'a.id')
            ->leftJoin('users as u', 'ap.professional_id', 'u.id')
            ->leftJoin('checks as c', 'pymt.check_id', '=', 'c.id')
            ->join('budgets as b', 'pymt.budget_id', '=', 'b.id')
            ->join('patients as p', 'b.patient_id', '=', 'p.id')
            ->where('cash_registers.id', $this->params->id)
            ->where('crd.origin', 'payment')
            ->where('pymt.is_closed', 1)
            ->select('pymt.*', 'a.group as action_group', 'a.name as action_name', 'a.cost as action_cost', 'a.area as action_area', 'ap.amount as ap_amount', 'b.id as budget_id', 'u.id as professional_id', 'u.name as doctor', 'c.bank', 'c.reference', 'c.serie', 'c.date', 'c.charged', 'c.created_at as high_date', 'c.updated_at as date_applied', DB::Raw('CONCAT(p.name, " " , p.last_name, " ", p.mother_last_name) as patient'))
            ->distinct()
            ->get();

        return view('exports.cash-register', [
            'expenses' => $expenses,
            'payments' => $payments,
            'register' => $cashRegister
        ]);
    }
}
