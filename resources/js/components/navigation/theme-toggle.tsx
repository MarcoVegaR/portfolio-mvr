import { useLocale } from '@/hooks/use-locale';
import { useTheme } from '@/hooks/use-theme';

export default function ThemeToggle() {
    const { locale } = useLocale();
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            aria-label={locale === 'es' ? 'Modo oscuro' : 'Dark mode'}
            aria-pressed={isDark}
            className="inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:text-brand-blue"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            type="button"
        >
            <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
            >
                {isDark ? (
                    <path
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                        fill="currentColor"
                    />
                ) : (
                    <path
                        d="M12 3v2m0 14v2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42M3 12h2m14 0h2M5.64 18.36l1.42-1.42m9.88-9.88 1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                    />
                )}
            </svg>
        </button>
    );
}
