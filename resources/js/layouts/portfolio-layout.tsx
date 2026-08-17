import type { ReactNode } from 'react';

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
                <main id="main">{children}</main>
            </LocaleProvider>
        </ThemeProvider>
    );
}
