<?php

namespace App\Http\Controllers\API\V2;

use App\Exports\BudgetActionExport;
use App\Http\Controllers\Controller;
use App\Repositories\BudgetActionRepository;
use App\Repositories\BudgetRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class BudgetActionAPIController extends Controller
{
    /** @var  BudgetRepository */
    private $budgetRepository;

    /** @var  BudgetActionRepository */
    private $budgetActionRepository;

    public function __construct(BudgetRepository $budgetRepo, BudgetActionRepository $budgetActionRepo)
    {
        $this->budgetRepository = $budgetRepo;
        $this->budgetActionRepository = $budgetActionRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $actionsQuery  = $this->budgetActionRepository
            ->with(['budget', 'action', 'laboratoryAction'])
            ->whereHas('actionPayments', function ($q) use ($request) {
                $q->when($request->filled('professional_id'), function ($q) use ($request) {
                    $q->where('professional_id', $request->professional_id);
                });
            })
            ->when($request->filled('action_type'), function ($query) use ($request) {
                return $query->where('action_type', $request->action_type);
            })
            ->when($request->filled('start'), function ($query) use ($request) {
                $start = Carbon::parse($request->start)->startOfDay();
                return $query->where('created_at', '>=', $start);
            })
            ->when($request->filled('end'), function ($query) use ($request) {
                $end = Carbon::parse($request->end)->endOfDay();
                return $query->where('created_at', '<=', $end);
            });

        $actions = $actionsQuery->get();

        if ($request->filled('isDownload')) {
            return Excel::download(new BudgetActionExport($actions), 'acciones_presupuesto.xlsx');  
        }

        //Acción más vendida
        $mostSoldAction = DB::table('budget_actions')
            ->select('action_id', 'action_name', 'action_group_name', DB::raw('count(*) as total'))
            ->join('action_payments', 'budget_actions.id', '=', 'action_payments.budget_action_id')
            ->groupBy('action_id', 'action_name', 'action_group_name')
            ->orderBy('total', 'desc')
            ->take(5)
            ->when($request->filled('action_type'), function ($query) use ($request) {
                return $query->where('budget_actions.action_type', $request->action_type);
            })
            ->when($request->filled('start'), function ($query) use ($request) {
                $start = Carbon::parse($request->start)->startOfDay();
                return $query->where('budget_actions.created_at', '>=', $start);
            })
            ->when($request->filled('end'), function ($query) use ($request) {
                $end = Carbon::parse($request->end)->endOfDay();
                return $query->where('budget_actions.created_at', '<=', $end);
            })
            ->get();


        // Doctor con más acciones
        $topDoctor = DB::table('budget_actions')
            ->select('action_payments.professional_id', 'users.name', 'users.email', DB::raw('count(*) as total'))
            ->join('action_payments', 'budget_actions.id', '=', 'action_payments.budget_action_id')
            ->join('users', 'action_payments.professional_id', '=', 'users.id')
            ->groupBy('action_payments.professional_id', 'users.name', 'users.email')
            ->orderBy('total', 'desc')
            ->when($request->filled('action_type'), function ($query) use ($request) {
                return $query->where('budget_actions.action_type', $request->action_type);
            })
            ->when($request->filled('start'), function ($query) use ($request) {
                $start = Carbon::parse($request->start)->startOfDay();
                return $query->where('budget_actions.created_at', '>=', $start);
            })
            ->when($request->filled('end'), function ($query) use ($request) {
                $end = Carbon::parse($request->end)->endOfDay();
                return $query->where('budget_actions.created_at', '<=', $end);
            })
            ->take(5)
            ->get();

        // Total de acciones por tipo
        $totalActionsByType = $actionsQuery
            ->select('action_type', DB::raw('count(*) as total'))
            ->groupBy('action_type')
            ->get();
            
        return $this->sendResponse([
            'actions' => $actions,
            'most_sold_action' => $mostSoldAction,
            'top_doctors' => $topDoctor,
            'total_actions_by_type' => $totalActionsByType
        ], 'Budget actions retrieved successfully');
    }
}
