<?php

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateFaqRequest;
use App\Http\Requests\UpdateFaqRequest;
use App\Repositories\FaqRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FaqController extends Controller
{
    protected $faqRepository;

    public function __construct(FaqRepository $faqRepository)
    {
        $this->faqRepository = $faqRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('all')) {
            return $this->faqRepository->with('faqItems')->get();
        }

        return $this->faqRepository->with('faqItems')
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
    public function store(CreateFaqRequest $request)
    {
        $input = $request->except('faq_items');

        try {
            return DB::transaction(function () use ($input, $request) {
                $faq = $this->faqRepository->create($input);
                $faq->faqItems()->createMany($request->faq_items);
                return $this->sendResponse($faq, __('lang.saved_successfully', ['operator' => 'FAQ']));
            });
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
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
        $faq = $this->faqRepository->find($id);

        if (empty($faq)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'FAQ']), 201);
        }

        return $this->sendResponse($faq, "FAQ retrievied successfully");
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
    public function update(UpdateFaqRequest $request, $id)
    {
        $faq = $this->faqRepository->find($id);

        if (empty($faq)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'FAQ']), 201);
        }

        $input = $request->except('faq_items', 'id', 'created_at', 'updated_at');

        try {
            return DB::transaction(function () use ($faq, $input, $request) {
                $faq->update($input);
                $newFaqItems = $request['faq_items'];
                foreach ($newFaqItems as $newFaqItem) {
                    unset($newFaqItem['created_at']);
                    unset($newFaqItem['updated_at']);
                    $faq->faqItems()->updateOrCreate(
                        ['id' => $newFaqItem['id'] ?? null], // Utiliza un campo único para buscar el registro existente
                        $newFaqItem // Los datos a actualizar o crear
                    );
                }

                // Elimina los "faq_items" que no están presentes en la solicitud
                $faq->faqItems()->whereNotIn('id', collect($newFaqItems)->pluck('id'))->delete();

                return $this->sendResponse($faq->load('faqItems'), __('lang.updated_successfully', ['operator' => 'FAQ']));
            });
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
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
        $faq = $this->faqRepository->find($id);

        if (empty($faq)) {
            return $this->sendError(__('lang.not_found', ['operator' => 'FAQ']), 201);
        }

        $faq->delete();
        $faq->faqItems()->delete();

        return $this->sendResponse($faq, __('lang.deleted_successfully', ['operator' => 'FAQ']));
    }
}
