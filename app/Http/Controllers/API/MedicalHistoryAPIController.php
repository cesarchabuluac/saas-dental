<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Repositories\BudgetActionRepository;
use App\Repositories\MedicalHistoryRepository;
use App\Repositories\PatientRepository;
use App\Services\StorageService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MedicalHistoryAPIController extends Controller
{

    /** @var  MedicalHistoryRepository */
    private $medicalHistoryRepository;

    /** @var BudgetActionRepository */
    private $budgetActionRepository;

    /** @var PatientRepository */
    private $patientRepository;

    private $storageService;

    public function __construct(
        MedicalHistoryRepository $medicalHistoryRepository,
        BudgetActionRepository $budgetActionRepository,
        PatientRepository $patientRepository,
        StorageService $storageService
    ) {
        $this->medicalHistoryRepository = $medicalHistoryRepository;
        $this->budgetActionRepository = $budgetActionRepository;
        $this->patientRepository = $patientRepository;
        $this->storageService = $storageService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {

            $comments = $request->comments;
            $patient_id = $request->patient_id;
            $items = json_decode($request->items, true);
            $history = [];
            $firstInsert = 0;

            DB::beginTransaction();

            if (!empty($items)) {
                foreach ($items as $key => $action) {
                    $input['status'] = $action['status'];
                    $this->budgetActionRepository->update($input, $action['id']);

                    $inputHistory['user_id'] = auth()->user()->id;
                    $inputHistory['patient_id'] = $patient_id;
                    $inputHistory['budget_action_id'] = $action['id'];
                    $inputHistory['action_type'] = $action['action_type'];
                    $inputHistory['comments'] = $comments;

                    if ($key === 0) {
                        $history = $this->medicalHistoryRepository->create($inputHistory);
                        $firstInsert = $history->id;
                        $this->uploadFile($history->id, $request);
                    } else {
                        $inputHistory['parent_id'] = $firstInsert;
                        unset($inputHistory['comments']);
                        $history = $this->medicalHistoryRepository->create($inputHistory);
                    }
                }
            } else {

                $input['user_id'] = auth()->user()->id;
                $input['patient_id']  = $patient_id;
                $input['budget_action_id'] = 0;
                $input['comments'] = $comments;
                $history = $this->medicalHistoryRepository->create($input);
                $firstInsert = $history->id;
                $this->uploadFile($history->id, $request);
            }

            DB::commit();

            return $this->sendResponse($history, __('lang.saved_successfully', ['operator' => __('lang.medical_histories.evolution')]));
        } catch (Exception $e) {
            DB::rollback();
            return $this->sendError($e->getMessage());
        }
    }

    private function uploadFile($id, Request $request)
    {
        Log::info($request->all());
        if ($request->hasFile('file')) {
            $this->storageService->setTenant(tenant());
            $path = "patients/{$request->patient_id}/evolutions";
            Log::info($path);
            $path = $this->storageService->saveFile($request, "file", $path, $id);
            Log::warning($path);
            $history = $this->medicalHistoryRepository->find($id);
            $history->update([
                'file' =>  global_asset("/storage/" . $path),
            ]);
        }
    }

    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MedicalHistorie  $medicalHistorie
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MedicalHistorie  $medicalHistorie
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
