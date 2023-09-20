<?php

namespace App\Http\Controllers\API\V2;

use App\Http\Controllers\Controller;
use App\Repositories\ActionPaymentRepository;
use App\Repositories\AppointmentRepository;
use App\Repositories\BudgetActionRepository;
use App\Repositories\BudgetRepository;
use App\Repositories\CheckRepository;
use App\Repositories\ExpenseRepository;
use App\Repositories\PatientRepository;
use App\Repositories\PaymentMethodRepository;
use App\Repositories\PaymentRepository;
use App\Repositories\PositiveBalanceRepository;
use Illuminate\Http\Request;

class PaymentAPIController extends Controller
{
    /** @var  PaymentRepository */
    private $paymentRepository;

    /** @var  BudgetRepository */
    private $budgetRepository;

    /** @var  BudgetActionRepository */
    private $budgetActionRepository;

    /** @var  CheckRepository */
    private $checkRepository;

    /** @var  ActionPaymentRepository */
    private $actionPaymentRepository;

    /** @var  PatientRepository */
    private $patientRepository;

    /** @var  ExpenseRepository */
    private $expenseRepository;

    /** @var  AppointmentRepository */
    private $appointmentRepository;

    private $totalEarningLastMonth;
    private $totalExpenseLastMonth;
    private $positiveBalanceRepository;
    private $paymentMethodRepository;

    public function __construct(
        PaymentRepository $paymentRepo,
        BudgetRepository $budgetRepo,
        CheckRepository $checkRepo,
        ActionPaymentRepository $actionPaymentRepo,
        PatientRepository $patientRepo,
        ExpenseRepository $expenseRepo,
        BudgetActionRepository $budgetActionRepo,
        AppointmentRepository $appointmentRepo,
        PositiveBalanceRepository $positiveBalanceRepository,
        PaymentMethodRepository $paymentMethodRepository
    ) {

        $this->paymentRepository = $paymentRepo;
        $this->budgetRepository = $budgetRepo;
        $this->checkRepository = $checkRepo;
        $this->actionPaymentRepository = $actionPaymentRepo;
        $this->patientRepository = $patientRepo;
        $this->expenseRepository = $expenseRepo;
        $this->budgetActionRepository = $budgetActionRepo;
        $this->appointmentRepository = $appointmentRepo;
        $this->positiveBalanceRepository = $positiveBalanceRepository;
        $this->paymentMethodRepository = $paymentMethodRepository;
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
    }
}
