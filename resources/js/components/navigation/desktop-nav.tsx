import NavLink from '@/components/navigation/nav-link';
import { NAV_ITEMS, getNavigationHref } from '@/data/navigation';
import { useLocale } from '@/hooks/use-locale';

export default function DesktopNav() {
    const { locale } = useLocale();

    return (
        <nav
            aria-label={
                locale === 'es' ? 'Navegación principal' : 'Main navigation'
            }
            className="hidden items-center gap-1 lg:flex"
        >
            {NAV_ITEMS.map((item) => (
                <NavLink
                    href={getNavigationHref(item)}
                    key={item.id}
                    label={item.label[locale]}
                />
            ))}
        </nav>
    );
}
