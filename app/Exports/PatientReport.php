<?php

namespace App\Exports;

use App\Models\Patient;
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


class PatientReport implements FromCollection, WithHeadings, WithStyles, WithColumnWidths, ShouldAutoSize
{
    use Exportable;
    
    private $params;

    public function __construct(Request $request)
    {
        $this->params = $request->all();
    }

    public function headings(): array
    {
        return [
            "Nombre", //__('lang.patients.table_name'),  //A          
            "Correo", //__('lang.patients.table_email'),//B
            "Tipo de Documento", //__('lang.patients.document_type'), //C
            "Documento", //__('lang.patients.document'),//D
            "Celular", //__('lang.patients.table_cellphone'), //E
            "Teléfono", //__('lang.patients.table_phone'), //F
            "Creado en", //__('lang.patients.table_created_at'),//G
            "Citas Pendientes", //__('lang.patients.appointment_pending'), //H
            "Citas Confirmadas", //__('lang.patients.appointment_confirmed'), //I
            "Citas Canceladas", //__('lang.patients.appointment_cancelled'), //J
            "Citas Asistidas", //__('lang.patients.appointment_asissted'), //K
            "Citas No Atendidas", //__('lang.patients.appointment_unasissted'), //L
            "Presupuestos Aprobados", //__('lang.patients.budget_approved'), //M
            "Presupuestos Pendientes", //__('lang.patients.budget_pending'), //N
            "Deuda Total", //__("lang.patients.table_debt"), //Ñ
            "Total Pagado", //__("lang.patients.table_paid"), //O
            "Saldo", //__("lang.patients.table_balance"), //P            
            "Último Pago", //__("lang.patients.total_last_paid"),
            "Estatus", //__("lang.patients.table_status"), //S
        ];        
    }

    public function columnWidths(): array
    {
        return [
            'A' => 30,//name
            'B' => 30,//email
            'C' => 30,//document_type
            'D' => 30,//rut
            'E' => 30,//cellphone
            'F' => 30,//phone
            'G' => 30,//created_at
            'H' => 20,//pending
            'I' => 20,//confirmed
            'J' => 20,//cancelled
            'K' => 20,//assisted
            'L' => 20,//unassisted
            'M' => 20,//approve
            'N' => 20,//pending
            'O' => 15,//paid
            'P' => 15,//balance
            'Q' => 15,//status
            'R' => 40,
            'S' => 30,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->setAutoFilter('A1:S1');        
        $sheet->getStyle('A1:S1')->applyFromArray([
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

        $sheet->getStyle('A1:S' . ($sheet->getHighestRow()))->applyFromArray([
            'borders' => [
                'allBorders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['rgb' => '000000']
                ]
            ]
        ]);
    }

        /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $start = Carbon::parse($this->params['start'])->startOfDay();
        $end = Carbon::parse($this->params['end'])->endOfDay();
        $withDeleted = $this->params['with_trashed'] ?? null;
        $name = $this->params['name'] ?? null;
       
        $patients =  Patient::select(
            'patients.id',
            DB::raw("concat(coalesce(patients.name, ' '), ' ', coalesce(patients.last_name, ' '), ' ', coalesce(patients.mother_last_name, ' ')) as patient_name"),
            'patients.email',
            'patients.cellphone',
            'patients.phone',
            'patients.created_at',
            'patients.document_type',
            'patients.rut',
            'patients.deleted_at',
            DB::raw("sum(case when appointments.state = 'assisted' then 1 else 0 end) as num_assisted"),
            DB::raw("sum(case when appointments.state = 'unassisted' then 1 else 0 end) as num_unassisted"),
            DB::raw("sum(case when appointments.state = 'confirmed' then 1 else 0 end) as num_confirmed"),
            DB::raw("sum(case when appointments.state = 'pending' then 1 else 0 end) as num_pending"),
            DB::raw("sum(case when appointments.state = 'canceled' then 1 else 0 end) as num_canceled"),
            DB::raw("(select count(id) from budgets where budgets.patient_id = patients.id and budgets.deleted_at is null and budgets.approved = 1) as num_approved"),
            DB::raw("(select count(id) from budgets where budgets.patient_id = patients.id and budgets.deleted_at is null and budgets.approved = 0) as num_unapproved"),
            DB::raw("ifnull((
                    select sum(action_payments.amount) from action_payments
                    inner join payments on action_payments.payment_id = payments.id and payments.deleted_at is null and action_payments.deleted_at is null
                    inner join budgets on payments.budget_id = budgets.id and budgets.deleted_at is null
                    and payments.check_paid = 1
                    where budgets.patient_id = patients.id
                ), 0) as total_paid")
        )
        ->leftJoin('appointments', 'patients.id', '=', 'appointments.patient_id')           
        ->whereBetween('patients.created_at', [$start, $end])
        ->groupBy('patients.id', 'patients.name', 'patients.last_name', 'patients.mother_last_name', 'patients.email', 'patients.cellphone', 
            'patients.phone', 'patients.document_type', 'patients.rut','patients.created_at', 'patients.deleted_at')
        ->orderBy('patient_name', 'asc');

        if($name){
            $patients = $patients
                ->where('patients.name', 'like', "%{$name}%")
                ->orWhere('patients.last_name', 'like', "%{$name}%")
                ->orWhere('patients.mother_last_name', 'like', "%{$name}%")
                ->orWhere('patients.email', 'like', "%{$name}%")
                ->orWhere('patients.cellphone', 'like', "%{$name}%")
                ->orWhere('patients.phone', 'like', "%{$name}%")
                ->orWhere('patients.rut', 'like', "%{$name}%");
        }

        if(boolval($withDeleted)) {
            $patients = $patients->withTrashed();
        }

        return $patients->get()->map(function ($patient) {     
            return [
                'name' => $patient['patient_name'],
                'email' => $patient['email'],
                'document_type' => $patient['document_type'],
                'rut' => $patient['rut'],
                'cellphone' => $patient['cellphone'],
                'phone' => $patient['phone'],
                'created_at' =>$patient['created_at'],
                'num_pending' => $patient['num_pending'],
                'num_confirmed' => $patient['num_confirmed'],
                'num_assisted' => $patient['num_assisted'],
                'num_unassisted' => $patient['num_unassisted'],
                'num_canceled' => $patient['num_canceled'],
                'num_approved' => $patient['num_approved'] ?? 0,
                'num_unapproved' => $patient['num_unapproved'] ?? 0,
                'total_cost' => $patient['total_cost'] ?? 0,
                'total_paid' => $patient['total_paid'] ?? 0,
                'total_debt' => $patient['total_debt' ?? 0],
                'last_paid' => $patient['last_paid'],
                'status' => empty($patient['deleted_at']) ? "Activo" : "Inactivo",
            ];
        });
    }
}
