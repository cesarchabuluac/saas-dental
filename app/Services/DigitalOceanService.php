<?php

namespace App\Services;

use App\Traits\ConsumesExternalServices;
use Illuminate\Support\Facades\Log;

class DigitalOceanService
{
    use ConsumesExternalServices;

    protected $key;

    protected $secret;

    protected $baseUri;

    protected $ipv4;

    protected $domainName;

    public function __construct()
    {
        $this->baseUri = "https://api.digitalocean.com";
        $this->secret = "dop_v1_e425f78aad14243c9e1a3a0a0cf95713779d3e3140945f836b030c38c00f4f40";
        $this->ipv4 = "64.227.97.30"; //IP droplet
        $this->domainName = "fichadentales.com";
    }

    public function resolveAuthorization(&$queryParams, &$formParams, &$headers)
    {
        $headers['Authorization'] = $this->resolveAccessToken();
    }

    public function decodeResponse($response)
    {
        return json_decode($response);
    }

    public function resolveAccessToken()
    {
        return "Bearer {$this->secret}";
    }

    public function getDomains()
    {
        return $this->makeRequest(
            'GET',
            "/v2/domains",
        );
    }

    public function CreateNewDomainRecord($domain)
    {
        return $this->makeRequest(
            'POST',
            "/v2/domains{$this->domainName}/records",
            [],
            [
                "type" => "A",
                "name" => $domain,
                "data" => $this->ipv4,
                "priority" => null,
                "port" => null,
                "ttl" => 3600,
                "weight" => null,
                "flags" => null,
                "tag" => null
            ],
            [
                'Content-Type' => 'application/json',
            ],
            $isJsonRequest = true
        );
    }
}
