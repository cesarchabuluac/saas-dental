<?php

namespace Database\Seeders\Tenant;

use App\Models\Inventories\MovementType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovementTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $types = [
            [ 'name' => 'Carga inicial' ],
            [ 'name' => 'Anulacion carga inicial' ],
            [ 'name' => 'Salida depuracion inventario' ],
            [ 'name' => 'Entrada por compra' ],
            [ 'name' => 'Anulacion entrada por compra' ],
            [ 'name' => 'Salida consumo interno' ],
            [ 'name' => 'Anulacion salida consumo interno' ],
            [ 'name' => 'Entrada por transferencia' ],
            [ 'name' => 'Anulacion entrada por transferencia' ],
            [ 'name' => 'Entrada a transito' ],
            [ 'name' => 'Anulacion entrada a transito' ],
            [ 'name' => 'Reversa de transferencia' ],
            [ 'name' => 'Anulacion reversa de transferencia' ],
            [ 'name' => 'Entrada por traspaso' ],
            [ 'name' => 'Anulacion entrada por traspaso' ],
            [ 'name' => 'Entrada por conversion' ],
            [ 'name' => 'Anulacion entrada por conversion' ],
            [ 'name' => 'Entrada traspaso a produccion' ],
            [ 'name' => 'Anulacion entrada traspaso a produccion' ],
            [ 'name' => 'Entrada producto terminado' ],
            [ 'name' => 'Anulacion entrada producto terminado' ],
            [ 'name' => 'Entrada por rechazos' ],
            [ 'name' => 'Entrada por devolucion de consumo' ],
            [ 'name' => 'Anulacion entrada por devolucion de consumo' ],
            [ 'name' => 'Salida por revaluacion de costo' ],
            [ 'name' => 'Anulacion salida por revaluacion de costo' ],
            [ 'name' => 'Entrada por revaluacion de costos' ],
            [ 'name' => 'Anulacion entrada por revaluacion de costos' ],
            [ 'name' => 'Devolucion' ],
            [ 'name' => 'Anulacion devolucion' ],
            [ 'name' => 'Entrada a almacen' ],
            [ 'name' => 'Salida remisiones' ],
            [ 'name' => 'Anulacion salida remisiones' ],
            [ 'name' => 'Salida nota de venta' ],
            [ 'name' => 'Anulacion salida nota de venta' ],
            [ 'name' => 'Salida de refacciones' ],
            [ 'name' => 'Anulacion salida de refacciones' ],
            [ 'name' => 'Entrada ajuste inv. fisico' ],
            [ 'name' => 'Anulacion entrada ajuste inv. fisico' ],
            [ 'name' => 'Salida ajuste inv. fisico' ],
            [ 'name' => 'Anulacion salida ajuste inv. fisico' ],
            [ 'name' => 'Entrada ajuste costo' ],
            [ 'name' => 'Anulacion entrada ajuste costo' ],
            [ 'name' => 'Salida ajuste costo' ],
            [ 'name' => 'Anulacion salida ajuste costo' ],
            [ 'name' => 'Entrada por reparacion' ],
            [ 'name' => 'Anulacion entrada por reparacion' ],
            [ 'name' => 'Salida de equipo reparado' ],
            [ 'name' => 'Anulacion salida de equipo reparado' ],
            [ 'name' => 'Entrada por dev. eq. prestamo' ],
            [ 'name' => 'Anulacion entrada por dev. eq. prestamo' ],
            [ 'name' => 'Salida por prestamo equipo' ],
            [ 'name' => 'Anulacion salida por prestamo equipo' ],
            [ 'name' => 'Entrada componentes kit' ],
            [ 'name' => 'Anulacion entrada componentes kit' ],
            [ 'name' => 'Salida de componentes de kit' ],
            [ 'name' => 'Anulacion salida de componentes de kit' ],
            [ 'name' => 'Anulacion salida depuracion inventario' ],
            [ 'name' => 'Anulacion entrada por rechazos' ],
            [ 'name' => 'Entrada dev sobre ventas' ],
            [ 'name' => 'Anulacion entrada dev sobre ventas' ],
            [ 'name' => 'Devolucion a proveedor' ],
            [ 'name' => 'Anulacion devolucion a proveedor' ],
            [ 'name' => 'Salida por transferencia' ],
            [ 'name' => 'Anulacion salida por transferencia' ],
            [ 'name' => 'Salida de transito' ],
            [ 'name' => 'Anulacion salida de transito' ],
            [ 'name' => 'Reversa de transferencia' ],
            [ 'name' => 'Anulacion reversa de transferencia' ],
            [ 'name' => 'Salida por traspaso' ],
            [ 'name' => 'Anulacion salida por traspaso' ],
            [ 'name' => 'Salida por conversion' ],
            [ 'name' => 'Anulacion salida por conversion' ],
            [ 'name' => 'Salida por merma' ],
            [ 'name' => 'Anulacion salida por merma' ],
            [ 'name' => 'Salida traspaso a produccion' ],
            [ 'name' => 'Anulacion salida traspaso a produccion' ],
            [ 'name' => 'Salida de produccion en proceso' ],
            [ 'name' => 'Anulacion salida de produccion en proceso' ],
            [ 'name' => 'Anulacion entrada a almacen' ],
        ];

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        MovementType::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        MovementType::insert($types);
    }
}
