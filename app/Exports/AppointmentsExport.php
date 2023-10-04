<?php

namespace App\Exports;

use App\Repositories\AppointmentRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\WithHeadings;

use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Sheet;

class AppointmentsExport implements FromCollection, WithHeadings, WithStyles, /*WithColumnWidths,*/ ShouldAutoSize
{

    use Exportable;

    private $params;
    private $appointments;
    private $appointmentRepository;

    public function __construct(Request $request)
    {
        $this->params = $request->all();
    }

    public function headings(): array
    {
        return [
            "Folio", //__('lang.appointment_table_id'),
            "Fecha", //__('lang.appointment_table_date'),
            "Especialista", //__('lang.appointment_table_user_id'),
            "Paciente", //__('lang.appointment_table_patient_id'),
            "Correo", //__('lang.patients.email'),
            "Teléfono", //__('lang.patients.phone'),
            "Celular", //__('lang.patients.cellphone'),
            "Tipo de Documento", //__('lang.patients.document_type'),
            "Número de Documento", //__('lang.patients.document_number'),
            "Duración", //__('lang.appointment_table_duration'),
            "Estado", //__('lang.appointment_table_state'),
            "Observaciones", //__('lang.appointment_table_observations'),
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 20,
            'B' => 30,
            'C' => 30,
            'D' => 30,
            'E' => 30,
            'F' => 30,
            'G' => 30,
            'H' => 30,
            'I' => 30,
            'J' => 30,
            'K' => 30,
            'L' => 100,
        ];
    }


    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter('A1:L1');
        $sheet->getStyle('A1:L1')->applyFromArray([
            'font' => [
                'bold' => true,
                'size' => 12,
                'color' => [
                    'rgb' => '000000'
                ]
            ],
            'fill' => [
                'type' => 'solid',
                'color' => [
                    'rgb' => '3366CC'
                ]
            ]
        ]);

        $sheet->getStyle('A1:L' . ($sheet->getHighestRow()))->applyFromArray([
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['rgb' => '000000']
                ]
            ]
        ]);
    }

    public function collection()
    {

        $start = Carbon::parse($this->params['start'])->startOfDay();
        $end = Carbon::parse($this->params['end'])->endOfDay();
        $user_id = $this->params['user_id'] ?? null;
        $state = $this->params['state'] ?? null;
        $patient_id = $this->params['patient_id'] ?? null;

        $query = "SELECT 
            a.id,
            a.`date` AS appointment_date,
            u.name AS professional,
            CONCAT(COALESCE(p.name, ''), ' ', COALESCE(p.last_name, ''), ' ', COALESCE(p.mother_last_name, '')) as name,
            p.email, p.phone,  p.cellphone, p.document_type,  p.rut,
            a.duration,
            a.state,
            a.intern_observation
            FROM appointments a 
            INNER JOIN patients p ON a.patient_id = p.id 
            INNER JOIN users u ON a.user_id = u.id
            WHERE a.`date` BETWEEN '{$start}' AND '{$end}' ";

        if ($user_id) {
            $query .= " AND a.user_id = {$user_id} ";
        }

        if ($state) {
            $query .= " AND a.state = '{$state}' ";
        }

        if ($patient_id) {
            $query .= " AND a.patient_id = {$patient_id} ";
        }

        $appointments = DB::select($query);
        return collect($appointments)->map(function ($appointment) {
            switch ($appointment->state) {
                case 'confirmed':
                    $appointment->state = "Confirmada";
                    break;
                case 'pending':
                    $appointment->state = "Pendiente";
                    break;
                case 'canceled':
                    $appointment->state = "Cancelada";
                    break;
                case 'assisted':
                    $appointment->state = "Asistida";
                    break;
                case 'unassisted':
                    $appointment->state = "No Asistida";
                    break;
            }
            return $appointment;
        });
    }
}
