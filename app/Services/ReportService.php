<?php

namespace App\Services;

use App\Criteria\UserCriteria;
use App\Interfaces\IDashboardService;
use App\Interfaces\IReportService;
use App\Repositories\BudgetRepository;
use Carbon\Carbon;
use App\Repositories\ExpenseRepository;
use App\Repositories\Inventories\StockRepository;
use App\Repositories\PatientRepository;
use App\Repositories\PaymentRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ReportService implements IReportService
{
    private $stockRepository;
    
    public function __construct(StockRepository $stockRepository)
    {
        $this->stockRepository = $stockRepository;
    }

    public function getMedicinesWithStock(Request $request)
    {
        $warehouseId = $request->warehouse_id;

        $medicines = $this->stockRepository->query()
            ->with([
                'medicine.brand',
                'medicine.unit',
                'medicine.category',
                'warehouse'
            ])
            ->when($warehouseId && $warehouseId != 0, function ($query) use ($warehouseId) {
                return $query->where('warehouse_id', $warehouseId);
            })
            ->orderBy('medicine_id', 'ASC')
            ->get();     

        return $medicines;
    }
}