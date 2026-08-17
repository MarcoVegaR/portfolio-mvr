import { createInertiaApp } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME || 'Marco Vega';

createInertiaApp({
    title: (title) =>
        title && title !== appName ? `${title} - ${appName}` : appName,
    progress: {
        color: 'var(--color-accent)',
    },
});
