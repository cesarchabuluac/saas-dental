<?php

namespace Database\Seeders\Tenant;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency::query()->firstOrCreate(['name' => 'Pesos Mexicanos'], [            
            'symbol' => '$',
            'code' => 'MXN',
            'decimal_digits' => 2,
            'rounding' => 0,
            'note' => 'This is default currency',
        ]);

        Currency::query()->firstOrCreate(['name' => 'Pesos Chilenos'], [
            'symbol' => '$',
            'code' => 'CLP',
            'decimal_digits' => 0,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'US Dollar'], [            
            'symbol' => '$',
            'code' => 'USD',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'Euro'], [            
            'symbol' => '€',
            'code' => 'EUR',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);
        
        Currency::query()->firstOrCreate(['name' => 'Peso Argentino'], [            
            'symbol' => '$',
            'code' => 'ARS',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'Peso Colombiano'], [            
            'symbol' => '$',
            'code' => 'COP',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'Peso Uruguayo'], [            
            'symbol' => '$',
            'code' => 'UYU',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'Peso Dominicano'], [            
            'symbol' => '$',
            'code' => 'DOP',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'Peso Peruano'], [            
            'symbol' => '$',
            'code' => 'PEN',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);

        Currency::query()->firstOrCreate(['name' => 'Peso Boliviano'], [            
            'symbol' => '$',
            'code' => 'BOB',
            'decimal_digits' => 2,
            'rounding' => 0,
        ]);
    }
}
