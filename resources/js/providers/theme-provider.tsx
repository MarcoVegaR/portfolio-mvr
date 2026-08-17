import {
    createContext,
    startTransition,
    useContext,
    useEffect,
    useState,
} from 'react';
import type { ReactNode } from 'react';

import {
    isTheme,
    readPreference,
    THEME_STORAGE_KEY,
    writePreference,
} from '@/lib/preferences';
import type { Theme } from '@/types/foundation';

type ThemeContextValue = {
    theme: Theme;
    setTheme: (nextTheme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyTheme(theme: Theme): void {
    document.documentElement.dataset.theme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('light');

    useEffect(() => {
        const storedTheme = readPreference(THEME_STORAGE_KEY);
        const initialTheme = isTheme(storedTheme) ? storedTheme : 'light';

        startTransition(() => {
            setThemeState(initialTheme);
        });
        applyTheme(initialTheme);
    }, []);

    function setTheme(nextTheme: Theme): void {
        if (!isTheme(nextTheme)) {
            return;
        }

        setThemeState(nextTheme);
        applyTheme(nextTheme);
        writePreference(THEME_STORAGE_KEY, nextTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}
