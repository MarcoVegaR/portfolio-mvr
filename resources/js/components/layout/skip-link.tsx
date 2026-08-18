import { useLocale } from '@/hooks/use-locale';

export default function SkipLink() {
    const { locale } = useLocale();

    return (
        <a
            className="fixed top-4 left-4 z-[60] -translate-y-20 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform focus:translate-y-0"
            href="#main"
        >
            {locale === 'es' ? 'Saltar al contenido' : 'Skip to content'}
        </a>
    );
}
