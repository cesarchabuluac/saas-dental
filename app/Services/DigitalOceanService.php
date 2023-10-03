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
        $this->secret = env("API_TOKEN_DIGITAL_OCEAN");
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
        Log::info($domain);
        return $this->makeRequest(
            'POST',
            "/v2/domains/{$this->domainName}/records",
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
            ],
            $isJsonRequest = true
        );
    }
}
