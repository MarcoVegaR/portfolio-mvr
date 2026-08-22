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
    // Dark is the only active product theme. The light contract remains for
    // compatibility with the existing provider and ThemeToggle component.
    const [theme, setThemeState] = useState<Theme>('dark');

    useEffect(() => {
        const storedTheme = readPreference(THEME_STORAGE_KEY);
        // Ignore legacy light preferences now that the product is dark-only.
        const initialTheme: Theme =
            storedTheme === 'dark' ? storedTheme : 'dark';

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
