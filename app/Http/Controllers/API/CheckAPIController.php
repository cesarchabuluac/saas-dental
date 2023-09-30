<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Repositories\CheckRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CheckAPIController extends Controller
{
    /** @var  CheckRepository */
    private $checkRepository;

    public function __construct(CheckRepository $checkRepo)
    {
        $this->checkRepository = $checkRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $checks = $this->checkRepository->with('payment.branch')
            ->where('charged', false);

        if ($request->has('expires_on')) {
            unset($request->is_charged);
            $filtro = $request->get('expires_on');
            if ($filtro === 'expired') {
                $checks->where('date', '<', now());
            } elseif ($filtro === 'last_7_days') {
                $checks->where('date', '>=', now())->where('date', '<=', now()->addDays(7));
            } elseif ($filtro === 'this_month') {
                $checks->where('date', '>=', now())->where('date', '<=', now()->endOfMonth());
            } elseif ($filtro === 'expired_last_7_days') {
                $checks->where('date', '>=', now()->subDays(7))->where('date', '<', now()->subDays(6));
            } elseif ($filtro === 'expired_this_month') {
                $checks->where('date', '>=', now()->subMonth())->where('date', '<', now()->startOfMonth());
            }
        }

        $checks = $checks->whereHas('payment.branch', function ($query) use ($request) {
            return $query->when($request->filled('branch_id'), function ($query) use ($request) {
                return $query->where('branch_offices.id', $request->branch_id);
            });
        })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('is_charged'), function ($query) use ($request) {
                    return $query->where('charged', $request->is_charged);
                });
            })

            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('date', 'LIKE', $request->search . '%')
                        ->orWhere('reference', 'LIKE', $request->search . '%')
                        ->orWhere('bank', 'LIKE', $request->search . '%')
                        ->orWhere('serie', 'LIKE', $request->search . '%')
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('payment.branch', function ($q) use ($request) {
                                $q->where('branch_offices.name', 'LIKE', $request->search . '%');
                            });
                        });
                });
            })
            ->orderBy('date', 'DESC')
            ->paginate(request('perPage'));

        return $checks;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $check = $this->checkRepository->where('id', $request->id)->first();
        if (empty($check)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.check')]));
        }

        try {

            DB::beginTransaction();

            $check->payment()->where('check_id', $check->id)->update(['check_paid' => true, 'payment_date' => Carbon::now()]);
            $check->payment->actionPayments()->update(['payment_date' => Carbon::now()]);
            $check->update(['charged' => true]);

            DB::commit();

            return $this->sendResponse($check, __('lang.applied_successfully', ['operator' => __('lang.check')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }

    public function destroy($id, Request $request)
    {
        $check = $this->checkRepository->find($id);

        if (empty($check)) {
            return $this->sendError(__('lang.not_found', ['opertor' => __('lang.check')]), 201);
        }

        try {
            DB::beginTransaction();

            $check->update([
                'comments' => $request->comments,
            ]);

            $check->delete();
            $check->payment->delete();
            DB::commit();

            return $this->sendResponse($check, __('lang.deleted_successfully', ['operator' => __('lang.check')]));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->sendError($ex->getMessage());
        }
    }
}
