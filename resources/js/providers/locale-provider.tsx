import {
    createContext,
    startTransition,
    useContext,
    useEffect,
    useState,
} from 'react';
import type { ReactNode } from 'react';

import {
    isLocale,
    LOCALE_STORAGE_KEY,
    readPreference,
    writePreference,
} from '@/lib/preferences';
import type { Locale } from '@/types/foundation';

type LocaleContextValue = {
    locale: Locale;
    setLocale: (nextLocale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function applyLocale(locale: Locale): void {
    document.documentElement.lang = locale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('es');

    useEffect(() => {
        const storedLocale = readPreference(LOCALE_STORAGE_KEY);
        const initialLocale = isLocale(storedLocale) ? storedLocale : 'es';

        startTransition(() => {
            setLocaleState(initialLocale);
        });
        applyLocale(initialLocale);
    }, []);

    function setLocale(nextLocale: Locale): void {
        if (!isLocale(nextLocale)) {
            return;
        }

        setLocaleState(nextLocale);
        applyLocale(nextLocale);
        writePreference(LOCALE_STORAGE_KEY, nextLocale);
    }

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale(): LocaleContextValue {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }

    return context;
}
