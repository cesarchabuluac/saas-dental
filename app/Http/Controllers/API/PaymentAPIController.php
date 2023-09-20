<?php


namespace App\Http\Controllers\API;

use App\Criteria\PaymentCriteria;
use App\Exports\PaymentReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePartialPaymentRequest;
use App\Http\Requests\CreatePaymentRequest;
use App\Jobs\SendEmail;
use App\Mail\Payment;
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
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

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
        $startAt = $request->filled('start') ? Carbon::parse($request->start)->startOfDay() : null;
        $endAt = $request->filled('end') ? Carbon::parse($request->end)->endOfDay() : null;

        if ($request->boolean('isDownload')) {
            return Excel::download(new PaymentReport($request, $this->paymentRepository), 'Payments.xlsx');
        }

        $payments = $this->paymentRepository->pushCriteria(new PaymentCriteria())
            ->with(['branch', 'budget.patient', 'check'])
            ->where(function ($query) use ($startAt, $endAt) {
                if ($startAt && $endAt) {
                    $query->whereBetween('payments.payment_date', [$startAt, $endAt]);
                }
            })
            ->where(function ($query) {
                $query->whereHas('budget.patient', function ($q) {
                    $q->where(DB::raw("REPLACE(CONCAT(COALESCE(name,''),' ',COALESCE(last_name,''),' ',COALESCE(mother_last_name,'')),'  ',' ')"), 'LIKE', request('search') . '%');
                })
                    ->orWhere('payments.id', 'LIKE', request('search') . '%')
                    ->orWhere(function ($q) {
                        $q->whereHas('check', function ($q) {
                            $q->where('date', 'LIKE', request('search') . '%')
                                ->orWhere('reference', 'LIKE', request('search') . '%')
                                ->orWhere('bank', 'LIKE', request('search') . '%')
                                ->orWhere('serie', 'LIKE', request('search') . '%');
                        });
                    });
            })
            ->where(function ($q) {
                $q->whereNull('payments.has_partials')
                    ->orWhere('payments.has_partials', 0);
            })
            ->when(request('filter_by'), function ($q, $filterBy) {
                if ($filterBy === 'paid') {
                    $q->where('payments.check_paid', true);
                } elseif ($filterBy === 'unpaid') {
                    $q->where('payments.check_paid', false);
                }
            })
            ->when(request('method'), function ($query, $method) {
                return $query->where('payments.method', $method);
            })
            ->orderBy('payments.id', 'DESC')
            ->paginate(request('perPage'));

        return $payments;
    }

    /**
     * [dashboard description]
     *
     * @param   Request  $request  [$request description]
     *
     * @return  [type]             [return description]
     */
    public function dashboard(Request $request)
    {
        $totalEarningMonth = 0;
        $totalEarningDay = 0;
        $totalCash = 0;
        $totalCashDay = 0;
        $totalCheck = 0;
        $totalCheckDay = 0;
        $totalTrans = 0;
        $totalTransDay = 0;
        $totalCreditCard = 0;
        $totalCreditCardDay = 0;
        $totalDebitCard = 0;
        $totalDebitCardDay = 0;
        $totalExpenseMonth = 0;
        $totalExpenseDay = 0;
        $appointments = [];
        $totalAppointmentPerMonth = [];
        $totalAppointmentConfirmed = 0;
        $totalAppointmentCanceled = 0;
        $totalAppointmentPending = 0;
        $roles = array(1, 2);

        //Current month
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();
        $start_day = Carbon::now()->startOfDay();
        $end_day = Carbon::now()->endOfDay();

        //Get payments
        $paymentDays = $this->paymentRepository->join('action_payments as ap', 'payments.id', '=', 'ap.payment_id')
            ->where(function ($query) use ($roles) {
                if (!in_array(auth()->user()->roles[0]->id, $roles)) {
                    $query->where('ap.professional_id', auth()->user()->id);
                }
            })->where('check_paid', 1)
            ->selectRaw('payments.method, SUM(ap.amount) as amount')
            ->where('ap.payment_date', '>=',  $start_day)
            ->where('ap.payment_date', '<=', $end_day)
            ->where('is_closed', 0)
            ->groupBy('payments.method')
            ->get();

        foreach ($paymentDays as $key => $payment) {
            $totalEarningDay += $payment->amount;
            switch ($payment->method) {
                case "cash":
                    $totalCashDay += $payment->amount;
                    break;
                case "debit_card":
                    $totalDebitCardDay += $payment->amount;
                    break;
                case "credit_card":
                    $totalCreditCardDay += $payment->amount;
                    break;
                case "check":
                    $totalCheckDay += $payment->amount;
                    break;
                case "transfer":
                    $totalTransDay += $payment->amount;
                    break;
            }
        }


        //Payment of month
        $paymentMonths = $this->paymentRepository
            ->join('action_payments as ap', 'payments.id', '=', 'ap.payment_id')
            ->where(function ($query) use ($roles) {
                if (!in_array(auth()->user()->roles[0]->id, $roles)) {
                    $query->where('ap.professional_id', auth()->user()->id);
                }
            })->where('check_paid', 1)
            ->selectRaw('payments.method, SUM(ap.amount) as amount')
            ->where('ap.payment_date', '>=',  $start)
            ->where('ap.payment_date', '<=', $end)
            ->groupBy('payments.method')
            ->get();

        foreach ($paymentMonths as $key => $payment) {
            $totalEarningMonth += $payment->amount;
            switch ($payment->method) {
                case "cash":
                    $totalCash += $payment->amount;
                    break;
                case "debit_card":
                    $totalDebitCard += $payment->amount;
                    break;
                case "credit_card":
                    $totalCreditCard += $payment->amount;
                    break;
                case "check":
                    $totalCheck += $payment->amount;
                    break;
                case "transfer":
                    $totalTrans += $payment->amount;
                    break;
            }
        }


        $payments =
            $this->paymentRepository
            ->join('budgets', 'payments.budget_id', '=', 'budgets.id')
            ->where(function ($query) use ($roles) {
                if (!in_array(auth()->user()->roles[0]->id, $roles)) {
                    $query->whereHas('actionPayments', function ($q) {
                        $q->where('professional_id', auth()->user()->id);
                    });
                }
            })
            ->where('ap.payment_date', '>=',  $start)
            ->where('ap.payment_date', '<=', $end)
            ->where('check_paid', 1)
            ->select('payments.*', DB::raw("CONCAT(DATE_FORMAT(budgets.created_at, '%d/%m/%Y'), ' ', '#', LPAD(payments.budget_id, 5, 0)) as label"))
            ->cursor();


        //Monthly expenses
        $totalExpenseMonth = (in_array(auth()->user()->roles[0]->id, $roles)) ?
            $this->expenseRepository->whereDate('date', '>=', $start)->whereDate('date', '<=', $end)->sum('amount') : 0;

        //Day expenses
        $totalExpenseDay = (in_array(auth()->user()->roles[0]->id, $roles)) ?
            $this->expenseRepository->whereDate('date', '>=', Carbon::now()->format('Y-m-d'))->whereDate('date', '<=', Carbon::now()->format('Y-m-d'))->where('is_closed', 0)->sum('amount') : 0;

        //Get payments for last month
        $first = Carbon::now()->startOfMonth()->subMonthsNoOverflow()->toDateString();
        $last = Carbon::now()->subMonthsNoOverflow()->endOfMonth()->toDateString();
        $this->totalEarningLastMonth = $this->paymentRepository->join('action_payments as ap', 'payments.id', '=', 'ap.payment_id')
            ->where(function ($query) use ($roles) {
                if (!in_array(auth()->user()->roles[0]->id, $roles)) {
                    $query->whereHas('actionPayments', function ($q) {
                        $q->where('user_id', auth()->user()->id);
                    });
                }
            })
            ->whereDate('ap.payment_date', '>=', $first)
            ->whereDate('ap.payment_date', '<=', $last)
            ->where('payments.check_paid', 1)
            ->sum('ap.amount');


        $this->totalExpenseLastMonth = (in_array(auth()->user()->roles[0]->id, $roles)) ? $this->expenseRepository->whereDate('date', '>=', $first)->whereDate('date', '<=', $last)->sum('amount') : 0;
        $patientCount = (in_array(auth()->user()->roles[0]->id, $roles)) ? $this->patientRepository->where(DB::raw('cast(created_at as date)'), '>=', $start)->where(DB::raw('cast(created_at as date)'), '<=', $end)->count() : 0;

        if (!in_array(auth()->user()->roles[0]->id, $roles)) {

            $appointments = $this->appointmentRepository->where(function ($q)  use ($roles, $end) {
                if (!in_array(auth()->user()->roles[0]->id, $roles)) {
                    $q->where('user_id', auth()->user()->id);
                }
            })
                ->where(DB::raw('month(`date`)'), DB::raw("month(current_date())"))
                ->where(DB::raw('year(`date`)'), DB::raw("year(current_date())"))
                ->whereIn('state', ['confirmed', 'canceled', 'pending'])
                ->get();


            $totalAppointmentConfirmed = $appointments->where('state', 'confirmed')->count();
            $totalAppointmentCanceled = $appointments->where('state', 'canceled')->count();
            $totalAppointmentPending = $appointments->where('state', 'pending')->count();


            $userId = auth()->user()->id;
            $query = "SELECT my.name, IFNULL(T1.total_month, 0) AS total FROM month_years my
            LEFT JOIN (
            SELECT MONTH(`date`) AS `mes`, SUM(1) AS total_month
            FROM appointments WHERE YEAR(`date`) = YEAR(curdate()) AND user_id = $userId
            AND MONTH(`date`) = MONTH(curdate()) GROUP BY `mes`) T1 ON T1.mes = my.id";
            $totalAppointmentPerMonth  = collect(DB::select($query));
        }

        return $this->sendResponse([
            'currentMonth' => Carbon::now()->format('F'),
            'payments' => $payments ?? [],
            'totalEarningLastMonth' => $this->totalEarningLastMonth - $this->totalExpenseLastMonth,
            'totalEarningMonth' => $totalEarningMonth - $totalExpenseMonth,
            'totalEarningDay' => $totalEarningDay,
            'totalExpenseDay' => $totalExpenseDay,
            'totalEarningsPerDay' => $totalEarningDay - $totalExpenseDay,
            'totalExpenseMonth' => $totalExpenseMonth,
            'totalExpenseLastMonth' => $this->totalExpenseLastMonth,
            'patientCount' => $patientCount ?? 0,
            'totalCash' => $totalCash,
            'totalCashDay' => $totalCashDay,
            'totalCheck' => $totalCheck,
            'totalCheckDay' => $totalCheckDay,
            'totalTrans' => $totalTrans,
            'totalTransDay' => $totalTransDay,
            'totalCreditCard' => $totalCreditCard,
            'totalCreditCardDay' => $totalCreditCardDay,
            'totalDebitCard' => $totalDebitCard,
            'totalDebitCardDay' => $totalDebitCardDay,
            'appointments' => $appointments,
            'appointmentPerMonth' => $totalAppointmentPerMonth,
            'totalAppointmentConfirmed' => $totalAppointmentConfirmed,
            'totalAppointmentCanceled' => $totalAppointmentCanceled,
            'totalAppointmentPending' => $totalAppointmentPending

        ], 'Dashboard Payment retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePaymentRequest $request)
    {
        $budget = $this->budgetRepository->find($request->budget_id);

        if (empty($budget)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.budget')]));
        }

        try {

            DB::beginTransaction();

            $inputPayment['budget_id'] = $request->budget_id;
            if ($request->type['value'] != 3) {
                $inputPayment['amount'] = floatval($request->amount) - floatval($request->positive_balance);
                $inputPayment['method'] = $request->payment_method['value'];
            } else {
                $inputPayment['amount'] = 0;
                $inputPayment['method'] = '';
                $inputPayment['has_partials'] = true;
                $inputPayment['divided_on'] = $request->payments_number;
            }


            $inputPayment['check_paid'] = ($request->payment_method['value'] === 'check' || $request->payment_method['value'] === 'transfer') ? false : true;
            $inputPayment['branch_office_id'] = $budget->branch_office_id;
            $inputPayment['payment_date'] = Carbon::now();

            if ($request->has('payment_method') && !empty($request->payment_method['value'])) {
                $inputPayment['payment_method_id'] = $this->paymentMethodRepository->where('name', $request->payment_method['value'])->first()->id ?? null;
            }

            $payment = $this->paymentRepository->create($inputPayment);

            if ($request->payment_method['value'] === 'check' || $request->payment_method['value'] === 'transfer') {
                $inputCheck['payment_id'] = $payment->id;
                $inputCheck['reference'] = $request->check['reference'];
                $inputCheck['bank'] = $request->check['bank'];
                $inputCheck['serie'] = $request->check['serie'];
                $inputCheck['date'] = $request->check['date'];
                $check = $this->checkRepository->create($inputCheck);
                $updatePayment['check_id']  = $check->id;
                $payment = $this->paymentRepository->update($updatePayment, $payment->id);
            }

            foreach ($request->clinical_actions as $clinicalAction) {
                if ($clinicalAction['assigned_income'] < 0) continue;
                $inputActionPayment['payment_id'] = $payment->id;
                $inputActionPayment['user_id'] = auth()->user()->id;
                $inputActionPayment['budget_action_id'] = $clinicalAction['id'];
                $inputActionPayment['professional_id'] = $clinicalAction['professional']['id'];
                $inputActionPayment['amount'] = ($request->type['value'] != 3) ? $clinicalAction['assigned_income'] : 0;
                $inputActionPayment['payment_date'] = Carbon::now();
                $this->actionPaymentRepository->create($inputActionPayment);
            }

            foreach ($request->laboratory_actions as $laboratoryAction) {
                if ($laboratoryAction['assigned_income'] < 0) continue;
                $inputActionPayment['payment_id'] = $payment->id;
                $inputActionPayment['user_id'] = auth()->user()->id;
                $inputActionPayment['budget_action_id'] = $laboratoryAction['id'];
                $inputActionPayment['professional_id'] = null; // $laboratoryAction['professional']['id'];
                $inputActionPayment['amount'] = ($request->type['value'] != 3) ? $laboratoryAction['assigned_income'] : 0;
                $inputActionPayment['payment_date'] = Carbon::now();
                $this->actionPaymentRepository->create($inputActionPayment);
            }

            if (floatval($request->positive_balance) > 0) {
                // $budget->patient->increment('positive_balance', floatval($request->positive_balance));
                $this->positiveBalanceRepository->create([
                    'user_id' => auth()->user()->id,
                    'patient_id' => $budget->patient_id,
                    'payment_id' => $payment->id,
                    'total_action' => $request->total_action,
                    'amount_paid' => $request->amount,
                    'amount' => $request->positive_balance,
                ]);
            }

            DB::commit();

            $payment->load(['budget.user']);
            $budget->load(['patient', 'budgetActions', 'branch', 'payments', 'user']);
            return $this->sendResponse(['budget' => $budget, 'payment' => $payment], __('lang.saved_successfully', ['operator' => __('lang.payment')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }

    public function storeCollection(Request $request)
    {
        $enableTax = config('settings.enable_tax') ?? false;
        $defaultTax = config('settings.default_tax') ?? 0;

        try {
            //First create Budget
            $inputBudget['approved'] = 1;
            $inputBudget['patient_id'] = $request['patient']['id'];
            $inputBudget['user_id'] = auth()->user()->id;
            $inputBudget['branch_office_id'] = 1;
            $inputBudget['subtotal'] = $request['cost'];
            if ($enableTax) {
                $inputBudget['tax'] = $request['cost'] * (($defaultTax / 100));
                $inputBudget['total'] = $request['cost'] + $inputBudget['tax'];
            } else {
                $inputBudget['total'] = $request['cost'];
            }

            DB::beginTransaction();
            $budget = $this->budgetRepository->create($inputBudget);
            if ($budget) {
                // Budget Actions
                $inputBudgetAction['budget_id'] = $budget->id;
                $inputBudgetAction['action_id'] = $request['action']['id'];
                $inputBudgetAction['action_group_id'] = ($request['type']['value'] == 1) ? $request['action']['action_group_id'] : null;
                $inputBudgetAction['action_name'] = $request['action']['name'];
                $inputBudgetAction['action_group_name'] = ($request['type']['value'] == 1) ? $request['action']['group'] : null;
                $inputBudgetAction['price'] =  $inputBudget['total']; //$request->cost;
                $inputBudgetAction['action_type'] = $request['type']['value'] == 1 ? 'clinical' : 'laboratory';
                $inputBudgetAction['area'] = ($request['type']['value'] == 1) ? $request['action']['area'] : null;
                $inputBudgetAction['status'] = 'Pendiente';
                $inputBudgetAction['discount'] = 0;
                $budgetAction = $this->budgetActionRepository->create($inputBudgetAction);
                if ($budgetAction) {
                    $inputPayment['branch_office_id'] = 1;
                    $inputPayment['budget_id'] = $budget->id;
                    $inputPayment['amount'] = $budgetAction->price;
                    $inputPayment['method'] = $request['method']['value'];
                    $inputPayment['payment_date'] = Carbon::now();
                    if ($inputPayment['method'] === 'check' || $inputPayment['method'] === 'transfer') {
                        $inputPayment['check_paid'] = false;
                    } else {
                        $inputPayment['check_paid'] = true;
                    }
                    if ($request->has('method') && !empty($request['method']['value'])) {
                        $inputPayment['payment_method_id'] = $this->paymentMethodRepository->where('name', $request['method']['value'])->first()->id ?? null;
                    }

                    $payment = $this->paymentRepository->create($inputPayment);
                    if ($payment) {
                        //Payment action
                        $inputPaymentAction['payment_id'] = $payment->id;
                        $inputPaymentAction['budget_action_id'] = $budgetAction->id;
                        $inputPaymentAction['user_id'] = auth()->user()->id;
                        $inputPaymentAction['professional_id'] = null;
                        $inputPaymentAction['amount'] = $payment->amount;
                        $inputPaymentAction['payment_date'] = Carbon::now();
                        $paymentAction = $this->actionPaymentRepository->create($inputPaymentAction);
                        if ($paymentAction) {
                            if ($inputPayment['method'] === 'check' || $inputPayment['method'] === 'transfer') {
                                $inputCheck['payment_id'] = $payment->id;
                                $inputCheck['reference'] = $request['check']['reference'];
                                $inputCheck['bank'] = $request['check']['bank'];
                                $inputCheck['serie'] = $request['check']['serie'];
                                $inputCheck['date'] = $request['check']['date'];
                                $check = $this->checkRepository->create($inputCheck);
                                $updatePayment['check_id']  = $check->id;
                                $payment = $this->paymentRepository->update($updatePayment, $payment->id);
                            }
                        } else {
                            DB::rollBack();
                            return $this->sendError($paymentAction->getMessage());
                        }
                    } else {
                        DB::rollBack();
                        return $this->sendError($payment->getMessage());
                    }
                } else {
                    DB::rollBack();
                    return $this->sendError($budgetAction->getMessage());
                }
                DB::commit();
                return $this->sendResponse($budget, __('lang.saved_successfully', ['operator' => __('lang.payment')]));
            } else {
                DB::rollBack();
                return $this->sendError($budget->getMessage());
            }
        } catch (\Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }

    public function storePartial(CreatePartialPaymentRequest $request)
    {

        $budget = $this->budgetRepository->query()->findOrFail($request['budget_id']);
        $parentPayment = $budget->first_payment;

        try {

            DB::beginTransaction();
            $inputPayment['budget_id'] = $budget->id;
            $inputPayment['branch_office_id'] = $budget->branch_office_id;
            $inputPayment['parent_payment'] = $parentPayment['id'];
            $inputPayment['amount'] = round($budget->partial_amount, 2);
            $inputPayment['method'] = $request['payment_method']['value'];
            $inputPayment['has_partials'] = false;
            $inputPayment['check_paid'] = ($request->payment_method['value'] === 'check' || $request->payment_method['value'] === 'transfer') ? false : true;
            $inputPayment['payment_date'] = Carbon::now();
            if ($request->has('payment_method') && !empty($request['payment_method']['value'])) {
                $inputPayment['payment_method_id'] = $this->paymentMethodRepository->where('name', $request->payment_method['value'])->first()->id ?? null;
            }

            $payment = $this->paymentRepository->create($inputPayment);

            if ($request->payment_method['value'] === 'check' || $request->payment_method['value'] === 'transfer') {
                $checkInput['payment_id'] = $payment->id;
                $checkInput['reference'] = $request['check']['reference'];
                $checkInput['bank'] = $request['check']['bank'];
                $checkInput['serie'] = $request['check']['serie'];
                $checkInput['date'] = $request['check']['date'];
                $check = $this->checkRepository->create($checkInput);

                $updatePayment['check_id']  = $check->id;
                $payment = $this->paymentRepository->update($updatePayment, $payment->id);
            }

            //replicate
            $actions = $this->actionPaymentRepository->with(['budgetAction'])
                ->where('payment_id', $parentPayment['id'])
                ->get();

            $newBalance = $payment->amount;
            foreach ($actions as $key => $action) {
                $debt = $action->budgetAction->debt;
                if ($debt > 0 && $newBalance > 0) {
                    $paymentAmount = min($newBalance, $debt);
                    $newPayment = $action->replicate();
                    $newPayment['payment_id'] = $payment->id;
                    $newPayment['amount'] = $paymentAmount;
                    $newPayment['user_id'] = auth()->user()->id;
                    $newPayment['payment_date'] = Carbon::now();
                    $newPayment->save();
                    $newBalance -= $paymentAmount;
                }
            }

            DB::commit();
            return $this->sendResponse(['budget' => $budget, 'payment' => $payment], __('lang.saved_successfully', ['operator' => __('lang.payment')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }


    /**
     * Display the specified resource.
     *g683
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function preview($id, Request $request)
    {
        $payment = $this->paymentRepository->with(['budget.patient', 'branch', 'actionPayments.actions', 'check'])->find($id);
        return $this->sendResponse($payment, __('lang.retrievied_successfully', ['operator' => __('lang.payment')]));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function send(Request $request)
    {
        $payment = $this->paymentRepository->with(['budget.patient', 'branch', 'actionPayments.actions', 'check'])->find($request->id);

        if (empty($payment)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.payment')]));
        }
        try {

            if (config('settings.enable_email_notification')) {
                if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
                    // Mail::to($request->email)->send(new BudgetMail($budget));
                    dispatch(new SendEmail('payment', $request->email, $payment));
                }
            }

            return $this->sendResponse($payment, __('lang.sended_successfully', ['operator' => __('lang.payment')]));
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $payment = $this->paymentRepository->with('actionPayments')->find($id);

        if (empty($payment)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.payment')]));
        }

        $parentPayment = $payment->budget->first_payment ?? null;

        try {

            DB::beginTransaction();

            $payment->update([
                'comments' => $request->comments,
            ]);

            $payment->delete();
            $payment->actionPayments()->delete();
            $payment->check()->delete();

            if (!empty($parentPayment)) {
                $count = $this->paymentRepository->where('parent_payment', $parentPayment->id)->count();
                if ($count <= 0) {
                    $this->paymentRepository->delete($parentPayment->id);
                    $this->actionPaymentRepository->where('payment_id', $parentPayment->id)->delete();
                }
            }

            DB::commit();

            return $this->sendResponse($payment, __('lang.deleted_successfully', ['operator' => __('lang.payment')]));
        } catch (\Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }

    public function donwloadPDF(Request $request)
    {
        $payment = $this->paymentRepository->with(['budget.patient', 'branch', 'actionPayments.actions', 'check'])->find($request->id);
        $pdf = \PDF::loadView('pdf.payment', ['payment' => $payment]);
        $pdf->setPaper('letter', 'portrait');

        if ($request->boolean('isPrint')) {
            $pdf->render();
            return response($pdf->output(), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="budget.pdf"',
            ]);
        }

        $pdf->getDomPDF()->set_option("enable_php", true);
        return $pdf->download("Ficha-de-Pago.pdf");
    }
}
