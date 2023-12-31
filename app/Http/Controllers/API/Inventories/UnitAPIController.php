<?php

namespace App\Http\Controllers\API\Inventories;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUnitRequest;
use App\Http\Requests\UpdateUnitRequest;
use App\Repositories\Inventories\UnitRepository;
use Exception;
use Illuminate\Http\Request;

class UnitAPIController extends Controller
{

    /** @var  UnitRepository */
    private $unitRepository;

    public function __construct(UnitRepository $unitRepository)
    {
        $this->unitRepository = $unitRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request('all')) {
            return $this->sendResponse($this->unitRepository->orderBy('name', 'ASC')->get(['id', 'name']), 'Units retrieved successfully.');
        }

        $units = $this->unitRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('abbreviation', 'LIKE', '%' . request('search') . '%')
            ->orWhere('description', 'LIKE', '%' . request('search') . '%')
            ->orderBy(request('sortBy'), request('sortDesc') ? 'asc' : 'desc')
            ->withTrashed()
            ->paginate(request('perPage'));
        return $this->sendResponse($units, 'Units retrieved successfully.');
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
    public function store(CreateUnitRequest $request)
    {
        try {
            $input = $request->all();
            $unit = $this->unitRepository->create($input);
            return $this->sendResponse($unit, __('lang.saved_successfully', ['operator' => __('lang.inventories.medicines.unit')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUnitRequest $request, $id)
    {
        $unit = $this->unitRepository->find($id);

        if (empty($unit)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.unit')]), 201);
        }

        try {
            $input = $request->except('id');
            $unit = $this->unitRepository->update($input, $id);
            return $this->sendResponse($unit, __('lang.updated_successfully', ['operator' => __('lang.inventories.medicines.unit')]));
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $unit = $this->unitRepository->withTrashed()->find($id);
        if (empty($unit)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.inventories.medicines.unit')]), 201);
        }

        try {

            if ($unit->deleted_at) {
                $unit->restore();
                return $this->sendResponse($unit, __('lang.restored_successfully', ['operator' => __('lang.inventories.medicines.unit')]));
            } else {

                if ($unit->medicines()->exists()) {
                    return $this->sendError(__('lang.item_associate', ['operator' => __('lang.inventories.medicines.unit'), 'model' => __('lang.inventories.medicines.medicine')]), 201);
                }

                $unit->delete();
                return $this->sendResponse($unit, __('lang.deleted_successfully', ['operator' => __('lang.inventories.medicines.unit')]));
            }
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
