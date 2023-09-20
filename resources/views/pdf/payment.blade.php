<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ __('lang.payments.card_payment')}} {{$payment->id}} {{$payment->budget->patient->full_name}}</title>
    <style>
        .invoice-box {
            max-width: 700px;
            width: 700px;
            /* margin: auto; */
            padding: 10px;
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
                            <img src="{!! $payment->branch->has_media ? $payment->branch->media[0]->url :  ( isset($app_logo) ? $app_logo : public_path('images/logo/logo.jpg') ) !!}" style="width:150; max-width:150px; margin-left: -5; margin-top: -20px!important" alt="{{config('settings.app_name')}}">
                            </td>
                            <td align="right" style="text-align: right!important;">
                                <p>
                                    <strong>{{ __('lang.payments.id') }} #</strong> {{$payment->id}}<br>
                                    <strong>{{ __('lang.date') }}</strong> {{Carbon\Carbon::parse($payment->payment_date)->translatedFormat(config('settings.date_format'))}}<br>
                                    <strong>{{__('lang.total')}}</strong> {!! getPrice($payment->budget->total_cost) !!}<br>
                                    <strong>{{__('lang.total_due')}}</strong> {!! getPrice($payment->budget->total_debt) !!}<br>
                                    <strong>{{__('lang.total_subscriber')}}</strong> {!! getPrice($payment->budget->total_paid) !!}<br>
                                    <strong>{{__('lang.positive_balance')}}</strong> {!! getPrice(0) !!}<br>
                                    <strong>{{__('lang.amount_paid')}}</strong> {!! getPrice($payment->amount) !!}
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title" width="360" style="min-width: 360x!important;">
                                <strong>{{__('lang.branch_offices.singular')}}</strong><br>
                                {{$payment->branch->name}}<br>
                                {{$payment->branch->country}}<br>
                                {{$payment->branch->address}}
                            </td>
                            <td class="title" width="360" style="min-width: 360x!important;">
                                <strong>{{$payment->budget->patient->full_name}}</strong><br>
                                {{$payment->budget->patient->email}}<br>
                                {{$payment->budget->patient->document_type}}: {{$payment->budget->patient->rut}}<br>
                                {{$payment->budget->patient->address}}<br>
                                {{$payment->budget->patient->mobile ? $payment->budget->patient->mobile->e164 : $payment->budget->patient->cellphone }}, {{ $payment->budget->patient->phone }}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <p>
            {{__('lang.payments.dear_patient', ['operator' => $payment->budget->patient->full_name]) }}<strong>#{{$payment->id}}</strong>
        </p>
        <hr>
        <table cellpadding="0" cellspacing="0">
            <tr class="heading">
                <td>{{__('lang.description')}}</td>
                <td>{{__('lang.doctor')}}</td>
                <td>{{__('lang.cost')}}</td>
                <td>{{__('lang.paid')}}</td>
                <td>{{__('lang.balance')}}</td>
            </tr>

            @foreach ($payment->actionPayments as $key => $item)
            <tr class="item">
                <td align="left" style="text-align: left!important;">
                    {{ $item['actions']['action_name'] }}<br>
                    {{ $item['actions']['action_group_name'] ? $item['actions']['action_group_name'] : __('lang.laboratory') }}, <strong>{{__('lang.area')}} {{$item['actions']['area']}}</strong>
                </td>
                <td align="left" style="text-align: left!important;">
                    @if ($item['actions']['has_previous_professional'])
                    {{ $item['actions']['professional']['name'] }}
                    @else
                    {{__('lang.laboratory')}}
                    @endif
                </td>
                <td>
                    {!!getPrice($item['actions']['price']) !!}<br>
                    @if ($item['actions']['discount'] > 0)
                    <strong>{{__("lang.discount")}} </strong>{!!getPrice($item['actions']['discount']) !!}<br>
                    <strong>{!!getPrice($item['actions']['price'] - $item['actions']['discount']) !!}</strong>
                    @endif
                </td>
                <td>
                    {!!getPrice($item['actions']['paid']) !!}
                </td>
                <td>
                    {!!getPrice($item['actions']['debt']) !!}
                </td>
            </tr>
            @endforeach

            <tr class="total">
                @if($payment->check)
                <td colspan="3">
                    <strong>{{__('lang.method')}}</strong>
                    {{$payment->method_label}}<br>
                    <strong>{{__('lang.reference')}}</strong>
                    {{$payment->check->reference}}<br>
                    <strong>{{__('langbank')}}</strong>
                    {{$payment->check->bank}}<br>
                    <strong>{{__('lang.serie')}}</strong>
                    {{$payment->check->serie}}<br>
                    <strong>{{__('lang.payment_date')}}</strong>
                    {{$payment->check->date}}
                </td>
                <td style="text-align: right;">
                    <strong>{{__('lang.total')}}</strong>
                </td>
                <td>
                    {!! getPrice($payment->budget->total_cost) !!}
                </td>
                @else
                <td colspan="3">
                    <strong>{{__('lang.method')}}</strong>
                    {{$payment->method_label}}
                </td>
                <td style="text-align: right;">
                    <strong>{{__('lang.total')}}</strong>
                </td>
                <td>
                    {!! getPrice($payment->budget->total_cost) !!}
                </td>
                @endif
            </tr>
            <tr class="total">
                <td colspan="4" style="text-align: right;">
                    <strong>{{__('lang.total_due')}}</strong>
                </td>
                <td>
                    {!! getPrice($payment->budget->total_debt) !!}
                </td>
            </tr>
            <tr class="total">
                <td colspan="4" style="text-align: right;">
                    <strong>{{__('lang.total_subscriber')}}</strong>
                </td>
                <td>
                    {!! getPrice($payment->budget->total_paid) !!}
                </td>
            </tr>
            <tr class="total">
                <td colspan="4" style="text-align: right;">
                    <strong>{{__('lang.positive_balance')}}</strong>
                </td>
                <td>
                    {!! getPrice(0) !!}
                </td>
            </tr>
            <tr class="total">
                <td colspan="4" style="text-align: right;">
                    <strong>{{__('lang.amount_paid')}}</strong>
                </td>
                <td>
                    {!! getPrice($payment->amount) !!}
                </td>
            </tr>
            <tr class="total">
                <td colspan="5">
                    {{__('lang.payment_warning_message')}}
                    <p><strong>Tel: {{config('settings.support_phone')}}</strong></p>
                </td>
            </tr>
            <tr class="total">
                <td colspan="5"><br><br></td>
            </tr>
            <tr class="total">
                <td>
                    <strong>{{__('lang.sincerely')}},</strong><br>
                    {!!config('settings.app_name')!!}
                </td>
                <td></td>
                <td></td>
                <td colspan="2"></td>
            </tr>
        </table>
    </div>
</body>

</html>