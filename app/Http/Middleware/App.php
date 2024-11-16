<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class App
{

    /**
     * The availables languages.
     *
     * @array $languages
     */
    protected $languages = ['en', 'es', 'fr', 'de', 'pr']; // en, fr    

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if (auth()->check()) {
        //     Log::info($this->languages);   
        //     app()->setLocale(config()->get('settings.language'));
        // } else {
        //     app()->setLocale($request->getPreferredLanguage($this->languages));
        // }  

        app()->setLocale($request->header('Accept-Language'));

        try {
            Carbon::setLocale(app()->getLocale());
            setLocale(LC_TIME, app()->getLocale());
            config(['app.timezone' => config()->get('settings.timezone') ?? setting('timezone')]);

            $appLogo = config()->get('settings.app_logo') ?? setting('app_logo');
            $path = explode('/', $appLogo);
            if (isset($path[4]) && isset($path[5])) {
                if (!Storage::disk('public')->exists($path[4] . '/' . $path[5])) {
                    $appLogo = asset('images/logo/logo.png');
                }
            } else {
                $appLogo = asset('images/logo/logo.png');
            }
            view()->share('app_logo', $appLogo);
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
        }

        return $next($request);
    }
}
