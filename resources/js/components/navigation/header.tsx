import PageContainer from '@/components/layout/page-container';
import Brand from '@/components/navigation/brand';
import DesktopNav from '@/components/navigation/desktop-nav';
import LanguageToggle from '@/components/navigation/language-toggle';
import MobileNav from '@/components/navigation/mobile-nav';
import ResumeLink from '@/components/navigation/resume-link';
import ThemeToggle from '@/components/navigation/theme-toggle';
import { useLocale } from '@/hooks/use-locale';

export default function Header() {
    const { locale } = useLocale();

    return (
        <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
            <PageContainer className="grid min-h-16 max-w-[90rem] grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-border/70 bg-background px-4 shadow-[0_10px_35px_rgb(0_18_54_/_0.10)] sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 dark:shadow-[0_10px_35px_rgb(0_0_0_/_0.28)]">
                <Brand />

                <DesktopNav />

                <div className="hidden items-center gap-1 justify-self-end lg:flex">
                    <ResumeLink label={locale === 'es' ? 'CV' : 'Resume'} />
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                <MobileNav />
            </PageContainer>
        </header>
    );
}
