<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>{{ config('settings.app_name') }} | {{ config('settings.app_short_description') }}</title>

  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ global_asset('css/loader.css') }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ global_asset('css/core.css') }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ config('settings.app_logo') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  
  <!-- Scripts -->
  <script>
    window.Laravel = {!! json_encode(['csrfToken' => csrf_token(),]) !!};
  </script>
</head>

<body>
  <!-- <noscript>
    <strong>We're sorry but Soft-Dental - Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript> -->
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ config('settings.app_logo') }}" height="100" alt="{{ config('settings.app_name') }}" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>

  <script src="{{ global_asset('js/app.js') }}"></script>
  <!-- <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase.js"></script> -->

  <script>
    @auth
      window.Permissions = []
      window._authenticated = {!!json_encode(Auth::user(), true) !!}
      localStorage.setItem('authenticated', {!!json_encode(Auth::user(), true) !!})
      window.locale = 'es'
    @else
      window.Permissions = [];
      window.locale = 'es',
    @endauth

    localStorage.setItem('vapid_key', `{!!config('settings.firebase_vapid_key')!!}`)

    window._setting = {
      app_logo: `{{ config('settings.app_logo') }}`,
      theme: `{{ config('settings.app_theme')}}`,
      app_name: `{{ config('settings.app_name') }}`,
      app_short_description: `{{ config('settings.app_short_description') }}`,
      timezone: `{{ config('settings.timezone') }}`,
      locale: 'es',
      dateFormat: `{{ config('settings.date_format') }}`,
      app_theme: `{{ config('settings.theme') }}`
    }
  </script>
</body>

</html>