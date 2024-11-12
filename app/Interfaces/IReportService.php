<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface IReportService
{
    public function getMedicinesWithStock(Request $request);
}
