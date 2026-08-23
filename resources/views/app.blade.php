<!DOCTYPE html>
<html lang="es" data-theme="light">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script>
            (() => {
                const root = document.documentElement;

                try {
                    const locale = window.localStorage.getItem('portfolio.locale');

                    root.dataset.theme = 'light';

                    if (locale === 'es' || locale === 'en') {
                        root.lang = locale;
                    }
                } catch {
                    root.dataset.theme = 'light';
                    root.lang = 'es';
                }
            })();
        </script>

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', 'Marco Vega') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
