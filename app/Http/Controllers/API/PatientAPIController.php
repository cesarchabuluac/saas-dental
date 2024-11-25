<?php

namespace App\Http\Controllers\API;

use App\Exports\PatientReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Mail\StatementDetail;
use App\Mail\UserRegister;
use App\Repositories\AppointmentRepository;
use App\Repositories\DocumentTypeRepository;
use App\Repositories\PatientNumberRepository;
use App\Repositories\PatientRepository;
use App\Repositories\UserRepository;
use App\Services\StorageService;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Prettus\Validator\Exceptions\ValidatorException;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use Prettus\Repository\Criteria\RequestCriteria;

class PatientAPIController extends Controller
{

    /** @var PatientRepository */
    private $patientRepository;

    /** @var  UserRepository */
    private $userRepository;

    protected $storageService;

    /** @var  PatientNumberRepository */
    private $patientNumberRepository;

    protected $appointmentRepository;

    protected $documentTypeRepository;

    public function __construct(PatientRepository $patientRepo, UserRepository $userRepo, PatientNumberRepository $patientNumberRepository, 
        StorageService $storageService, AppointmentRepository $appointmentRepository, DocumentTypeRepository $documentTypeRepository)
    {
        $this->patientRepository = $patientRepo;
        $this->userRepository = $userRepo;
        $this->patientNumberRepository = $patientNumberRepository;
        $this->storageService = $storageService;
        $this->appointmentRepository = $appointmentRepository;
        $this->documentTypeRepository = $documentTypeRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = array(1, 2); //Super Admin | Director
        $userRoleIds = auth()->user()->roles->pluck('id')->toArray();

        //Is Report
        if ($request->boolean('isReport')) {
            $name = $request->name ?? null;
            $start = Carbon::parse($request->start)->startOfDay();
            $end = Carbon::parse($request->end)->endOfDay();
            $perPage = $request->perPage ?? 1;

            $patients = $this->patientRepository->select(
                'patients.id',
                DB::raw("concat(coalesce(patients.name, ' '), ' ', coalesce(patients.last_name, ' '), ' ', coalesce(patients.mother_last_name, ' ')) as patient_name"),
                'patients.email',
                'patients.cellphone',
                'patients.phone',
                'patients.created_at',
                'patients.document_type',
                'patients.rut',
                'patients.deleted_at',
                DB::raw("sum(case when appointments.state = 'assisted' then 1 else 0 end) as num_assisted"),
                DB::raw("sum(case when appointments.state = 'unassisted' then 1 else 0 end) as num_unassisted"),
                DB::raw("sum(case when appointments.state = 'confirmed' then 1 else 0 end) as num_confirmed"),
                DB::raw("sum(case when appointments.state = 'pending' then 1 else 0 end) as num_pending"),
                DB::raw("sum(case when appointments.state = 'canceled' then 1 else 0 end) as num_canceled"),
                DB::raw("(select count(id) from budgets where budgets.patient_id = patients.id and budgets.deleted_at is null and budgets.approved = 1) as num_approved"),
                DB::raw("(select count(id) from budgets where budgets.patient_id = patients.id and budgets.deleted_at is null and budgets.approved = 0) as num_unapproved"),
                DB::raw("ifnull((
                        select sum(action_payments.amount) from action_payments
                        inner join payments on action_payments.payment_id = payments.id and payments.deleted_at is null and action_payments.deleted_at is null
                        inner join budgets on payments.budget_id = budgets.id and budgets.deleted_at is null
                        and payments.check_paid = 1
                        where budgets.patient_id = patients.id
                    ), 0) as total_paid")
            )
                ->leftJoin('appointments', 'patients.id', '=', 'appointments.patient_id')
                ->whereBetween('patients.created_at', [$start, $end])
                ->groupBy(
                    'patients.id',
                    'patients.name',
                    'patients.last_name',
                    'patients.mother_last_name',
                    'patients.email',
                    'patients.cellphone',
                    'patients.phone',
                    'patients.document_type',
                    'patients.rut',
                    'patients.created_at',
                    'patients.deleted_at'
                )
                ->orderBy('patient_name', 'asc');

            if ($name) {
                $patients = $patients
                    ->where('patients.name', 'like', "%{$name}%")
                    ->orWhere('patients.last_name', 'like', "%{$name}%")
                    ->orWhere('patients.mother_last_name', 'like', "%{$name}%")
                    ->orWhere('patients.email', 'like', "%{$name}%")
                    ->orWhere('patients.cellphone', 'like', "%{$name}%")
                    ->orWhere('patients.phone', 'like', "%{$name}%")
                    ->orWhere('patients.rut', 'like', "%{$name}%");
            }

            if ($request->boolean('with_trashed')) {
                $patients = $patients->withTrashed();
            }
            return $patients->paginate($perPage);
        }

        if ($request->boolean('isDashboard')) {

            if (isset($request->start_at) && isset($request->end_at)) {
                $start = Carbon::parse($request->start_at)->startOfDay()->toDateTimeString();
                $end = Carbon::parse($request->end_at)->endOfDay()->toDateTimeString();
            } else {
                $start = Carbon::now()->startOfMonth();
                $end = Carbon::now()->endOfMonth();
            }

            $patients = [];

            if ($request->boolean('only_num_total')) {
                $query = "select a.* from (
                    SELECT a.state, count(a.state) as num_total
                    FROM patients p
                    JOIN appointments a ON p.id = a.patient_id
                    WHERE a.`date`  >='{$start}' and a.`date`  <= '{$end}'
                    /*AND (
                        SELECT COUNT(*)
                        FROM appointments
                        WHERE patient_id = p.id
                        AND `date`  >='{$start}' and `date`  <= '{$end}'
                    ) < 2*/
                    and p.`created_at`  >='{$start}' and p.`created_at`  <= '{$end}'
                    group by a.state
                    ) as a
                    union all
                    (
                        select case when b.approved then 'approved' else 'unapproved' end state, count(b.id) as num_total from budgets b
                        where b.patient_id in (
                            select id from patients p
                            where p.created_at >='{$start}' and p.created_at <= '{$end}'
                            and p.deleted_at is null
                        )
                        group by state
                    )
                    union all (
                        select
                        case when p.check_paid then 'paid' else 'unpaid' end as state, count(p.id) as num_total
                        from action_payments ap
                        inner join payments p on ap.payment_id = p.id
                        inner join budgets b on p.budget_id = b.id
                        where b.patient_id in (
                            select id from patients patient
                            where patient.created_at >='{$start}' and patient.created_at <= '{$end}'
                            and patient.deleted_at is null
                        ) and p.deleted_at is null and ap.deleted_at is null
                        group by state
                    )
                    union all (
                        select 'patient' as state, count(p.id) as num_total from patients p
                        where p.created_at >='{$start}' and p.created_at <= '{$end}'
                        and p.deleted_at is null
                        group by state
                    )";
                $patients = DB::select($query);
            } else {

                if (array_intersect($userRoleIds, $roles)) {
                  $patients =  DB::select("select
                    p.id,
                    concat(coalesce(p.name, ' '), ' ', coalesce(p.last_name, ' '), ' ', coalesce(p.mother_last_name, ' ')) as patient_name,
                    p.email,
                    p.cellphone,
                    p.phone,
                    p.created_at,
                    sum(case when a.state = 'assisted' then 1 else 0 end) as num_assisted,
                    sum(case when a.state = 'unassisted' then 1 else 0 end) as num_unassisted,
                    sum(case when a.state = 'confirmed' then 1 else 0 end) as num_confirmed,
                    sum(case when a.state = 'pending' then 1 else 0 end) as num_pending,
                    sum(case when a.state = 'canceled' then 1 else 0 end) as num_canceled,
                    (select count(id) from budgets where budgets.patient_id = p.id and budgets.deleted_at is null and budgets.approved = 1) as num_approved,
                    (select count(id) from budgets where budgets.patient_id = p.id and budgets.deleted_at is null and budgets.approved = 0) as num_unapproved,
                    ifnull((
                        select sum(action_payments.amount) from action_payments
                        inner join payments on action_payments.payment_id = payments.id and payments.deleted_at is null and action_payments.deleted_at is null
                        inner join budgets on payments.budget_id = budgets.id and budgets.deleted_at is null
                        and payments.check_paid = 1
                        where budgets.patient_id = p.id
                    ), 0) as total_paid
                    from patients p
                    left join appointments a on p.id = a.patient_id and a.deleted_at is null
                    where p.created_at >='{$start}' and p.created_at <= '{$end}'
                    and p.deleted_at is null
                    group by p.id, p.name, p.last_name, p.mother_last_name , p.email, p.cellphone, p.phone, p.created_at
                    order by patient_name asc ");
                } else {
                    $patients = [];
                }
            }

            return $this->sendResponse($patients, 'Patients retrievied successfully');
        }

        if ($request->boolean('isDownload')) {
            return Excel::download(new PatientReport($request), 'Patients.xlsx');
        }

        if ($request->has('appointment') && $request->appointment == 'next') {
            $patients = $this->patientRepository->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('rut', 'LIKE', '%' . $request->search . '%')
                        ->orWhere('phone', 'LIKE', $request->search . '%')
                        ->orWhere('cellphone', 'LIKE', $request->search . '%')
                        ->orWhere('email', 'LIKE', $request->search . '%')
                        ->orWhere(
                            DB::raw(
                                // REPLACE will remove the double white space with single (As defined)
                                "REPLACE(
                        /* CONCAT will concat the columns with defined separator */
                        CONCAT(
                            /* COALESCE will replace null values with empty string */
                            COALESCE(p.name, ''),
                            ' ',
                            COALESCE(p.last_name, ''),
                            ' ',
                            COALESCE(p.mother_last_name, '')
                        ),
                        '  ',
                        ' '
                    )"
                            ),
                            'LIKE',
                            '%' . $request->search . '%'
                        );
                });
            })->get()->map(function ($patient) {
                if (!$patient->getNextAppointments()->get()->isEmpty()) {
                    return [
                        'full_name' => $patient->getFullName(),
                        'document_type' => $patient->document_type,
                        'rut' => $patient->rut,
                        'email' => $patient->email,
                        'cellphone' => $patient->cellphone,
                        'phone' => $patient->phone,
                        'address' => $patient->address,
                        'next' => $patient->getNextAppointments()->get(),
                    ];
                }
                return [];
            });

            return $this->sendResponse($patients, 'Patient retrieved successfully');
        }

        $patients = $this->patientRepository
            ->with(['budgets.payments', 'mobile'])
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('rut', 'LIKE', '%' . $request->search . '%')
                        ->orWhere('phone', 'LIKE', $request->search . '%')
                        ->orWhere('cellphone', 'LIKE', $request->search . '%')
                        ->orWhere('email', 'LIKE', $request->search . '%')
                        ->orWhere(
                            DB::raw(
                                // REPLACE will remove the double white space with single (As defined)
                                "REPLACE(
                    /* CONCAT will concat the columns with defined separator */
                    CONCAT(
                        /* COALESCE operator will handle NUll values as defined value. */
                        COALESCE(name,''),' ',
                        COALESCE(last_name,''),' ',
                        COALESCE(mother_last_name,'')
                    ),
                    /* REPLACE will remove the double white space with single (As defined) */
                    '  ',
                    ' '
                )"
                            ),
                            'LIKE',
                            '%' . $request->search . '%'
                        );
                });
            })
            ->selectRaw('id, name, last_name, mother_last_name, email, rut, document_type, phone, deleted_at')
            ->orderBy('name', 'ASC');

        if ($request->has('filter_by') && $request->filter_by == 'inactive') {
            $patients = $patients->withTrashed()->whereNotNull('deleted_at');
        } else if ($request->has('filter_by') && $request->filter_by == 'active') {
            $patients = $patients->whereNull('deleted_at');
        } else {
            $patients = $patients->withTrashed();
        }

        return $patients->paginate(request('perPage'));
    }

    /**
     * [searchPatients description]
     *
     * @param   Request  $request  [$request description]
     *
     * @return  [type]             [return description]
     */
    public function searchPatients(Request $request)
    {
        $search = trim(strtolower($request->q));

        if (empty($search)) {
            return response()->json([]);
        }

        // Paginación y búsqueda con consulta nativa
        $patients = DB::table('patients')
            ->select('id', 'name', 'last_name', 'mother_last_name', 'rut', 'phone', 'cellphone', 'email')
            ->whereRaw(
                "REPLACE(CONCAT(COALESCE(name, ''), ' ', COALESCE(last_name, ''), ' ', COALESCE(mother_last_name, '')), '  ', ' ') LIKE ?",
                ['%' . $search . '%']
            )
            ->orWhere('rut', 'LIKE', '%' . $search . '%')
            ->orWhere('phone', 'LIKE', '%' . $search . '%')
            ->orWhere('cellphone', 'LIKE', '%' . $search . '%')
            ->orWhere('email', 'LIKE', '%' . $search . '%')
            ->paginate($request->perPage);

        return response()->json($patients);
    }



    // public function searchPatients(Request $request)
    // {
    //     $this->patientRepository->pushCriteria(new RequestCriteria($request));
    //     $search = trim($request->q);
    //     if (!empty($search)) {

    //         $patients = $this->patientRepository
    //             ->where(
    //                 DB::raw(
    //                     // REPLACE will remove the double white space with single (As defined)
    //                     "REPLACE(
    //             /* CONCAT will concat the columns with defined separator */
    //             CONCAT(
    //                 /* COALESCE operator will handle NUll values as defined value. */
    //                 COALESCE(name,''),' ',
    //                 COALESCE(last_name,''),' ',
    //                 COALESCE(mother_last_name,'')
    //             ),
    //         '  ',' ')"
    //                 ),
    //                 'LIKE',
    //                 '%' . $search . '%'
    //             )
    //             ->orWhere('rut', 'LIKE', '%' . $search . '%')
    //             ->orWhere('phone', 'LIKE', '%' . $search . '%')
    //             ->orWhere('cellphone', 'LIKE', '%' . $search . '%')
    //             ->orWhere('email', 'LIKE', '%' . $search . '%')
    //             // ->orderBy(DB::raw('RAND(' . $request->session()->get('session_rand') . ')'))
    //             ->paginate($request->page);
    //     } else {
    //         $patients = [];
    //     }
    //     return response()->json($patients);
    // }

    /**
     * [nextAppointment description]
     *
     * @param   Request  $request  [$request description]
     *
     * @return  [type]             [return description]
     */
    public function nextAppointment(Request $request)
    {

        $searchTerm = '%' . $request->input('search') . '%';
        $now = now();

        $appointments = $this->appointmentRepository
            ->where('date', '>=', $now)
            ->with(['patient', 'user'])
            ->whereHas('patient', function ($query) use ($searchTerm) {
                $query->where(DB::raw("CONCAT(COALESCE(name,''),' ',COALESCE(last_name,''),' ',COALESCE(mother_last_name,''))"), 'LIKE', $searchTerm)
                    ->orWhere('rut', 'LIKE', $searchTerm)
                    ->orWhere('phone', 'LIKE', $searchTerm)
                    ->orWhere('cellphone', 'LIKE', $searchTerm)
                    ->orWhere('email', 'LIKE', $searchTerm);
            })
            ->get();

        $result = $appointments->map(function ($item) {
            return [
                'full_name' => $item->patient->getFullName(),
                'document_type' => $item->patient->document_type,
                'rut' => $item->patient->rut,
                'email' => $item->patient->email,
                'cellphone' => $item->patient->cellphone,
                'phone' => $item->patient->phone,
                'address' => $item->patient->address,
                'intern_observation' => $item->intern_observation,
                'date' => $item->date,
                'state' => $item->state,
                'name' => $item->user->name,
                'custom_date_diff_humans' => $item->custom_date_diff_humans,
                'next' => [], //$patient->getNextAppointments()->get(),
            ];
        });

        return $this->sendResponse($result, "Data retrievied successfully");

        // $searchTerm = '%' . $request->input('search') . '%';

        // return $this->appointmentRepository
        //     ->where('date', '>=', date('Y-m-d H:i:s'))
        //     ->whereHas('patient', function ($query) use ($searchTerm) {
        //         $query->where(DB::raw("CONCAT(COALESCE(name,''),' ',COALESCE(last_name,''),' ',COALESCE(mother_last_name,''))"), 'LIKE', $searchTerm)
        //             ->orWhere('rut', 'LIKE', $searchTerm)
        //             ->orWhere('phone', 'LIKE', $searchTerm)
        //             ->orWhere('cellphone', 'LIKE', $searchTerm)
        //             ->orWhere('email', 'LIKE', $searchTerm);
        //     })
        //     ->get()->map(function ($item) {
        //         return [
        //             'full_name' => $item->patient->getFullName(),
        //             'document_type' => $item->patient->document_type,
        //             'rut' => $item->patient->rut,
        //             'email' => $item->patient->email,
        //             'cellphone' => $item->patient->cellphone,
        //             'phone' => $item->patient->phone,
        //             'address' => $item->patient->address,
        //             'intern_observation' => $item->intern_observation,
        //             'date' => $item->date,
        //             'state' => $item->state,
        //             'name' => $item->user->name,
        //             'custom_date_diff_humans' => $item->custom_date_diff_humans,
        //             'next' => [] //$patient->getNextAppointments()->get(),
        //         ];
        //     });
    }

    public function filter(Request $request)
    {
        $patient = $this->patientRepository
            ->inRandomOrder('name')
            ->paginate(100);
        return $this->sendResponse($patient, 'Patient retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePatientRequest $request)
    {
        $input = $request->only(
            'name',
            'last_name',
            'mother_last_name',
            'document_type',
            'rut',
            'birthday',
            'email',
            'phone_country',
            'cellphone',
            'phone',
            'address',
            'comments',
            'access_web'
        );

        $documentType =$this->documentTypeRepository->where('description', $input['document_type']['value'])->first();
        
        $input['document_type_id'] = $documentType->id ?? 1;
        $input['document_type'] = $input['document_type']['label'];
        
        $input['is_default'] = 0;
        $input['active'] = 1;
        $input['positive_balance'] = 0;
        $input['birthday'] = (isset($input['birthday']) && !empty($input['birthday'])) ? Carbon::createFromFormat('d/m/Y', $input['birthday'])->format('Y-m-d') : null;

        try {

            DB::beginTransaction();
            if (isset($request->access_web) && ($request->access_web == 1 || $request->access_web == true)) {
                $inputUser = $request->except('last_name', 'mother_last_name', 'document_type', 'rut', 'phone');
                $inputUser['password'] = Hash::make('123456'); //Generic password
                $inputUser['api_token'] = Str::random(60);
                $user = $this->userRepository->create($inputUser);
                $user->syncRoles('Paciente');
                // event(new UserRoleChangedEvent($user));
                $input['user_id'] = $user->id;
                // Mail::to($user->email)->send(new UserRegister($user, $user->api_token));
            }

            $patient = $this->patientRepository->create($input);
            if ($patient) {
                $inputNumbers['patient_id'] = $patient->id;
                $inputNumbers['country_calling_code'] = $request['mobile']['countryCallingCode'];
                $inputNumbers['country_code'] = $request['mobile']['countryCode'];
                $inputNumbers['e164'] = $request['mobile']['e164'];
                $inputNumbers['format_international'] = $request['mobile']['formatInternational'];
                $inputNumbers['format_national'] = $request['mobile']['formatNational'];
                $inputNumbers['formatted_number'] = $request['mobile']['formattedNumber'];
                $inputNumbers['is_valid'] = $request['mobile']['isValid'];
                $inputNumbers['national_number'] = $request['mobile']['nationalNumber'];
                $inputNumbers['phone_number'] = $request['mobile']['phoneNumber'];
                $inputNumbers['type'] = "cellphone"; //$request['mobile']['type'];
                $inputNumbers['uri'] = $request['mobile']['uri'];
                $patient->mobile()->create($inputNumbers);
            }

            if (isset($request->change_avatar)) {
                if (isset($request->avatar) && $request->avatar) {
                    $this->storageService->setTenant(tenant());
                    $path = $this->storageService->saveImageFromBase64($request->avatar, "patients", $patient->id);
                    $patient->update([
                        'avatar' => global_asset("/storage/" . $path),
                    ]);
                }
            }

            DB::commit();
        } catch (ValidatorException $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
        return $this->sendResponse($patient, __('lang.saved_successfully', ['operator' => __('lang.patient')]));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $patient = $this->patientRepository
            ->withTrashed()
            ->with([
                'orders.branch',
                'orders.laboratory',
                'orders.professional',
                'user',
                'mobile',
                'anamnesi',
                'budgets.user',
                'budgets.patient',
                'budgets.budgetActions',
                'histories.action',
                'histories.user'
            ])
            ->find($id);
        if (empty($patient)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'lang.patient']));
        }

        $totalCost = $patient->budgets->reduce(function ($carry, $budget) {
            return $carry + ($budget->approved ? $budget->total_cost : 0);
        });
        $totalPaid = $patient->budgets->reduce(function ($carry, $budget) {
            return $carry + ($budget->approved ? $budget->total_paid : 0);
        });
        $totalDebt = $patient->budgets->reduce(function ($carry, $budget) {
            return $carry + ($budget->approved ? $budget->total_debt : 0);
        });

        if ($request->boolean('isMail')) {
            if (config('settings.enable_email_notification')) {
                // Mail::to($request->email)->send(new StatementDetail($patient));
            }
        } else if ($request->boolean('isPdf')) {
            $isPDF = true;
            $pdf = \PDF::loadView('pdf.statement-detail', compact('patient', 'totalCost', 'totalPaid', 'totalDebt', 'isPDF'));
            return $pdf->download("StatementDetail.pdf");
        } else if ($request->boolean('isPrint')) {
            $isPDF = true;
            $pdf = \PDF::loadView('pdf.statement-detail', compact('patient', 'totalCost', 'totalPaid', 'totalDebt', 'isPDF'));
            // $pdf->setPaper('letter', 'portrait');
            // $pdf->getDomPDF()->set_option("enable_php", true);

            $pdf->render();
            return response($pdf->output(), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="invoice.pdf"',
            ]);
        }

        return $this->sendResponse($patient, 'Patient retrieved successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePatientRequest $request, $id)
    {
        $oldPatient = $this->patientRepository->where('id', $id)->first();
        if (empty($oldPatient)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'lang.patient']));
        }

        $input = $request->only(
            'name',
            'last_name',
            'mother_last_name',
            'document_type',
            'rut',
            'birthday',
            'email',
            'phone_country',
            'cellphone',
            'phone',
            'address',
            'comments',
            'access_web'
        );

        $documentType =$this->documentTypeRepository->where('description', $input['document_type']['value'])->first();
        $input['document_type'] = $input['document_type']['value'];
        $accessWeb = filter_var($input['access_web'], FILTER_VALIDATE_BOOLEAN);
        $input['birthday'] = (isset($input['birthday']) && !empty($input['birthday'])) ? Carbon::createFromFormat('d/m/Y', $input['birthday'])->format('Y-m-d') : null;

        $input['document_type_id'] = $documentType->id ?? 1;

        DB::beginTransaction();

        try {

            $patient = $this->patientRepository->update($input, $id);
            if ($patient) {
                $inputNumbers['patient_id'] = $patient->id;
                $inputNumbers['country_calling_code'] = $request['mobile']['countryCallingCode'];
                $inputNumbers['country_code'] = $request['mobile']['countryCode'];
                $inputNumbers['e164'] = $request['mobile']['e164'];
                $inputNumbers['format_international'] = $request['mobile']['formatInternational'];
                $inputNumbers['format_national'] = $request['mobile']['formatNational'];
                $inputNumbers['formatted_number'] = $request['mobile']['formattedNumber'];
                $inputNumbers['is_valid'] = $request['mobile']['isValid'];
                $inputNumbers['national_number'] = $request['mobile']['nationalNumber'];
                $inputNumbers['phone_number'] = $request['mobile']['phoneNumber'];
                $inputNumbers['type'] = "cellphone"; //$request['mobile']['type'];
                $inputNumbers['uri'] = $request['mobile']['uri'];
                $this->patientNumberRepository->updateOrCreate(['patient_id' => $patient->id], $inputNumbers);
            }

            if (isset($request->change_avatar)) {
                if (isset($request->avatar) && $request->avatar) {

                    if ($oldPatient->avatar) {
                        $oldPath = parse_url($oldPatient->avatar);
                        $path = $oldPath['path'];
                        @unlink(public_path($path));
                    }

                    $this->storageService->setTenant(tenant());
                    $path = $this->storageService->saveImageFromBase64($request->avatar, "patients", $patient->id);
                    $patient->update([
                        'avatar' => global_asset("/storage/" . $path),
                    ]);
                }
            }

            DB::commit();
        } catch (Exception $ex) {
            DB::rollback();
            return $this->sendError($ex->getMessage());
        }
        return $this->sendResponse($patient, __('lang.updated_successfully', ['operator' => __('lang.patient')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $patient = $this->patientRepository->withTrashed()->find($id);
        if (empty($patient)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'lang.patient']));
        }

        if (!$patient->deleted_at && $patient->total_debt > 0) {
            return $this->sendError(__('lang.no_deactive_patient'), 201);
        }

        try {

            DB::beginTransaction();
            $message = $this->togglePatientStatus($patient);
            DB::commit();

            return $this->sendResponse($patient, __($message, ['operator' => __('lang.patient')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    private function togglePatientStatus($patient)
    {
        if (empty($patient->deleted_at)) {
            $patient->delete($patient->id);
            return "lang.inactived_successfully";
        } else {
            $patient->restore();
            return "lang.activated_successfully";
        }
    }
}
