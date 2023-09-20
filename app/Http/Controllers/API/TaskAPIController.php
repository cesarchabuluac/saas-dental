<?php

namespace App\Http\Controllers\API;

use App\Criteria\TaskUserCriteria;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Notifications\TaskAssignee;
use App\Notifications\TaskNotification;
use App\Repositories\TaskRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class TaskAPIController extends Controller
{

    /** @var TaskRepository  */
    private $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();

        $this->taskRepository->pushCriteria(new TaskUserCriteria());
        return $this->taskRepository->with('user')
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('q'), function ($query) use ($request) {
                    return $query->where('title', 'LIKE', $request->q . '%')
                        ->orWhere('due_date', 'LIKE', $request->q . '%')
                        ->orWhere('tags', 'LIKE', $request->q . '%');
                });
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('tag'), function ($query) use ($request) {
                    return $query->where('tags', 'LIKE', $request->tag . "%");
                });
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('filter'), function ($query) use ($request) {
                    if ($request->filter == 'completed') {
                        return $query->where('is_completed', 1);
                    } else if ($request->filter === 'important') {
                        return $query->where('is_important', 1);
                    } else if ($request->filter === 'deleted') {
                        return $query->where('is_deleted', 1);
                    }
                });
            })
            // ->whereBetween('due_date', [$start, $end])
            ->orderBy('due_date', 'DESC')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateTaskRequest $request)
    {
        $input = $request->all();
        $input['due_date'] = Carbon::parse($input['due_date'])->format('Y-m-d');

        try {
            DB::beginTransaction();
            $task = $this->taskRepository->create($input);
            $task->user->notify(new TaskNotification($task));

            DB::commit();
            return $this->sendResponse($task, __('lang.saved_successfully', ['operator' => __('lang.todos.todo')]));
        } catch (Exception $ex) {
            DB::rollBack();
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
        $task = $this->taskRepository->find($id);

        if (empty($task)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.todos.todo')]));
        }
        return $this->sendResponse($task, 'Task retrievied successfully');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTaskRequest $request, $id)
    {
        $oldTask = $this->taskRepository->find($id);

        if (empty($oldTask)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.todos.todo')]));
        }

        DB::beginTransaction();
        try {

            $input = $request->only('description', 'due_date', 'is_completed', 'is_deleted', 'is_important', 'tags', 'title', 'user_id');
            $task = $this->taskRepository->update($input, $id);

            if ($oldTask->tags != $task->tags) {
                $task->user->notify(new TaskNotification($task));
            }

            DB::commit();
            return $this->sendResponse($task, __('lang.updated_successfully', ['operator' => __('lang.todos.todo')]));
        } catch (Exception $ex) {
            DB::rollBack();
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
        $task = $this->taskRepository->find($id);
        if (empty($task)) {
            return $this->sendError(__('lang.not_found', ['operator' => __('lang.todos.todo')]));
        }

        $task->update([
            'is_deleted' => true,
        ]);

        $task->delete();
        return $this->sendResponse($task, __('lang.deleted_successfully', ['operator' => __('lang.todos.todo')]));
    }
}
