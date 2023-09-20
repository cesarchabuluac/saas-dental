@php
$totalCash = 0;
$totalTrans = 0;
$totalCheck = 0;
$totalExpenses = 0;
$grandTotal = 0;
$totalXrays = 0;
$totalIncomes = 0;

foreach ($expenses as $key => $item) {
$totalExpenses += $item->amount;
}
@endphp
@if (!empty($register))
<table>
    <tr>
        <td style="border: 1px solid black;padding: 3px 2px;"><b>{{__('lang.cash_registers.court_date')}}</b></td>
        <td style="border: 1px solid black;padding: 3px 2px;">{{\Carbon\Carbon::parse($register->closing_date)->format('d/m/Y')}} {{__('lang.to')}} {{\Carbon\Carbon::parse($register->closing_end_date)->format('d/m/Y')}}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black;padding: 3px 2px;"><b>{{__('lang.cash_registers.table_closing_id')}}</b></td>
        <td style="border: 1px solid black;padding: 3px 2px;" align="left">{{$register->id}}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black;padding: 3px 2px;"><b>{{ __('lang.cash_registers.comments') }}</b></td>
        <td style="border: 1px solid black;padding: 3px 2px;">{{$register->comments}}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black;padding: 3px 2px;"><b>{{ __('lang.cash_registers.generated_by') }}</b></td>
        <td style="border: 1px solid black;padding: 3px 2px;">{{$register->user->name}}</td>
    </tr>
</table>
@else
<table>
    <tr>
        <td style="border: 1px solid black;padding: 3px 2px;"><b>{{ __('lang.cash_registers.pre_cut_of_the_day') }} {{\Carbon\Carbon::parse($date)->format('d/m/Y')}}</b></td>
        <td style="border: 1px solid black;padding: 3px 2px;"></td>
    </tr>
</table>
@endif

<table class="table table-xs" border="1" style="font-family: Arial, Helvetica, sans-serif; border: 1px solid black; width: 350px;height: 200px;text-align: center;">
    <thead style=" font-size: 17px; font-weight: bold; color: black; text-align: center;border-left: 2px solid black;">
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px;"><b>{{__('lang.incomes.plural')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
            <th style="border: 1px solid black;padding: 3px 2px;"></th>
        </tr>
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_date')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_professional')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_patient')}}</b>
            </th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_cash')}}</b>
            </th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_bonus')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_check')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_type')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_bank')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_bank_num')}}</b>
            </th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_check_date')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_check_owner')}}</b>
            </th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_check_amount')}}</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($payments as $key => $item)
        @php
        if ($item->action_group === 'Radiología Oral') {
        $totalXrays += $item->ap_amount;
        }
        switch ($item->method) {
        case 'cash':
        $totalCash += $item->ap_amount;
        break;
        case 'debit_card':
        case 'credit_card':
        case 'transfer':
        $totalTrans += $item->ap_amount;
        break;
        case 'check':
        $totalCheck += $item->ap_amount;
        break;
        }

        $totalIncomes = $totalCash + $totalTrans + $totalCheck - $totalExpenses;
        @endphp
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;">{{\Carbon\Carbon::parse($item->created_at)->format('d/m/Y H:i:s')}}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{$item->doctor}}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{$item->patient}}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">
                {!!($item->method === 'cash') ? $item->ap_amount : 0!!}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;">
                {{($item->method !== 'cash' && $item->method !== 'check') ? __('lang.cash_registers.detail_transfer') : ''}}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{($item->method === 'check') ? $item->bank : ''}}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{($item->method === 'check') ? $item->serie : ''}}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{($item->method === 'check') ? \Carbon\Carbon::parse($item->date)->format('d/m/Y') : ''}}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;">
                {{($item->method === 'check') ? $item->reference : ''}}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;">
                {!!($item->method === 'check') ? $item->ap_amount : (($item->method !== 'cash' && $item->method !== 'check') ? $item->ap_amount : 0)!!}
            </td>
        </tr>
        @endforeach
    </tbody>
    <tfoot>
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>{{__('lang.cash_registers.total_cash')}}</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalCash!!}</td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>{{__('lang.cash_registers.transference')}}</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalTrans!!}</td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>{{__('lang.cash_registers.checks')}}</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalCheck!!}</td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
        </tr>

        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>{{__('lang.cash_registers.total_expenses')}}</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalExpenses!!}</td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
        </tr>

        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>{{__('lang.cash_registers.incomes')}}</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalIncomes!!}</td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
        </tr>
    </tfoot>
</table>

<table class="table table-xs" border="1" style="font-family: Arial, Helvetica, sans-serif; border: 1px solid black; width: 350px;height: 200px;text-align: center;">
    <thead style=" font-size: 17px; font-weight: bold; color: black; text-align: center;border-left: 2px solid black;">
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.expenses')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
        </tr>
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.reference')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.expense_comments')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_date')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_amount')}}</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($expenses as $key => $item)
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->reference }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->note }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ \Carbon\Carbon::parse($item->date)->format('d/m/Y') }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!! $item->amount !!}</td>
        </tr>
        @endforeach
    </tbody>
    <tfoot>
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>TOTAL</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalExpenses!!}</td>
        </tr>
    </tfoot>
</table>

<table class="table table-xs" border="1" style="font-family: Arial, Helvetica, sans-serif; border: 1px solid black; width: 350px;height: 200px;text-align: center;">
    <thead style=" font-size: 17px; font-weight: bold; color: black; text-align: center;border-left: 2px solid black;">
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.rays')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
        </tr>
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_date')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_patient')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_action')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_amount')}}</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($payments as $key => $item)
        @if($item->action_group === 'Radiología Oral')
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ \Carbon\Carbon::parse($item->updated_at)->format('d/m/Y H:i:s') }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->patient }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->action_name }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!! $item->ap_amount !!}</td>
        </tr>
        @endif
        @endforeach
    </tbody>
    <tfoot>
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>TOTAL</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalXrays!!}</td>
        </tr>
    </tfoot>
</table>

<table class="table table-xs" border="1" style="font-family: Arial, Helvetica, sans-serif; border: 1px solid black; width: 350px;height: 200px;text-align: center;">
    <thead style=" font-size: 17px; font-weight: bold; color: black; text-align: center;border-left: 2px solid black;">
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.checks')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"></th>
        </tr>
        <tr>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_check_owner')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_bank')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_bank_num')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_check_date')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_payment_date')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_date_applied')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_state')}}</b></th>
            <th style="border: 1px solid black;padding: 3px 2px; font-size:12; color: red!important;"><b>{{__('lang.cash_registers.detail_amount')}}</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($payments as $key => $item)
        @if ($item->method === 'check')
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->reference }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->bank }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->serie }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ \Carbon\Carbon::parse($item->created_at)->format('d/m/Y H:i:s') }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->date }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">{{ $item->charged ? \Carbon\Carbon::parse($item->updated_at)->format('d/m/Y H:i:s') : "" }}</td>
            <td style="border: 1px solid black;padding: 3px 2px;">
                {{ $item->charged ? __('lang.cash_registers.cashed') : __('lang.cash_registers.pending') }}
            </td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!! $item->ap_amount !!}</td>
        </tr>
        @endif
        @endforeach
    </tbody>
    <tfoot>
        <tr>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;"></td>
            <td style="border: 1px solid black;padding: 3px 2px;" align="right"><b>TOTAL</b></td>
            <td style="border: 1px solid black;padding: 3px 2px;">{!!$totalCheck!!}</td>
        </tr>
    </tfoot>
</table>