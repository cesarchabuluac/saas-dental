<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Support\Facades\Log;

class SetLocale
{
    /**
     * The availables languages.
     *
     * @array $languages
     */
    protected $languages = ['en', 'es', 'fr', 'de', 'pr'];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if (auth()->check()) {
        //     app()->setLocale(setting('language', app()->getLocale()));
        // } else {
        //     app()->setLocale($request->getPreferredLanguage($this->languages));
        // }
        // try {
        //     Carbon::setLocale(app()->getLocale());
        //     config(['app.timezone' => setting('timezone')]);
        // } catch (\Exception $exception) {
        // }

        return $next($request);

        // if ($locale = $this->parseLocale($request)) {
        //     app()->setLocale($locale);
        // }

        // return $next($request);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function parseLocale($request)
    {
        $locales = config('app.locales');

        $locale = "en"; // $request->server('HTTP_ACCEPT_LANGUAGE');
        $locale = substr($locale, 0, strpos($locale, ',') ?: strlen($locale));

        if (array_key_exists($locale, $locales)) {
            return $locale;
        }

        $locale = substr($locale, 0, 2);
        if (array_key_exists($locale, $locales)) {
            return $locale;
        }
    }
}
