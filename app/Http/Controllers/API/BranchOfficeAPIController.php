<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBranchOfficeRequest;
use App\Http\Requests\UpdateBranchOfficeRequest;
use App\Models\BranchOffice;
use App\Repositories\BranchOfficeRepository;
use App\Services\StorageService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class BranchOfficeAPIController extends Controller
{

    /** @var  BranchOfficeRepository */
    private $branchOfficeRepository;
    private $storageService;

    public function __construct(BranchOfficeRepository $branchOfficeRepo, StorageService $storageService)
    {
        $this->branchOfficeRepository = $branchOfficeRepo;
        $this->storageService = $storageService;
    }

    public function getAll()
    {
        return $this->branchOfficeRepository->all();
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->branchOfficeRepository->query()
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('email', 'LIKE', '%' . request('search') . '%')
            ->orWhere('phone', 'LIKE', '%' . request('search') . '%')
            ->orWhere('address', 'LIKE', '%' . request('search') . '%')
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
    public function store(CreateBranchOfficeRequest $request)
    {
        $input = $request->except('file', 'file2');
        try {

            DB::beginTransaction();
            $branchOffice = $this->branchOfficeRepository->create($input);
            DB::commit();

            if ($request->hasFile('file')) {
                $this->storageService->setTenant(tenant());
                $path = $this->storageService->saveFile($request, "file", "letterhead", $branchOffice->id);
                $branchOffice->update(['letterhead_1' => global_asset("/storage/" . $path)]);
            }

            if ($request->hasFile('file2')) {
                $this->storageService->setTenant(tenant());
                $path = $this->storageService->saveFile($request, "file2", "letterhead", $branchOffice->id);
                $branchOffice->update(['letterhead_2' => global_asset("/storage/" . $path)]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
        return $this->sendResponse($branchOffice, __('lang.saved_successfully', ['operator' => __('lang.branch_office')]));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BranchOffice  $branchOffice
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $branchOffice = $this->branchOfficeRepository->where('id', $id)->first();
        if (empty($branchOffice)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'lang.branch_office']));
        }

        return $this->sendResponse($branchOffice, 'Branch retrieved successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(BranchOffice $branchOffice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Log::info($request->all());
        $input = $request->only('address', 'country', 'email', 'name', 'phone', 'postal_code');

        $oldBranchOffice = $this->branchOfficeRepository->find($id);

        if (empty($oldBranchOffice)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.branch_office')]));
        }

        try {

            DB::beginTransaction();
            $branchOffice = $this->branchOfficeRepository->update($input, $id);
            DB::commit();

            if ($request->hasFile('file')) {
                $this->storageService->setTenant(tenant());
                $path = $this->storageService->saveFile($request, "file", "letterhead", $branchOffice->id);
                $branchOffice->update(['letterhead_1' => global_asset("/storage/" . $path)]);
                if ($oldBranchOffice->letterhead_1) {
                    $this->storageService->removeFile($oldBranchOffice->letterhead_1);                    
                }
            }

            if ($request->hasFile('file2')) {
                $this->storageService->setTenant(tenant());
                $path = $this->storageService->saveFile($request, "file2", "letterhead", $branchOffice->id);
                $branchOffice->update(['letterhead_2' => global_asset("/storage/" . $path)]);
                if ($oldBranchOffice->letterhead_2) {
                    $this->storageService->removeFile($oldBranchOffice->letterhead_2);
                }
            }

            return $this->sendResponse($branchOffice, __('lang.updated_successfully', ['operator' => __('lang.branch_office')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $branchOffice = $this->branchOfficeRepository->find($id);

        if (empty($branchOffice)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.branch_office')]));
        }

        try {
            $newStatus = !$branchOffice->is_active;
            $branchOffice->update(['is_active' => $newStatus]);

            $messageKey = $newStatus ? 'enabled_successfully' : 'disabled_successfully';
            $message = __('lang.' . $messageKey, ['operator' => __('lang.branch_office')]);

            return $this->sendResponse($branchOffice, $message);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
