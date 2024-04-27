<?php

namespace App\Http\Controllers\API\V2;

use App\Http\Controllers\Controller;
use App\Repositories\BudgetActionRepository;
use App\Repositories\BudgetRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class BudgetAPIController extends Controller
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
        $budgets = $this->budgetRepository->with(['patient'])
            ->whereHas('patient', function ($q) use ($request) {
                $q->where(function ($q) use ($request) {
                    $q->where(DB::raw(
                        "REPLACE(
                        CONCAT(
                            COALESCE(name,''),' ',
                            COALESCE(last_name,''),' ',
                            COALESCE(mother_last_name,'')
                        ),
                        '  ',' ')"
                    ), 'LIKE', '%' . $request->search . '%')
                        ->orWhere('rut', 'LIKE', '%' . $request->search . '%')
                        ->orWhere('phone', 'LIKE', '%' . $request->search . '%')
                        ->orWhere('cellphone', 'LIKE', '%' . $request->search . '%')
                        ->orWhere('email', 'LIKE', '%' . $request->search . '%');
                });
            })
            ->select('budgets.*')
            ->addSelect(DB::raw('SUM(action_payments.amount) as total_paid'))
            ->leftJoin('payments', function ($query) {
                return $query->on('budgets.id', '=', 'payments.budget_id')
                    ->where('payments.check_paid', 1);
            })
            ->leftJoin('action_payments', 'payments.id', '=', 'action_payments.payment_id')
            ->groupBy('budgets.id')
            ->havingRaw('(budgets.total - total_paid) > 0')
            ->orderBy('budgets.created_at', 'desc');
        return $budgets->paginate(request('perPage'));
    }
}
