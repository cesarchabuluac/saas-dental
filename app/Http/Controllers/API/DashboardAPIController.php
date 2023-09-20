<?php

namespace App\Http\Controllers\API;

use App\Criteria\ProfessionalCriteria;
use App\Http\Controllers\Controller;
use App\Interfaces\IDashboardService;
use App\Repositories\AppointmentRepository;
use App\Repositories\ExpenseRepository;
use App\Repositories\PatientRepository;
use App\Repositories\PaymentRepository;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DashboardAPIController extends Controller
{
    protected $dashboardService;

    public function __construct(IDashboardService $dashboardService)
    {
        $this->dashboardService = $dashboardService;
    }

    // return dashboard summery
    public function dashboardSummery($summeryType, Request $request)
    {
        return $this->dashboardService->getSummery($summeryType, $request);
    }
}
