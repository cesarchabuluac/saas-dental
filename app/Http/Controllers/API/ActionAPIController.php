<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateActionRequest;
use App\Http\Requests\UpdateActionRequest;
use App\Models\Action;
use App\Repositories\ActionRepository;
use Exception;
use Illuminate\Http\Request;

class ActionAPIController extends Controller
{

    /** @var  ActionRepository */
    private $actionRepository;

    public function __construct(ActionRepository $actionRepository)
    {        
        $this->actionRepository = $actionRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->actionRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('group', 'LIKE', '%' . request('search') . '%')
            ->orWhere('area', 'LIKE', '%' . request('search') . '%')
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
    public function store(CreateActionRequest $request)
    {
        $input = $request->validated();
        try {
            $action = $this->actionRepository->create($input);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
        return $this->sendResponse($action, __('lang.saved_successfully', ['operator' => __('lang.clinical_action')]));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $action = $this->actionRepository->where('id', $id)->first();
        if (empty($action)) {
            return $this->sendError(__('lang.clinical_action_not_found'));
        }
        return $this->sendResponse($action, 'Clinical action retrieved successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateActionRequest $request, $id)
    {
        $input = $request->validated();
        try {

            $action = $this->actionRepository->update($input, $id);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
        return $this->sendResponse($action, __('lang.updated_successfully', ['operator' => __('lang.clinical_action')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $action = $this->actionRepository->withTrashed()->where('id', $id)->first();
            if (empty($action)) {
                return $this->sendError(__('lang.clinical_action_not_found'));
            }

            if ($action->deleted_at) {
                $action->restore();
                return $this->sendResponse($action, __("lang.restored_successfully", ['operator' => __('lang.clinical_action')]));
            } else {
                $action->delete($id);
                return $this->sendResponse($action, __("lang.deleted_successfully", ['operator' => __('lang.clinical_action')]));
            }
           
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * [getAllActions description]
     *
     * @return  [type]  [return description]
     */
    public function getAllActions () {
        return $this->actionRepository->orderBy('name', 'ASC')->get();
    }

    /**
     * [getActionsByGroup description]
     *
     * @return  [type]  [return description]
     */
    public function getActionsByGroup ($group_id) {
        $actions =  $this->actionRepository->where('action_group_id', $group_id)->get();
        return $this->sendResponse($actions, 'Actions retrieved successfully');
    }
}
