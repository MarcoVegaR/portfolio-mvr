import type { Locale, Theme } from '@/types/foundation';

export const THEME_STORAGE_KEY = 'portfolio.theme';
export const LOCALE_STORAGE_KEY = 'portfolio.locale';

export function isTheme(value: string | null): value is Theme {
    return value === 'light' || value === 'dark';
}

export function isLocale(value: string | null): value is Locale {
    return value === 'es' || value === 'en';
}

export function readPreference(key: string): string | null {
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
}

export function writePreference(key: string, value: string): void {
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // Preferences remain available in memory when storage is unavailable.
    }
}
