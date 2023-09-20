<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateLaboratoryActionRequest;
use App\Http\Requests\UpdateLaboratoryActionRequest;
use App\Models\LaboratoryAction;
use App\Repositories\LaboratoryActionRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LaboratoryActionAPIController extends Controller
{
    /** @var  LaboratoryActionRepository */
    private $laboratoryActionRepository;

    public function __construct(LaboratoryActionRepository $laboratoryActionRepo)
    {
        $this->laboratoryActionRepository = $laboratoryActionRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->laboratoryActionRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateLaboratoryActionRequest $request)
    {
        $input = $request->validated();
        try {
            $action = $this->laboratoryActionRepository->create($input);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
        return $this->sendResponse($action, __('lang.saved_successfully', ['operator' => __('lang.laboratory_action')]));
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $action = $this->laboratoryActionRepository->where('id', $id)->first();
        if (empty($action)) {
            return $this->sendError(__('lang.laboratory_action_not_found'));
        }
        return $this->sendResponse($action, 'Laboratory actions retrieved successfully');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LaboratoryAction  $laboratoryAction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLaboratoryActionRequest $request, $id)
    {
        $input = $request->validated();
        try {

            $action = $this->laboratoryActionRepository->update($input, $id);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
        return $this->sendResponse($action, __('lang.updated_successfully', ['operator' => __('lang.laboratory_action')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $action = $this->laboratoryActionRepository->withTrashed()->where('id', $id)->first();
            if (empty($action)) {
                return $this->sendError(__('lang.laboratory_action_not_found'));
            }

            $message = "";
            if (empty($action->deleted_at)) {
                $action->delete($id);
                $message = "locale.inactived_successfully";
            } else {
                $action->restore();
                $message = "locale.activated_successfully";
            }

            return $this->sendResponse($action, __($message, ['operator' => __('lang.laboratory_action')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * [getAllActionLaboratory description]
     *
     * @return  [type]  [return description]
     */
    public function getAllActionLaboratory() {
        $laboratoryActions = $this->laboratoryActionRepository->orderBy('name', 'ASC')->get();
        return $this->sendResponse($laboratoryActions, 'Laboratory Actions retrieved successfully');
    }
}
