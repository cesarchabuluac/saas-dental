<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{__('lang.work_order')}} {{$order->label}}</title>
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
                                <img src="{!! $order->branch->has_media ? $budget->branch->media[0]->url :  ( isset($app_logo) ? $app_logo : public_path('images/logo/logo.jpg') ) !!}" style="width:150; max-width:150px; margin-left: -5; margin-top: -20px!important" alt="{{config('settings.app_name')}}">
                            </td>
                            <td align="right" style="text-align: right!important;">
                                <p>
                                    <strong>{{__('lang.work_order_number')}} </strong> {{$order->label}}<br>
                                    <strong>{{__('lang.work_order_table_application_date')}}</strong> {{Carbon\Carbon::parse($order->delivery_date)->format(config('settings.date_format'))}}<br>
                                    <strong>{{__('lang.work_order_table_delivery_date')}}</strong> {{Carbon\Carbon::parse($order->application_date)->format(config('settings.date_format'))}}<br>
                                    <strong>{{__('lang.status')}}</strong> {{$order->status_lang}}<br>
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
                                <strong>{{__('lang.laboratory')}}</strong><br>
                                {{$order->laboratory->name}}<br>
                                {{$order->laboratory->document_type}}: {{$order->laboratory->rut}}<br>
                                Tel: {{$order->laboratory->phone}}<br>
                                {{$order->laboratory->address}}
                            </td>
                            <td class="title" width="360" style="min-width: 360x!important;">
                                <strong>{{__('lang.patient')}}</strong><br>
                                {{$order->patient->full_name}}<br>
                                {{$order->patient->document_type}}: {{$order->patient->rut}}<br>
                                Tel: {{$order->patient->phone}}, {{$order->patient->cellphone}}<br>
                                E-mail: {{$order->patient->email}}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <h3 style="text-align: center;">
            {{__('lang.work_order_detail')}}
        </h3>
        <hr>
        <table cellpadding="0" cellspacing="0">
            <tr class="heading">
                <td><strong>{{__('lang.work_order_delivery_materials')}}</strong></td>
                <td align="left" style="text-align: left!important;">{!!$order->delivery_materials!!}</td>
            </tr>
            <tr class="heading">
                <td><strong>{{__('lang.work_order_todo')}}</strong></td>
                <td align="left" style="text-align: left!important;">{{$order->work_todo}}</td>
            </tr>
            <tr class="heading">
                <td><strong>{{__('lang.work_order_colour')}}</strong></td>
                <td align="left" style="text-align: left!important;">{{$order->colour}}</td>
            </tr>
            <tr class="heading">
                <td><strong>{{__('lang.work_order_area_dental')}}</strong></td>
                <td align="left" style="text-align: left!important;">{{$order->area_dental}}</td>
            </tr>
            <tr class="heading">
                <td><strong>{{__('lang.work_order_clinical_specification')}}</strong></td>
                <td align="left" style="text-align: left!important;">{{$order->clinical_specification}}</td>
            </tr>
            <tr class="heading">
                <td><strong>{{__('lang.work_order_lab_specification')}}</strong></td>
                <td align="left" style="text-align: left!important;">{{$order->lab_specification}}</td>
            </tr>

            <tr class="total">
                <td colspan="2"><br></td>
            </tr>
            <tr class="total">
                <td colspan="2">
                    <p>
                        <strong>{{__('lang.work_order_table_professional')}}<br></strong>
                        {{$order->professional->name}}<br>
                        {{$order->professional->email}}<br>
                    </p>
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
            </tr>
        </table>
    </div>
</body>

</html>