<?php

namespace App\Http\Controllers\API\V2;

use App\Http\Controllers\Controller;
use App\Interfaces\IReportService;
use Illuminate\Http\Request;

class ReportAPIController extends Controller
{
    private $reportService;

    public function __construct(IReportService $reportService)
    {
        $this->reportService = $reportService;
    }

    public function getMedicinesWithStock(Request $request)
    {
        return $this->reportService->getMedicinesWithStock($request);
    }
}
