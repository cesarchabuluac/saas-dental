<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{__('lang.statements.title')}} {{$patient->full_name}}</title>
    <style>


        .page-break {
            page-break-after: always;
        }
      

        .invoice-box {
            max-width: 710px;
            width: 710px;
            /* margin: auto; */
            /* padding: 10px; */
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 12px;
            line-height: 18px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }

        .invoice-box table {
            width: 700px;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            /* text-align: right; */
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            /* padding-bottom: 40px; */
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;

        }

        .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td:nth-child(6) {
            border-top: 2px solid #eee;
            text-align: right;
            font-size: 16px;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }

        /** RTL **/
        .rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }

        .rtl table {
            text-align: right;
        }

        .rtl table tr td:nth-child(2) {
            /* text-align: left; */
        }
    </style>
</head>

<body>
    <div class="invoice-box" style="font-size: 12px; line-height: 1.2; color: #0D0D0D; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title" width="360" style="min-width: 360x!important;">
                                <img src="{{  isset($app_logo) ? $app_logo : public_path('images/logo/logo.png') }}" style="width:150; max-width:150px; margin-left: -5; margin-top: -20px!important" alt="{{config('settings.app_name')}}">
                            </td>
                            <td align="right" style="text-align: right!important;">
                                <p>
                                    <strong>{{__("lang.patients.singular")}} #</strong> {{$patient->id}}<br>
                                    <strong>{{__("lang.date")}}</strong> {{Carbon\Carbon::now()->translatedFormat(config('settings.date_format'))}}<br>
                                    <strong>{{__("lang.patients.total_debt") }}: {!!getPrice($totalCost)!!}</strong><br>
                                    <strong>{{__("lang.patients.total_paid") }}: {!!getPrice($totalPaid)!!}</strong><br>
                                    <strong>{{__("lang.patients.total_per_paid")}}: {!!getPrice($totalDebt)!!}</strong><br>
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="information">
                <td colspan="2">
                    <table style="margin-top: -35px!important;">
                        <tr>
                            <td class="title" width="360" style="min-width: 360x!important;">
                                <strong>{{$patient->full_name}}</strong><br>
                                {{$patient->email}}<br>
                                {{$patient->document_type}}: {{$patient->rut}}<br>
                                {{$patient->address}}<br>
                                {{$patient->mobile ? $patient->mobile->e164 : $patient->cellphone }}, {{ $patient->phone }}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <p>{!!__('lang.statements.great', ['patient_name' => $patient->full_name])!!}</p>
        <hr>
        <table cellpadding="0" cellspacing="0">
            <tr class="heading">
                <td>{{__('lang.budget')}}</td>
                <td>{{__('lang.subtotal')}}</td>
                <td>{{__('lang.discount')}}</td>
                <td>{{__('lang.total')}}</td>
                <td>{{__('lang.paid')}}</td>
                <td>{{__('lang.balance')}}</td>
            </tr>
            @foreach ($patient->budgets as $budget)
            <tr>
                <td>{{$budget->label}}</td>
                <td align="left" style="text-align: left!important;">{!!getPrice($budget->subtotal)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($budget->discount)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($budget->total_cost)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($budget->total_paid)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($budget->total_debt)!!}</td>
            </tr>
            <tr>
                <td colspan="6"><br></td>
            </tr>
            @foreach ($budget->budgetActions as $detail)
            <tr class="heading">
                <td colspan="6" style="text-align: center;"><strong>{{__('lang.detail')}}: {{$detail->action_name}}</strong></td>
            </tr>
            <tr class="heading">
                <td>{{__('lang.description')}}</td>
                <td align="right" style="text-align: right!important">{{__('lang.cost') }}</td>
                <td align="right" style="text-align: right!important">{{__('lang.discount') }}</td>
                <td align="right" style="text-align: right!important">{{__('lang.amount') }}</td>
                <td align="right" style="text-align: right!important">{{__('lang.paid')}}</td>
                <td align="right" style="text-align: right!important">{{__('lang.balance')}}</td>
            </tr>
            <tr>
                <td>
                    {{$detail->action_group_name}}, <strong>{{__('lang.budgets.action_area')}} {{$detail->area}}</strong><br>
                    {{$detail->action_type === 'clinical' ? __('lang.budgets.clinical') : __('lang.budgets.laboratory')}}
                </td>
                <td align="left" style="text-align: left!important;">{!!getPrice($detail->price)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($detail->discount)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($detail->subtotal)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($detail->paid)!!}</td>
                <td align="right" style="text-align: right!important">{!!getPrice($detail->debt)!!}</td>
            </tr>
            <tr>
                <td colspan="6"><br></td>
            </tr>
            <tr class="heading">
                <td colspan="6" style="text-align: center;"><strong>{{__('lang.payments.detail')}} {{$detail->action_name}}</strong></td>
            </tr>
            @foreach ($detail->clinicalPayments as $payment)
            <tr class="heading">
                <td colspan="2"></td>
                <td colspan="2">{{__('lang.date')}}</td>
                <td>{{__('lang.total')}}</td>
                <td>{{__('lang.payments.payment_form')}}</td>
            </tr>
            <tr>
                <td colspan="2"></td>
                <td colspan="2">{{$payment->payment_date}}</td>
                <td>{!!getPrice($payment->amount)!!}</td>
                <td>{{$payment->payment->method_label}}</td>
            </tr>
            @endforeach
            @foreach ($detail->laboratoryPayments as $payment)
            <tr class="heading">
                <td colspan="2"></td>
                <td colspan="2">{{__('lang.date')}}</td>
                <td>{{__('lang.total')}}</td>
                <td>{{__('lang.payments.payment_form')}}</td>
            </tr>
            <tr>
                <td colspan="2"></td>
                <td colspan="2">{{$payment->payment_date}}</td>
                <td>{!!getPrice($payment->amount)!!}</td>
                <td>{{$payment->payment->method_label}}</td>
            </tr>
            @endforeach
            <tr class="total">
                <td colspan="6"><br></td>
            </tr>
            @endforeach
            <tr class="total">
                <td colspan="6"><br></td>
            </tr>
            @endforeach
            <tr class="total">
                <td colspan="6"><br></td>
            </tr>
            <tr class="total">
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right!important;"><strong>{{__('lang.patients.total_debt')}}</strong></td>
                <td colspan="2" style="text-align: right; font-size:16px">
                    <strong>{!!getPrice($totalCost)!!}</strong>
                </td>
            </tr>
            <tr class="total">
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right!important;"><strong>{{__('lang.patients.total_paid')}}</strong></td>
                <td colspan="2" style="text-align: right; font-size:16px">
                    <strong>{!!getPrice($totalPaid)!!}</strong>
                </td>
            </tr>
            <tr class="total">
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right!important;"><strong>Total {{__('lang.patients.total_per_paid')}}</strong></td>
                <td colspan="2" style="text-align: right; font-size:16px">
                    <strong>{!!getPrice($totalDebt)!!}</strong>
                </td>
            </tr>
            <tr class="total">
                <td colspan="6"><br></td>
            </tr>
            <tr class="total">
                <td colspan="6">
                    {!!__('lang.payments.reminder_detail')!!}
                </td>
            </tr>
            <tr class="total">
                <td colspan="6"><br><br></td>
            </tr>
            <tr class="total">
                <td>
                    <strong>{{__('lang.sincerely')}},</strong><br>
                    {!!config('settings.app_name')!!}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan="2"></td>
            </tr>
        </table>
    </div>
</body>

</html>