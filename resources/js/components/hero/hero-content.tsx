import { HERO_COPY } from '@/data/hero';
import { useLocale } from '@/hooks/use-locale';

type HeroContentProps = {
    resumeHref: string | null;
};

export default function HeroContent({ resumeHref }: HeroContentProps) {
    const { locale } = useLocale();
    const copy = HERO_COPY[locale];

    return (
        <div className="relative z-10 flex max-w-2xl flex-col items-start justify-center py-8 sm:py-12 lg:py-20">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-hero-control uppercase">
                {copy.role}
            </p>
            <h1
                className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl"
                id="hero-heading"
            >
                {copy.name}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted sm:text-xl">
                {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-hero-control px-6 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                    href="#projects"
                >
                    {copy.projectsLabel}
                </a>
                {resumeHref && (
                    <a
                        className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-hero-control hover:text-hero-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                        href={resumeHref}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {copy.resumeLabel}
                    </a>
                )}
                <a
                    className="inline-flex min-h-12 items-center justify-center rounded-md px-3 text-sm font-semibold text-muted transition-colors hover:text-hero-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                    href="https://github.com/MarcoVegaR"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {copy.githubLabel}
                </a>
            </div>
        </div>
    );
}
