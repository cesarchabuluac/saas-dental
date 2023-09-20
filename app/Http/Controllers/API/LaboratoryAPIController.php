<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateLaboratoryRequest;
use App\Http\Requests\UpdateLaboratoryRequest;
use App\Models\Laboratory;
use App\Repositories\LaboratoryRepository;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LaboratoryAPIController extends Controller
{

    /** @var  LaboratoryRepository */
    private $laboratoryRepository;

    public function __construct(LaboratoryRepository $laboratoryRepo)
    {
        $this->laboratoryRepository = $laboratoryRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->laboratoryRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
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
    public function store(CreateLaboratoryRequest $request)
    {
        $input = $request->except('mobile');

        try {
            DB::beginTransaction();
            $laboratory = $this->laboratoryRepository->create($input);
            DB::commit();
            return $this->sendResponse($laboratory, __('lang.saved_successfully', ['operator' => __('lang.laboratory')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $laboratory = $this->laboratoryRepository->where('id', $id)->first();
        if (empty($laboratory)) {
            return $this->sendError(__('lang.laboratory_not_found'));
        }
        return $this->sendResponse($laboratory, __('lang.retrievied_successfully', ['operator' => __('lang.laboratory')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function edit(Laboratory $laboratory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLaboratoryRequest $request, $id)
    {
        $input = $request->only('name', 'phone', 'address', 'document_type', 'rut', 'phone_country');
        $laboratory = $this->laboratoryRepository->find($id);

        if (empty($laboratory)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.laboratory')]));
        }

        try {
            DB::beginTransaction();
            $laboratory = $this->laboratoryRepository->update($input, $id);
            DB::commit();
            return $this->sendResponse($laboratory, __('lang.updated_successfully', ['operator' => __('lang.laboratory')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Laboratory  $laboratory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $laboratory = $this->laboratoryRepository->where('id', $id)->first();
            if (empty($laboratory)) {
                return $this->sendError(__('lang.not_found', ['operator' => __('lang.laboratory')]));
            }

            $laboratory->update(['is_active' => $laboratory->is_active ? false : true]);

            $message = "";
            if (!$laboratory->is_active) {                
                $message = "lang.inactived_successfully";
            } else {
                $message = "lang.activated_successfully";
            }

            return $this->sendResponse($laboratory, __($message, ['operator' => __('lang.laboratory')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * [getAllLaboratory description]
     *
     * @return  [type]  [return description]
     */
    public function getAllLaboratory()
    {
        $laboratories = $this->laboratoryRepository->where('is_active', true)->get(['id', 'name']);
        return $this->sendResponse($laboratories, __('lang.retrievied_successfully', ['operator' => __('lang.laboratory')]));
    }
}
