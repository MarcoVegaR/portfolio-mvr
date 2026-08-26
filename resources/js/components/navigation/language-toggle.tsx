import { useLocale } from '@/hooks/use-locale';

export default function LanguageToggle() {
    const { locale, setLocale } = useLocale();
    const groupLabel = locale === 'es' ? 'Idioma' : 'Language';

    return (
        <div
            aria-label={groupLabel}
            className="flex items-center gap-1"
            role="group"
        >
            {(['es', 'en'] as const).map((nextLocale, index) => (
                <span className="flex items-center gap-1" key={nextLocale}>
                    {index > 0 && (
                        <span aria-hidden="true" className="text-muted">
                            |
                        </span>
                    )}
                    <button
                        aria-label={nextLocale === 'es' ? 'Español' : 'English'}
                        aria-pressed={locale === nextLocale}
                        className={`inline-flex min-h-11 min-w-8 items-center justify-center rounded-md px-1 text-xs tracking-wide transition-colors hover:text-accent ${locale === nextLocale ? 'font-bold underline decoration-accent decoration-2 underline-offset-4' : 'font-medium text-muted'}`}
                        lang={nextLocale}
                        onClick={() => setLocale(nextLocale)}
                        type="button"
                    >
                        {nextLocale.toUpperCase()}
                    </button>
                </span>
            ))}
        </div>
    );
}
