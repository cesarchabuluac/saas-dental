<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class AssignDoctorSchedules extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assign:doctor-schedules';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Tenant::all()->map(function ($tenant) {
            tenancy()->initialize($tenant);


            DB::transaction(function () {
                // Obtener los primeros 6 días base de los horarios configurados
                $baseSchedules = DB::table('user_schedules')
                    ->select('day', 'day_of_week', 'start_time', 'end_time')
                    // ->whereIn('user_id', function ($query) {
                    //     $query->select('model_id')
                    //         ->from('model_has_roles')
                    //         ->where('role_id', 4);
                    // })
                    ->limit(6)
                    ->get();

                if ($baseSchedules->isEmpty()) {
                    $this->error('No se encontraron horarios base para los doctores.');
                    return;
                }

                // Obtener todos los usuarios con role_id = 4
                $doctors = DB::table('model_has_roles')
                    ->select('model_id as user_id')
                    ->where('role_id', 4)
                    ->get();

                if ($doctors->isEmpty()) {
                    $this->error('No se encontraron doctores con role_id = 4.');
                    return;
                }

                // Crear los registros para user_schedules
                $inserts = [];
                foreach ($doctors as $doctor) {
                    foreach ($baseSchedules as $schedule) {
                        $inserts[] = [
                            'user_id'    => $doctor->user_id,
                            'day'        => $schedule->day,
                            'day_of_week' => $schedule->day_of_week,
                            'start_time' => $schedule->start_time,
                            'end_time'   => $schedule->end_time,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }
                }

                // Insertar los registros
                DB::table('user_schedules')->insert($inserts);

            });

            tenancy()->end();

            $this->info('Horarios asignados exitosamente a los doctores.');
        });
        return Command::SUCCESS;
    }
}
