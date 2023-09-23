<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Repositories\NotificationRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Prettus\Validator\Exceptions\ValidatorException;

class NotificationAPIController extends Controller
{

    /** @var  NotificationRepository */
    private $notificationRepository;

    public function __construct(NotificationRepository $notificationRepo)
    {
        $this->notificationRepository = $notificationRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->notificationRepository
            ->where('notifiable_id', auth()->user()->id)
            ->whereNull('read_at')
            ->orderBy('created_at', 'DESC')
            ->get();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function show(Notification $notification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $notification = $this->notificationRepository->find($id);
        if (empty($notification)) {
            return $this->sendError(__('lang.not_found', ['operator', __('lang.notification')]));
        }

        $input = $request->all();
        if (isset($input['read_at'])) {
            $input['read_at'] = Carbon::now();
        }
        try {
            if (isset($input['read_all'])) {
                $notification = $this->notificationRepository->where('notifiable_id', auth()->user()->id)
                    ->whereNull('read_at')
                    ->update(['read_at' => Carbon::now()]);
            } else {
                $notification = $this->notificationRepository->update($input, $id);
            }
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage());
        }

        $notifications = $this->notificationRepository
            ->where('notifiable_id', auth()->user()->id)
            ->whereNull('read_at')
            ->orderBy('created_at', 'DESC')
            ->get();

        return $this->sendResponse($notifications, __('lang.saved_successfully', ['operator' => __('lang.notification')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notification $notification)
    {
        //
    }
}
