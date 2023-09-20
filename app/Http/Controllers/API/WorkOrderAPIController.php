<?php

namespace App\Http\Controllers\API;

use App\Criteria\WorkOrderCriteria;
use App\Http\Controllers\Controller;
use App\Repositories\WorkOrderRepository;
use App\Http\Requests\CreateWorkOrderRequest;
use App\Http\Requests\UpdateWorkOrderRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

class WorkOrderAPIController extends Controller
{

    /** @var  WorkOrderRepository */
    private $workOrderRepository;

    public function __construct(WorkOrderRepository $workOrderRepo)
    {
        $this->workOrderRepository = $workOrderRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->workOrderRepository->pushCriteria(new WorkOrderCriteria($request));

        return $this->workOrderRepository->with(['user', 'patient', 'professional', 'branch', 'laboratory'])
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->whereHas('patient', function ($q) use ($request) {
                        return $q->where(
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
                        '  ',' ')"
                            ),
                            'LIKE',
                            '%' . $request->search . '%'
                        )->orWhere(function ($q) use ($request) {
                            $q->orWhere('rut', 'LIKE', '%' . $request->search . '%')
                                ->orWhere('phone', 'LIKE', '%' . $request->search . '%')
                                ->orWhere('cellphone', 'LIKE', '%' . $request->search . '%')
                                ->orWhere('email', 'LIKE', '%' . $request->search . '%');
                        });
                    });
                });
            })
            ->orderByDesc('delivery_date')
            ->paginate(request('perPage'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateWorkOrderRequest $request)
    {

        $input = $request->all();

        $input['application_date'] = !empty($input['application_date']) ? Carbon::createFromFormat('d/m/Y', $input['application_date'])->format('Y-m-d') : null;
        $input['delivery_date'] = !empty($input['delivery_date']) ? Carbon::createFromFormat('d/m/Y', $input['delivery_date'])->format('Y-m-d') : null;

        $input['user_id'] = auth()->user()->id;

        try {
            DB::beginTransaction();
            $order = $this->workOrderRepository->create($input);
            DB::commit();

            return $this->sendResponse($order, __('lang.saved_successfully', ['operator' => __('lang.work_order')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkOrder  $workOrder
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $workOrder = $this->workOrderRepository->with(['user', 'patient', 'professional', 'branch', 'laboratory'])->find($id);
        return $this->sendResponse($workOrder, __('lang.retrievied_successfully', ['operator' => __('lang.work_order')]));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkOrder  $workOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $workOrder = $this->workOrderRepository->find($id);

        $input = $request->only(
            'application_date',
            'area_dental',
            'clinical_specification',
            'colour',
            'delivery_date',
            'delivery_materials',
            'lab_specification',
            'patient_id',
            'professional_id',
            'status',
            'user_id',
            'work_todo',
            'laboratory_id',
        );

        if (empty($workOrder)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.work_order')]));
        }

        if (isset($request->mark_as)) {
            $input['status'] = $request->mark_as;
        } else {
            // $input['application_date'] = !empty($input['application_date']) ? Carbon::createFromFormat('d/m/Y', $input['application_date'])->format('Y-m-d') : null;
            // $input['delivery_date'] = !empty($input['delivery_date']) ? Carbon::createFromFormat('d/m/Y', $input['delivery_date'])->format('Y-m-d') : null;
        }

        try {
            DB::beginTransaction();
            $order = $this->workOrderRepository->update($input, $id);
            DB::commit();

            $order->load(['user', 'patient', 'professional', 'branch', 'laboratory']);

            return $this->sendResponse($order, __('lang.updated_successfully', ['operator' => __('lang.work_order')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $workOrder = $this->workOrderRepository->find($id);

        if (empty($workOrder)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.work_order')]));
        }

        try {
            DB::beginTransaction();
            $workOrder->delete();
            DB::commit();
            return $this->sendResponse($workOrder, __('lang.deleted_successfully', ['operator' => __('lang.work_order')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * [donwloadPDF description]
     *
     * @param   Request  $request  [$request description]
     *
     * @return  [type]             [return description]
     */
    public function donwloadPDF(Request $request)
    {
        $workOrder = $this->workOrderRepository->find($request->id);
        Log::info($workOrder->branch);

        $pdf = \PDF::loadView('pdf.workOrder', ['order' => $workOrder]);
        $pdf->getDomPDF()->set_option("enable_php", true);
        // return $pdf->stream("Presupuesto.pdf");
        return $pdf->download("Work_Order.pdf");
    }
}
