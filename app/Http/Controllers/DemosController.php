<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\DemoCreateRequest;
use App\Http\Requests\DemoUpdateRequest;
use App\Repositories\DemoRepository;
use App\Validators\DemoValidator;

/**
 * Class DemosController.
 *
 * @package namespace App\Http\Controllers;
 */
class DemosController extends Controller
{
    /**
     * @var DemoRepository
     */
    protected $repository;

    /**
     * @var DemoValidator
     */
    protected $validator;

    /**
     * DemosController constructor.
     *
     * @param DemoRepository $repository
     * @param DemoValidator $validator
     */
    public function __construct(DemoRepository $repository, DemoValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $demos = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $demos,
            ]);
        }

        return view('demos.index', compact('demos'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  DemoCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(DemoCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $demo = $this->repository->create($request->all());

            $response = [
                'message' => 'Demo created.',
                'data'    => $demo->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $demo = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $demo,
            ]);
        }

        return view('demos.show', compact('demo'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $demo = $this->repository->find($id);

        return view('demos.edit', compact('demo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  DemoUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(DemoUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $demo = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Demo updated.',
                'data'    => $demo->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Demo deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Demo deleted.');
    }
}
