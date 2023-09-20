<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface IDashboardService
{
    public function getSummery($summeryType, Request $request);
}
