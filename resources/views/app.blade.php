<!DOCTYPE html>
<html lang="es" data-theme="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script>
            (() => {
                const root = document.documentElement;

                try {
                    const theme = window.localStorage.getItem('portfolio.theme');
                    const locale = window.localStorage.getItem('portfolio.locale');

                    // Dark is the only active product theme; normalize legacy light values.
                    if (theme === 'dark') {
                        root.dataset.theme = theme;
                    }

                    if (locale === 'es' || locale === 'en') {
                        root.lang = locale;
                    }
                } catch {
                    root.dataset.theme = 'dark';
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
