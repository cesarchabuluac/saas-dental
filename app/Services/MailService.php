<?php


namespace App\Services;


use App\Entities\HelperEntities;
use App\Traits\MailJetUtils;
use Illuminate\Support\Facades\Log;
use Mailjet\Client;
use Mailjet\Resources;
use Mailjet\Response;

class MailService
{
    use MailJetUtils;

    /**
     * Funcion para enviar correos
     *
     * @param   [type]  $params  Variables requeridos
     *
     * @return mixed [type]           [return description]
     */
    public function sendEmailMessage ($params) {
        $data = [
            'from' => [
                'email' => config()->get('settings.mail_from_address'),
                'name' => config()->get('settings.app_name')
            ],
            'to' => [[
                'email' => $params['email'],
                'name' => $params['name']
            ]],
            'template_id' => $params['template_id'],
            'subject' => $params['subject'],
            'vars' => [
                'business_name' => $params['name'],
                'residential_name' => $params['residential_name'],
                'url' => $params['link'],
            ],
        ];
        return $this->makeRequestPost($data);
    }


    /**
     * Funcion para enviar correos
     *
     * @param   [type]  $params  Variables requeridos
     *
     * @return mixed [type]           [return description]
     */
    public function sendEmail ($params) {
        $data = [
            'from' => [
                'email' => 'soporte@soft-dental.com',
                'name' => 'Soft-Dental'
            ],
            'to' => $params['to'],
            'template_id' => $params['template_id'],
            'subject' => $params['subject'],
            'vars' => $params['vars'],
        ];
        return $this->makeRequestPost($data);
    }


}
