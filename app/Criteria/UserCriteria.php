<?php

namespace App\Criteria;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class UserCriteria.
 *
 * @package namespace App\Criteria;
 */
class UserCriteria implements CriteriaInterface
{

    /**
     * @var array
     */
    private $request;

    private function myRoles()
    {
        return [
            "administrator" => "1",
            "director" => "2",
            "receptionist" => "3",
            "professional" => "4",
            "patient" => "5",
            "assistant" => "6",
        ];
    }



    /**
     * NearCriteria constructor.
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        $selectedDateTime = Carbon::now(); // Obtener la fecha y hora actual, ajusta esto según tus necesidades
        $ignoreSchedules = $this->request->has('ignoreSchedules');
        if ($this->request->has('criteria')) {

            $roleID = $this->myRoles()[$this->request->criteria] ?? 4;
            return $model->whereHas("roles", function ($q) use ($roleID) {
                $q->where("id", $roleID)
                    ->where('is_active', true);
            })
                ->whereHas('schedules', function ($query) use ($selectedDateTime, $ignoreSchedules) {
                    if (!$ignoreSchedules) {
                        $dayOfWeek = $selectedDateTime->dayOfWeek;
                        $query->where('day_of_week', $dayOfWeek)
                            ->whereTime('start_time', '<=', $selectedDateTime->format('H:i:s'))
                            ->whereTime('end_time', '>=', $selectedDateTime->format('H:i:s'));
                    }
                });
        }

        return $model;
    }
}
