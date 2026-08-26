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
                alt="Marco Vega"
                className="h-10 w-auto max-w-[12rem] object-contain"
                src="/brand/mvr-logo.png"
            />
        </Link>
    );
}
