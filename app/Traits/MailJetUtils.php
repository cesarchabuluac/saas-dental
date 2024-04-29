<?php

namespace App\Traits;

use Exception;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Mailjet\Client;
use Mailjet\Resources;
use Mailjet\Response;

trait MailJetUtils
{
    /**
     * Call API to send email MailJet
     * @param $data
     * @return Response
     */
    private function makeRequestPost($data): Response
    {
        $public_key = "74073a866e4923036a4a01a895382253";
        $private_key = "6f4280757e9979ba3f4f61b0c50d050f";
        $mj = new Client($public_key, $private_key, true, ['version' => 'v3.1']);
        $body = [
            'Messages' => [
                [
                    'From' => $data['from'],
                    'To' => $data['to'],
                    'TemplateID' => (int)$data['template_id'],
                    'TemplateLanguage' => true,
                    'Subject' => $data['subject'],
                    'Variables' => $data['vars']
                ]
            ]
        ];
        $response = $mj->post(Resources::$Email, ['body' => $body]);
        Log::info('success', ['success' => $response->success()]);
        Log::info('dataResponse', ['response' => $response->getData()]);
        return $response;
    }

    /**
     * Call API to send email MailJet
     * @param $data
     * @return Response
     */
    private function sendWithAttachedFiles($data): Response
    {
        $public_key = env('MJ_APIKEY_PUBLIC');
        $private_key = env('MJ_APIKEY_PRIVATE');
        $mj = new Client($public_key, $private_key, true, ['version' => 'v3.1']);
        $body = [
            'Messages' => [
                [
                    'From' => $data['from'],
                    'To' => $data['to'],
                    'TemplateID' => (int)$data['template_id'],
                    'TemplateLanguage' => true,
                    'Subject' => $data['subject'],
                    'Variables' => $data['vars'],
                    'Attachments' => $data['attachments'],
                ]
            ]
        ];
        $response = $mj->post(Resources::$Email, ['body' => $body]);
        // Log::info('success', ['success' => $response->success()]);
        // Log::info('dataResponse', ['response' => $response->getData()]);
        return $response;
    }

    private function makeRequestBearerToken($body)
    {
        try {
            $token = config('sms.credentials.token');
            $end_point = config('sms.credentials.end_point');
            if (is_null($token)) {
                throw new Exception("Se requiere configurar el token para el envio de SMS con mailjet");
            }
            Log::info("DataSMS", ['token' => $token, 'body' => $body]);
            $request = Http::withHeaders([
                'Authorization' => "Bearer $token",
                'Content-Type' => 'application/json'
            ])->post($end_point, $body);
            $response = $request->json();
            return [
                'status' => 'success',
                'message' => 'Sms enviado'
            ];
        } catch (Exception $e) {
            Log::error($e->getMessage(), ['trace' => $e->getTrace()]);
            return [
                'status' => 'error',
                'message' => $e->getMessage()
            ];
        }
    }
}
