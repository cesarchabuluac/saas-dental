<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class GenerateSiteConfig extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:site-config';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $command = 'sudo ls /etc/nginx/sites-available';
        $output = shell_exec($command);
        $files = explode("\n", trim($output));

        Log::info($files);

        Tenant::all()->map(function ($tenant) use ($files) {
            Log::warning($tenant->domain);
            foreach ($files as $key => $file) {
                if ($file !== $tenant->domain) {

                    $tenantSubdomain = $tenant->domain;
                    $mainDomain = "fichadentales.com";
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
                    Log::warning("generate file");

                    // Copiar el archivo temporal a la ubicación de configuración de Nginx con sudo
                    exec("sudo cp /tmp/nginx_config /etc/nginx/sites-available/$tenantSubdomain");
                    Log::warning("use cp");

                    exec("sudo ln -s /etc/nginx/sites-available/$tenantSubdomain /etc/nginx/sites-enabled/");
                    Log::warning("enabled sites");

                    // Recargar la configuración de Nginx
                    exec('sudo service nginx reload');
                    Log::warning("reload nginx");
                }
            }
        });

        $this->info("Site config generate successfully");
        return Command::SUCCESS;
    }
}
