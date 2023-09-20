<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!!$budget->label!!}</title>
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
                                <img src="{!! $budget->branch->has_media ? $budget->branch->media[0]->url :  ( isset($app_logo) ? $app_logo : public_path('images/logo/logo.jpg') ) !!}" style="width:150; max-width:150px; margin-left: -5; margin-top: -20px!important" alt="{{config('settings.app_name')}}">
                            </td>
                            <td align="right" style="text-align: right!important;">
                                <p>
                                    <strong>{{ __('lang.budgets.singular') }}:</strong> {{$budget->label}}<br>
                                    <strong>{{__('lang.budgets.fields.date_issued')}}:</strong> {{formatDate($budget->created, config('settings.date_format'))}}<br>
                                    <strong>{{__('lang.total')}}: {!!getPrice($budget->total)!!}</strong><br>
                                    <strong>{{__('lang.approved')}}:</strong> {{ $budget->approved ?__('lang.yes') : __('lang.no')}}<br>
                                    @if ($budget->approved)
                                    <strong>{{ __('lang.budgets.expiration_date') }}:</strong> {{ Carbon\Carbon::parse($budget->expiration)->format('d/m/Y') }}
                                    @endif
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
                                <strong>{{ __('lang.branch_offices.singular') }}</strong><br>
                                {{$budget->branch->name}}<br>
                                {{$budget->branch->country}}<br>
                                {{$budget->branch->address}}<br>
                            </td>
                            <td class="title" width="360" style="min-width: 360x!important;">
                                <strong>{{__('lang.budgets.patient')}}</strong><br>
                                {{$budget->patient->getFullName()}}<br>
                                {{__('lang.patients.document_type')}} ({{$budget->patient->document_type}}): {{$budget->patient->rut}}<br>
                                {{__('lang.patients.phone')}}: {{$budget->patient->phone}}, {{$budget->patient->cellphone}} <br>
                                {{__('lang.patients.email')}}: <br>{{$budget->patient->email}}<br>
                                <strong>{{ __('lang.total_due') }}: {{getPrice($budget->total_debt)}}</strong><br>
                                <strong>{{ __('lang.positive_balance') }}: {{getPrice(0)}}</strong>

                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <strong>{{__('lang.budgets.fields.name')}}</strong><br>
                                {{ $budget->name }}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <br>
        <table cellpadding="0" cellspacing="0">
            <thead>
                <tr class="heading">
                    <td>{{ __('lang.group')}}</td>
                    <td align="left" style="text-align: left!important;">{{ __('lang.description') }}</td>
                    <td>Area</td>
                    <td align="right" style="text-align: right!important">{{ __('lang.cost') }}</td>
                    <td align="right" style="text-align: right!important">{{ __('lang.discount') }}</td>
                    <td align="right" style="text-align: right!important">{{ __('lang.amount') }}</td>
                </tr>
            </thead>

            <body>
                @foreach ($budget->budgetActions as $item)
                @if ($item->action_type == 'clinical')
                <tr class="item">
                    <td><strong>{{$item->action->group}}</strong></td>
                    <td align="left" style="text-align: left!important;">{{$item->action->name}}</td>
                    <td>{{$item->area}}</td>
                    <td align="right" style="text-align: right!important">{{getPrice($item->price)}}</td>
                    <td align="right" style="text-align: right!important">{{getPrice($item->discount)}}</td>
                    <td align="right" style="text-align: right!important">{{getPrice($item->subtotal)}}</td>
                </tr>
                @elseif($item->action_type == 'laboratory')
                <tr class="item">
                    <td><strong>{{ __('lang.laboratory') }}</strong> </td>
                    <td align="left" style="text-align: left!important;">{{$item->action_name}}</td>
                    <td>{{$item->area}}</td>
                    <td align="right" style="text-align: right!important">{{getPrice($item->price)}}</td>
                    <td align="right" style="text-align: right!important">{{getPrice($item->discount)}}</td>
                    <td align="right" style="text-align: right!important">{{getPrice($item->subtotal)}}</td>
                </tr>
                @endif
                @endforeach
            </body>
            <tfoot>
                <tr class="total">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="total">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" style="text-align: right; font-size:16px">
                        <strong> {{__('lang.subtotal')}}: {!!getPrice($budget->subtotal)!!} </strong>
                    </td>
                </tr>
                <tr class="total">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" style="text-align: right; font-size:16px">
                        <strong> {{__('lang.discount')}}: {!!getPrice($budget->discount)!!} </strong>
                    </td>
                </tr>
                <tr class="total">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2" style="text-align: right; font-size:16px">
                        <strong> {{__('lang.total')}}: {!!getPrice($budget->total)!!} </strong>
                    </td>
                </tr>
                <tr class="total">
                    <td colspan="6" style="text-align: center">
                        <p><strong>{{__('lang.budgets.expiration_date_help', ['days' => config('settings.budget_expiration')])}}</strong></p>
                    </td>
                </tr>
                <tr class="total">
                    <td colspan="6" style="text-align: center">
                        <p><strong>{{__('lang.app_support_help', ['operator' => __('lang.budgets.label_lowercase')])}} <a href="https://wa.me/{{config('settings.support_phone')}}?text=Hola!,%20quisiera%20consultar%20sobre%20el%20presupuesto%20#%20{!!$budget->label!!}?">{{config('settings.support_phone')}}</a></strong></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <p><strong>{{config('settings.budget_great')}}</strong></p>
                        <p><strong>{{__('lang.sincerely')}}</strong>,<br><strong style="color: black">{{config('settings.app_name')}}</strong></p>
                    </td>
                    <td colspan="2" style="text-align: center;">
                        @if (config('settings.enable_instram_on_budget'))
                        <br><br>
                        <p><img src="{{public_path('images/templates/email/instagram32.png')}}" width="24" /></p>
                        <p>{{ config('settings.mail_socials_instagram') }}</p>
                        @endif
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</body>

</html>