import { useEffect, useState } from 'react';

import PageContainer from '@/components/layout/page-container';
import Brand from '@/components/navigation/brand';
import DesktopNav from '@/components/navigation/desktop-nav';
import LanguageToggle from '@/components/navigation/language-toggle';
import MobileNav from '@/components/navigation/mobile-nav';
import ResumeLink from '@/components/navigation/resume-link';
import { useLocale } from '@/hooks/use-locale';

export default function Header() {
    const { locale } = useLocale();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`environment-header fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8 ${isScrolled ? 'environment-header-scrolled' : ''}`}
        >
            <div
                aria-hidden="true"
                className="environment-header-scrim pointer-events-none fixed inset-x-0 -top-4 z-0 h-28"
            />
            <PageContainer className="environment-header-surface relative z-10 grid min-h-14 max-w-[90rem] grid-cols-[1fr_auto] items-center gap-4 rounded-xl px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
                <Brand />

                <DesktopNav />

                <div className="hidden items-center gap-1 justify-self-end lg:flex">
                    <ResumeLink label={locale === 'es' ? 'CV' : 'Resume'} />
                    <LanguageToggle />
                    {/* ThemeToggle is retained for the future light-mode decision, but is intentionally hidden. */}
                </div>

                <MobileNav />
            </PageContainer>
        </header>
    );
}
