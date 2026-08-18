import { Link } from '@inertiajs/react';

import { home } from '@/routes';

export default function Brand() {
    return (
        <Link
            aria-label="Marco Vega"
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-md text-foreground"
            href={home()}
        >
            <img
                alt=""
                className="size-9 object-contain dark:brightness-0 dark:invert"
                src="/brand/mvr-mark.png"
            />
            <span className="h-8 w-px bg-border" />
            <span className="text-lg font-medium tracking-tight sm:text-xl">
                Marco <span className="text-brand-blue">Vega</span>
            </span>
        </Link>
    );
}
