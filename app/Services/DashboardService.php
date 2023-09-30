<?php

namespace App\Services;

use App\Criteria\UserCriteria;
use App\Interfaces\IDashboardService;
use App\Repositories\BudgetRepository;
use Carbon\Carbon;
use App\Repositories\ExpenseRepository;
use App\Repositories\PatientRepository;
use App\Repositories\PaymentRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class DashboardService implements IDashboardService
{
    protected $patientRepository;
    protected $userRepository;
    protected $paymentRepository;
    private $expenseRepository;
    private $budgetRepository;
    private $roles = array(1, 2);

    public function __construct(
        PatientRepository $patientRepository,
        UserRepository $userRepository,
        PaymentRepository $paymentRepository,
        ExpenseRepository $expenseRepository,
        BudgetRepository $budgetRepository
    ) {
        $this->patientRepository = $patientRepository;
        $this->userRepository = $userRepository;
        $this->paymentRepository = $paymentRepository;
        $this->expenseRepository = $expenseRepository;
        $this->budgetRepository = $budgetRepository;
    }

    public function getSummery($summeryType, Request $request)
    {

        $to = Carbon::today()->endOfDay();
        $from = Carbon::today()->startOfDay();

        if ($request->boolean('onlyRevenue')) {
            $from = Carbon::parse($request->start_at)->startOfDay();
            $to = Carbon::parse($request->end_at)->endOfDay();
            $revenueDoctors = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->userRepository->revenueReport($from, $to) : [];

            return [
                "revenueDoctors" => $revenueDoctors,
            ];
        } else if ($request->boolean('onlyPayments')) {

            $from = Carbon::now()->startOfMonth();
            $to = Carbon::now();

            return $this->paymentRepository->with(['check'])
                ->join('budgets', 'payments.budget_id', '=', 'budgets.id')
                ->join('action_payments', 'payments.id', '=', 'action_payments.payment_id')
                ->where('action_payments.professional_id', auth()->user()->id)
                ->where('action_payments.payment_date', '>=',  $from)
                ->where('action_payments.payment_date', '<=', $to)
                ->where('check_paid', 1)
                ->select('action_payments.*', 'payments.method', DB::raw("CONCAT(DATE_FORMAT(budgets.created_at, '%d/%m/%Y'), ' ', '#', LPAD(payments.budget_id, 5, 0)) as label"))
                ->orderBy('payments.payment_date', 'DESC')
                ->orderBy('payments.id', 'DESC')
                ->get();
        } else {
            if ($summeryType == 'today') {
                $from = Carbon::today();
            } elseif ($summeryType == 'last_7_days') {
                $from = Carbon::now()->subDays(7)->startOfDay();
            } elseif ($summeryType == 'this_month') {
                $from = Carbon::now()->startOfMonth()->startOfDay();
            } elseif ($summeryType == 'this_year') {
                $from = Carbon::now()->startOfYear()->startOfDay();
            } else if ($summeryType == 'last_month') {
                $from = Carbon::now()->subMonthsNoOverflow()->endOfMonth()->startOfDay();
            }
        }
        return $this->getSummeryBetweenDates($from, $to);
    }

    public function getSummeryBetweenDates($from, $to)
    {
        $amountEarningLastMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->paymentRepository->earningLastMonth() : $this->paymentRepository->earningLastMonthByUser();
        $amountEarningCurrentMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->paymentRepository->earningCurrentMonth() : $this->paymentRepository->earningCurrentMonthByUser();
        $amountEarningDay = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->paymentRepository->earningCurrentDay() : $this->paymentRepository->earningCurrentDayByUser();
        $totalPatientCountCurrentMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->patientRepository->countByMonth() : 0;
        $totalPatientCountLastMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->patientRepository->countByLastMonth() : 0;
        $amountExpenseLastMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->expenseRepository->amountLastMonth() : 0;
        $amountExpenseCurrentMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->expenseRepository->amountCurrentMonth() : 0;
        $amountExpenseCurrentDay = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->expenseRepository->amountCurrentDay() : 0;
        $countBudgetApprovedCurrentMonth = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->budgetRepository->countCurrentMonth() : $this->budgetRepository->countCurrentMonthByUser();
        $totalBuddgetApproved = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->budgetRepository->totalBudgetApproved($from, $to) : 0;
        $totalBudgetPaid = (in_array(auth()->user()->roles[0]->id, $this->roles)) ? $this->budgetRepository->totalPaidByDate($from, $to) : 0;


        //User doctors        
        $doctors = [];
        $revenueDoctors = [];

        // Creamos un arreglo asociativo para almacenar los totales por metodo
        $totalMethods = [
            'cash' => 0,
            'debit_card' => 0,
            'credit_card' => 0,
            'check' => 0,
            'transfer' => 0,
        ];

        $professionalId = in_array(auth()->user()->roles[0]->id, $this->roles) ? null : auth()->user()->id;

        $paymentMethods = DB::select("SELECT pm.name, COALESCE(ROUND(SUM(ap.amount)), 0) AS amount FROM payment_methods pm 
            LEFT JOIN payments p ON p.payment_method_id = pm.id 
            LEFT JOIN action_payments ap ON p.id = ap.payment_id 
            WHERE p.deleted_at IS NULL AND ap.deleted_at IS NULL 
            AND ap.payment_date >= ? 
            AND ap.payment_date <= ? 
            AND (ap.professional_id = ? OR ? IS NULL)
            GROUP BY pm.name", [$from, $to, $professionalId, $professionalId]);

        $totalMethods = [];
        foreach ($paymentMethods as $payment) {
            $totalMethods[$payment->name] = $payment->amount;
        }

        $totalCash = $totalMethods['cash'] ?? 0;
        $totalDebitCard = $totalMethods['debit_card'] ?? 0;
        $totalCreditCard = $totalMethods['credit_card'] ?? 0;
        $totalCheck = $totalMethods['check'] ?? 0;
        $totalTrans = $totalMethods['transfer'] ?? 0;

        $transactionsData = [

            [
                "mode" => __("lang.payments.methods.cash"),
                "types" => __("lang.payments.methods.cash_desc"),
                "avatar" => "PocketIcon",
                "avatarVariant" => "light-primary",
                "payment" => getPrice($totalCash),
                "deduction" => false,
            ],
            [
                "mode" => __("lang.payments.methods.check"),
                "types" => __("lang.payments.methods.check_desc"),
                "avatar" => "CheckIcon",
                "avatarVariant" => "light-success",
                "payment" => getPrice($totalCheck),
                "deduction" => false,
            ],
            [
                "mode" => __("lang.payments.methods.debit_card"),
                "types" => __("lang.payments.methods.debit_card_desc"),
                "avatar" => "DollarSignIcon",
                "avatarVariant" => "light-danger",
                "payment" => getPrice($totalDebitCard),
                "deduction" => false,
            ],
            [
                "mode" => __("lang.payments.methods.credit_card"),
                "types" => __("lang.payments.methods.credit_card_desc"),
                "avatar" => "CreditCardIcon",
                "avatarVariant" => "light-warning",
                "payment" => getPrice($totalCreditCard),
                "deduction" => false,
            ],
            [
                "mode" => __("lang.payments.methods.transfer"),
                "types" => __("lang.payments.methods.transfer_desc"),
                "avatar" => "TrendingUpIcon",
                "avatarVariant" => "light-info",
                "payment" => getPrice($totalTrans),
                "deduction" => false,
            ],

        ];

        return [
            "totalEarningCurrentMonth" => $amountEarningCurrentMonth - $amountExpenseCurrentMonth,
            "totalEarningCurrentDay" => $amountEarningDay - $amountExpenseCurrentDay,
            "totalEarningLastMonth" => $amountEarningLastMonth - $amountExpenseLastMonth,
            "amountEarningLastMonth" => $amountEarningLastMonth,
            "amountEarningCurrentMonth" => $amountEarningCurrentMonth,
            "amountEarningDay" => $amountEarningDay,
            "amountExpenseLastMonth" => $amountExpenseLastMonth,
            "amountExpenseCurrentMonth" => $amountExpenseCurrentMonth,
            "amountExpenseCurrentDay" => $amountExpenseCurrentDay,
            "totalPatientCountCurrentMonth" => $totalPatientCountCurrentMonth,
            "totalPatientCountLastMonth" => $totalPatientCountLastMonth,
            "totalCash" => $totalCash,
            "totalDebitCard" => $totalDebitCard,
            "totalCreditCard" => $totalCreditCard,
            "totalCheck" => $totalCheck,
            "totalTrans" => $totalTrans,
            "countBudgetApprovedCurrentMonth" => $countBudgetApprovedCurrentMonth,
            "countAppointmentAssistedCurrentMonth" => 0,
            "doctors" => $doctors,
            "revenueDoctors" => $revenueDoctors,
            "totalBuddgetApproved" => $totalBuddgetApproved,
            "totalBudgetPaid" => $totalBudgetPaid,
            "transactionsData" => $transactionsData
        ];
    }
}
