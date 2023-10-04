<?php

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePlanRequest;
use App\Http\Requests\UpdatePlanRequest;
use App\Repositories\CurrencyRepository;
use App\Repositories\PlanRepository;
use App\Services\DigitalOceanService;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Stripe;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\File;

class PlanController extends Controller
{

    protected $planRepository;
    protected $currencyRepository;
    protected $stripe;
    protected $digitalOceanService;

    public function __construct(PlanRepository $planRepository, CurrencyRepository $currencyRepository, DigitalOceanService $digitalOceanService)
    {
        $this->planRepository = $planRepository;
        $this->currencyRepository = $currencyRepository;
        $this->digitalOceanService = $digitalOceanService;

        // through stripe api, make plan in stripe.com
        if (boolval(config()->get('enable_stripe_mode'))) {
            $this->stripe = Stripe::make(config()->get('stripe.live.secret'));
        } else {
            $this->stripe = Stripe::make(config()->get('stripe.sandbox.secret'));
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $domains = $this->digitalOceanService->getDomains();
        return $this->planRepository->with('currency')
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
    public function store(CreatePlanRequest $request, ImageService $imageService)
    {

        $input = $request->all();
        $currency = $this->currencyRepository->find($input['currency_id']);
        unset($input['currency_id']);

        $imageNameWithStringFolderPath = $imageService->uploadImageFileAndGetPath($request->image, 'plans');

        $plan = $this->stripe->plans()->create([
            'name' => $input['name'],
            'amount' => $input['amount'],
            'currency' => $currency->code,
            'interval' => $input['interval'],
            'statement_descriptor' => 'Soft-Dental',
            'metadata' => [
                'description' => $input['description'] ?? null,
            ],
        ]);

        // stripe always add extra 00 in amount
        $amount = (int) $plan['amount'] / 100;

        $savedPlan = $this->planRepository->create([
            'api_id' => $plan['id'],
            'image' => $imageNameWithStringFolderPath,
            'name' => $plan['name'],
            'amount' => $amount,
            'product_id' => $plan['product'],
            'description' => $plan['metadata']['description'],
            'is_popular' => $input['is_popular'] === 'true' ? true : false,
            'currency_id' => $currency->id,
            'currency' => $plan['currency'],
            'interval' => $plan['interval'],
            'limit_doctor' => $input['limit_doctor'],
            'limit_assistant' => $input['limit_assistant'],
            'limit_receptionist' => $input['limit_receptionist'],
            'limit_patient' => $input['limit_patient'],
            'limit_domains' => $input['limit_domains'] ?? 0,
            'limit_purchases' => $input['limit_purchases'] ?? 0,
            'limit_invoices' => $input['limit_invoices'] ?? 0,
        ]);

        // $savedPlan->features()->sync($data['features']);

        return $this->sendResponse($savedPlan, __('lang.saved_successfully', ['operator' => $plan['name']]));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $plan = $this->planRepository->find($id);

        if (empty($plan)) {
            return $this->sendError(__('lang.not_found', ['operator' => $plan->name]));
        }

        return $this->sendResponse($plan, __('lang.retrievied_successfully', ['operator' => $plan->name]));
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
    public function update(UpdatePlanRequest $request, $id, ImageService $imageService)
    {
        $plan = $this->planRepository->find($id);
        $this->stripe->plans()->update($plan['api_id'], [
            'name' => $request->name,
        ]);


        if ($request->file('image')) {
            $imageNameWithStringFolderPath = $imageService->uploadImageFileAndGetPath($request->image, 'plans');
            $plan->update([
                'image' => $imageNameWithStringFolderPath,
            ]);
        }

        $input = $request->safe()->except('features', 'image');
        $input['is_popular'] = boolval($input['is_popular']);
        $plan->update($input);
        // $plan->features()->sync($request->validated('features'));

        return $this->sendResponse($plan, __('lang.updated_successfully', ['operator' => $plan->name]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $plan = null;
        try {
            $result = DB::transaction(function () use ($id, &$plan) {
                $plan = $this->planRepository->find($id);

                if (!$plan->tenants()->exists()) {
                    $this->stripe->plans()->delete($plan->api_id);
                    $plan->forceDelete();

                    // Elimina la imagen asociada si existe
                    $imagePath = public_path($plan->image);
                    if (File::exists($imagePath)) {
                        File::delete($imagePath);
                    }
                    return true;
                }

                throw new Exception(__('lang.plan_associate_help'));
            });

            if ($result) {
                return $this->sendResponse($plan, __('lang.deleted_successfully', ['operator' => 'lang.plan']));
            }

            return $result;
        } catch (ModelNotFoundException $ex) {
            return $this->sendError(__('Plan not found.'));
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
    }
}
