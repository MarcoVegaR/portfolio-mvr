import { useEffect, useId, useRef, useState } from 'react';

import LanguageToggle from '@/components/navigation/language-toggle';
import NavLink from '@/components/navigation/nav-link';
import ResumeLink from '@/components/navigation/resume-link';
import { NAV_ITEMS, getNavigationHref } from '@/data/navigation';
import { useLocale } from '@/hooks/use-locale';

const DESKTOP_MEDIA_QUERY = '(min-width: 64rem)';

export default function MobileNav() {
    const { locale } = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
        const handleChange = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setIsOpen(false);
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    function closeMenu(restoreFocus = false): void {
        setIsOpen(false);

        if (restoreFocus) {
            triggerRef.current?.focus();
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLElement>): void {
        if (event.key === 'Escape' && isOpen) {
            event.preventDefault();
            closeMenu(true);
        }
    }

    const menuLabel =
        locale === 'es' ? 'Navegación móvil' : 'Mobile navigation';
    const triggerLabel = isOpen
        ? locale === 'es'
            ? 'Cerrar menú'
            : 'Close menu'
        : locale === 'es'
          ? 'Abrir menú'
          : 'Open menu';

    return (
        <div className="relative lg:hidden">
            <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                aria-label={triggerLabel}
                className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:text-accent"
                onClick={() => setIsOpen((open) => !open)}
                onKeyDown={handleKeyDown}
                ref={triggerRef}
                type="button"
            >
                <svg
                    aria-hidden="true"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            d="m6 6 12 12M18 6 6 18"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.75"
                        />
                    ) : (
                        <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.75"
                        />
                    )}
                </svg>
            </button>

            <div
                className="absolute top-full right-0 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-border bg-background p-3 shadow-lg"
                hidden={!isOpen}
                id={panelId}
                onKeyDown={handleKeyDown}
            >
                <nav aria-label={menuLabel}>
                    <div className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                href={getNavigationHref(item)}
                                key={item.id}
                                label={item.label[locale]}
                                onClick={() => closeMenu()}
                            />
                        ))}
                    </div>
                </nav>

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3">
                    <ResumeLink label={locale === 'es' ? 'CV' : 'Resume'} />
                    <div className="ml-auto flex items-center gap-1">
                        <LanguageToggle />
                        {/* ThemeToggle is retained for the future light-mode decision, but is intentionally hidden. */}
                    </div>
                </div>
            </div>
        </div>
    );
}
