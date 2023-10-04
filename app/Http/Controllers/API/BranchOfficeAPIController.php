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
        $searchTerm = '%' . request('search') . '%';
        return $this->branchOfficeRepository->query()
            ->where(function ($query) use ($searchTerm) {
                $query->where('name', 'LIKE', $searchTerm)
                    ->orWhere('email', 'LIKE', $searchTerm)
                    ->orWhere('phone', 'LIKE', $searchTerm)
                    ->orWhere('address', 'LIKE', $searchTerm);
            })
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
            return DB::transaction(function () use ($input, $request) {
                $branchOffice = $this->branchOfficeRepository->create($input);
                if ($request->has('file')) {
                    $this->handleLetterheadFile($request, $branchOffice, 'file', 'letterhead_1', null);
                }
                if ($request->has('file2')) {
                    $this->handleLetterheadFile($request, $branchOffice, 'file2', 'letterhead_2', null);
                }
                return $this->sendResponse($branchOffice, __('lang.saved_successfully', ['operator' => __('lang.branch_office')]));
            });
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
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
        $input = $request->only('address', 'country', 'email', 'name', 'phone', 'postal_code');
        $oldBranchOffice = $this->branchOfficeRepository->find($id);

        if (empty($oldBranchOffice)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.branch_office')]));
        }

        try {
            return DB::transaction(function () use ($input, $request, $id, $oldBranchOffice) {
                $branchOffice = $this->branchOfficeRepository->update($input, $id);
                if ($request->has('file')) {
                    $this->handleLetterheadFile($request, $branchOffice, 'file', 'letterhead_1', $oldBranchOffice);
                }
                if ($request->has('file2')) {
                    $this->handleLetterheadFile($request, $branchOffice, 'file2', 'letterhead_2', $oldBranchOffice);
                }
                return $this->sendResponse($branchOffice, __('lang.updated_successfully', ['operator' => __('lang.branch_office')]));
            });
        } catch (Exception $e) {
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

    private function handleLetterheadFile($request, $branchOffice, $fileFieldName, $updateField, $oldBranchOffice = null)
    {
        if ($request->hasFile($fileFieldName)) {
            $this->storageService->setTenant(tenant());
            $path = $this->storageService->saveFile($request, $fileFieldName, "letterhead", $branchOffice->id);
            $branchOffice->update([$updateField => global_asset("/storage/" . $path)]);

            if (!empty($oldBranchOffice)) {
                if ($oldBranchOffice->$updateField) {
                    $this->storageService->removeFile($oldBranchOffice->$updateField);
                }
            }
        }
    }
}
