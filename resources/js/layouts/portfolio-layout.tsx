import type { ReactNode } from 'react';

import SkipLink from '@/components/layout/skip-link';
import Header from '@/components/navigation/header';
import { LocaleProvider } from '@/providers/locale-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export default function PortfolioLayout({
    children,
}: {
    children?: ReactNode;
}) {
    return (
        <ThemeProvider>
            <LocaleProvider>
                <SkipLink />
                <Header />
                <main id="main" tabIndex={-1}>
                    {children}
                </main>
            </LocaleProvider>
        </ThemeProvider>
    );
}
