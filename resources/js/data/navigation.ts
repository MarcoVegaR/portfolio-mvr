import { home } from '@/routes';
import type { Locale } from '@/types/foundation';

export type NavItem = {
    id: 'about' | 'experience' | 'projects' | 'contact';
    fragment: '#about' | '#experience' | '#projects' | '#contact';
    label: Record<Locale, string>;
};

export const NAV_ITEMS = [
    {
        id: 'about',
        fragment: '#about',
        label: { es: 'Sobre mí', en: 'About' },
    },
    {
        id: 'experience',
        fragment: '#experience',
        label: { es: 'Experiencia', en: 'Experience' },
    },
    {
        id: 'projects',
        fragment: '#projects',
        label: { es: 'Proyectos', en: 'Projects' },
    },
    {
        id: 'contact',
        fragment: '#contact',
        label: { es: 'Contacto', en: 'Contact' },
    },
] satisfies readonly NavItem[];

export function getNavigationHref(item: NavItem): string {
    return `${home.url()}${item.fragment}`;
}
