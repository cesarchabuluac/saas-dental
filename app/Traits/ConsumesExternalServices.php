<?php

namespace App\Traits;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

trait ConsumesExternalServices
{
    public function makeRequest(
        $method,
        $requestUrl,
        $queryParams = [],
        $formParams = [],
        $headers = [],
        $isJsonRequest = false
    ) {

        try {
            $client  = new Client([
                'base_uri' => $this->baseUri,
                'http_errors' => true,
            ]);

            if (method_exists($this, 'resolveAuthorization')) {
                $this->resolveAuthorization($queryParams, $formParams, $headers);
            }

            $response = $client->request($method, $requestUrl, [
                $isJsonRequest ? 'json' : 'form_params' => $formParams,
                'headers' => $headers,
                'query' => $queryParams,
            ]);

            $response = $response->getBody()->getContents();

            if (method_exists($this, 'decodeResponse')) {
                $this->decodeResponse($response);
            }

            return $response;
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return $e->getResponse()->getBody(true);
        }
    }
}
