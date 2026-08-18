type NavLinkProps = {
    href: string;
    label: string;
    onClick?: () => void;
};

export default function NavLink({ href, label, onClick }: NavLinkProps) {
    return (
        <a
            className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-brand-blue hover:underline"
            href={href}
            onClick={onClick}
        >
            {label}
        </a>
    );
}
