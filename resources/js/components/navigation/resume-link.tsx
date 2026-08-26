type ResumeLinkProps = {
    href?: string;
    label: string;
};

export default function ResumeLink({ href, label }: ResumeLinkProps) {
    if (!href) {
        return null;
    }

    return (
        <a
            className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            href={href}
            rel="noreferrer"
            target="_blank"
        >
            {label}
        </a>
    );
}
