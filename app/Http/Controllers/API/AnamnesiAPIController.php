<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Models\Anamnesi;
use App\Repositories\AnamnesiRepository;
use Illuminate\Http\Request;

class AnamnesiAPIController extends Controller
{
    /** @var AnamnesiRepository */
    private $anamnesiRepository;

    public function __construct(AnamnesiRepository $anamnesiRepo)
    {
        $this->anamnesiRepository = $anamnesiRepo;
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
    public function store(Request $request)
    {
        $input = $request->all();
        if (!isset($input['id'])) {
            $input['id'] = null;
        }
        try {
            $anamnesis = $this->anamnesiRepository->updateOrCreate(['id' => $input['id']], $input);
            return $this->sendResponse($anamnesis, __('lang.saved_successfully', ['operator' => __('lang.anamnesi')]));

        } catch (\Exception $ex) {
            return $this->sendError($ex->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Anamnesi  $anamnesi
     * @return \Illuminate\Http\Response
     */
    public function show(Anamnesi $anamnesi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Anamnesi  $anamnesi
     * @return \Illuminate\Http\Response
     */
    public function edit(Anamnesi $anamnesi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Anamnesi  $anamnesi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Anamnesi $anamnesi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Anamnesi  $anamnesi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Anamnesi $anamnesi)
    {
        //
    }
}
