<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateActionGroupRequest;
use App\Models\ActionGroup;
use App\Repositories\ActionGroupRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ActionGroupAPIController extends Controller
{
    /** @var  ActionGroupRepository */
    private $actionGroupRepository;

    public function __construct(ActionGroupRepository $actionGroupRepo)
    {
        $this->actionGroupRepository = $actionGroupRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->actionGroupRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
    }

    /**
     * 
     */
    public function getAll()
    {
        $groups = $this->actionGroupRepository
            ->with(['actions'])
            ->get(['id', 'name']);
        return $this->sendResponse($groups, 'Actions groups retrieved successfully');
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
    public function store(CreateActionGroupRequest $request)
    {
        $input = $request->all();
        $group = $this->actionGroupRepository->create($input);
        return $this->sendResponse($group, 'Actions groups saved successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ActionGroup  $actionGroup
     * @return \Illuminate\Http\Response
     */
    public function show(ActionGroup $actionGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ActionGroup  $actionGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(ActionGroup $actionGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ActionGroup  $actionGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ActionGroup $actionGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ActionGroup  $actionGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(ActionGroup $actionGroup)
    {
        //
    }
}
