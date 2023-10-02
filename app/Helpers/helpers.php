<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

/**
 * @param $bytes
 * @param int $precision
 * @return string
 */
function formatedSize($bytes, $precision = 1)
{
    $units = array('B', 'KB', 'MB', 'GB', 'TB');

    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);

    $bytes /= pow(1024, $pow);

    return round($bytes, $precision) . ' ' . $units[$pow];
}

/**
 * @param string $message
 * @param mixed  $data
 *
 * @return array
 */
function makeResponse($message, $data)
{
    return [
        'success' => true,
        'data'    => $data,
        'message' => $message,
    ];
}

/**
 * @param string $message
 * @param array  $data
 *
 * @return array
 */
function makeError($message, array $data = [])
{
    $res = [
        'success' => false,
        'message' => $message,
    ];

    if (!empty($data)) {
        $res['data'] = $data;
    }

    return $res;
}

function nl2br_limit($string, $num)
{
    return preg_replace('/\n/', '<br/>', preg_replace('/(\s{' . $num . '})\s+/', '$1', $string));
}

function to_currency_string($number)
{
    $formatter = new NumberFormatter('en_US', NumberFormatter::CURRENCY);
    return $formatter->formatCurrency($number, 'USD');
}

function from_decimal_to_cents($number)
{
    return round($number * 100);
}

function from_cents_to_decimal($number)
{
    return round($number / 100, 2);
}

function getExtensionFromBase64($avatar)
{
    $image_info = getimagesize($avatar);
    $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"])[1] : "");
    return $extension;
}

/**
 * Store image from base64
 * @param string $image
 * @param $directory
 * @return string
 */
function saveImageFromBase64(string $image, $directory): string
{
    $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];   // .jpg .png .pdf
    $replace = substr($image, 0, strpos($image, ',') + 1);
    $image = str_replace($replace, '', $image);
    $image = str_replace(' ', '+', $image);
    $imageName = Carbon::now()->unix() . '.' . $extension;
    $fullPath = $directory . "/" . $imageName;
    Storage::disk('public')->put($fullPath, base64_decode($image));
    return $directory . "/" . $imageName;
}

/**
 * Function changeEnvironmentVariable
 */
function changeEnvironmentVariable($key, $value)
{
    $path = base_path('.env');

    if (is_bool(env($key))) {
        $old = env($key) ? 'true' : 'false';
    } elseif (env($key) === null) {
        $old = 'null';
    } else {
        $old = env($key);
    }

    if (file_exists($path)) {
        file_put_contents($path, str_replace(
            "$key=" . $old,
            "$key=" . $value,
            file_get_contents($path)
        ));
    }
}

/**
 * get available languages on the application
 */
function getAvailableLanguages()
{
    $dir = base_path('resources/lang');
    $languages = array_diff(scandir($dir), array('..', '.'));
    $languages = array_map(function ($value) {
        return ['id' => $value, 'value' => __('lang.app_setting_' . $value)];
    }, $languages);
    return array_column($languages, 'value', 'id');
}

function checkIsCentral()
{
    $host = $_SERVER['HTTP_HOST'];
    $isTenant = substr_count($host, '.') > 1;
    return !$isTenant;
}

function isTenant()
{
    $host = $_SERVER['HTTP_HOST'];
    $isTenant = substr_count($host, '.') > 1;
    return !$isTenant;
}

function myRoles()
{
    return [
        "1" => "administrator",
        "2" => "director",
        "3" => "receptionist",
        "4" => "professional",
        "5" => "patient",
        "6" => "assistant",
    ];
}

function getPrice($price = 0)
{
    $currencyRight = config()->get('settings.enable_currency_right') ?? setting('enable_currency_right');
    $defaultCurrencyDecimalDigits = config()->get('settings.default_currency_decimal_digits') ?? setting('default_currency_decimal_digits');
    $defaultCurrency = config()->get('settings.default_currency') ?? setting('default_currency');
    if ($currencyRight != false) {
        if ($defaultCurrencyDecimalDigits > 0) {
            return number_format((float)$price, 2, '.', ',') . $defaultCurrency;
        } else {
            return (float)$price . $defaultCurrency;
        }
    } else {
        if ($defaultCurrencyDecimalDigits > 0) {
            return $defaultCurrency . number_format((float)$price, 2, '.', ',');
        } else {
            return $defaultCurrency . (float)$price;
        }
    }
}


function formatDate($date, $format = "j M Y (H:i)")
{
    // Configura el idioma de salida de Carbon a español
    Carbon::setLocale('es');

    $fecha = Carbon::parse($date);

    // return $fecha->format('j M, Y (H:i)'); // Esto generará "4 de septiembre de 2023"

    return  ucwords(Carbon::parse($date)->translatedFormat($format));
}


function generateSubDomainOnDO($subdomain, $domain = "fichadentales.com")
{
    $tenantSubdomain = $subdomain;
    $mainDomain = $domain;
    $nginxConfig = <<<EOL
    server {       
        root /var/www/fichadentales/public;
        index index.php index.html index.htm index.nginx-debian.html;

        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options "nosniff";

        charset utf-8;

        server_name $tenantSubdomain.$mainDomain www.$tenantSubdomain.$mainDomain;

        location / {
            try_files \$uri \$uri/ /index.php?\$query_string;
        }

        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        }

        location ~ /\.ht {
            deny all;
        }

        location ~ /\.env {
            deny all;
        }
    }
    EOL;

    $tenantConfigPath = "/etc/nginx/sites-available/$tenantSubdomain";
    $nginxConfigFilePath = '/tmp/nginx_config'; // Ruta temporal para el archivo de configuración

    // Crear un archivo temporal para la configuración de Nginx
    file_put_contents($nginxConfigFilePath, $nginxConfig);

    // Copiar el archivo temporal a la ubicación de configuración de Nginx con sudo
    exec("sudo cp $nginxConfigFilePath $tenantConfigPath");

    // $tenantConfigPath = "/etc/nginx/sites-available/$tenantSubdomain";
    // File::put($tenantConfigPath, $nginxConfig);

    // $tenantConfigEnabledPath = "/etc/nginx/sites-enabled/$tenantSubdomain";
    // File::link($tenantConfigPath, $tenantConfigEnabledPath);

    exec("sudo ln -s /etc/nginx/sites-available/$tenantSubdomain /etc/nginx/sites-enabled/");

    // Recargar la configuración de Nginx
    exec('sudo service nginx reload');


    // Instalar el certificado SSL con Let's Encrypt
    exec("certbot certonly --webroot -w /var/www/fichadentales -d $tenantSubdomain.$mainDomain -d www.$tenantSubdomain.$mainDomain");

    return true;
}
