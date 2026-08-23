import { HERO_COPY } from '@/data/hero';
import { useLocale } from '@/hooks/use-locale';

type HeroContentProps = {
    resumeHref: string | null;
};

export default function HeroContent({ resumeHref }: HeroContentProps) {
    const { locale } = useLocale();
    const copy = HERO_COPY[locale];

    return (
        <div className="relative z-10 flex max-w-full flex-col items-start justify-center py-8 sm:py-12 lg:max-w-[29rem] lg:-translate-y-6 lg:py-20">
            <div className="flex items-center gap-3">
                <span
                    aria-hidden="true"
                    className="h-px w-8 bg-hero-control shadow-[0_0_12px_rgb(15_96_248_/_0.85)]"
                />
                <p className="text-xs font-semibold tracking-[0.28em] text-brand-white/80 uppercase sm:text-sm">
                    {copy.role}
                </p>
            </div>
            <h1
                className="mt-5 max-w-xl text-[3.25rem] leading-[0.92] font-semibold tracking-[-0.055em] text-brand-white sm:text-6xl lg:text-[4.75rem]"
                id="hero-heading"
            >
                {copy.name}
            </h1>
            <p className="mt-7 max-w-[27rem] text-justify text-base leading-7 wrap-normal hyphens-none text-brand-white/75 sm:text-lg sm:leading-8 lg:max-w-[25rem]">
                {copy.description}
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                <a
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-brand-white px-6 text-sm font-semibold text-brand-navy shadow-[0_14px_32px_rgb(0_0_0_/_0.24)] ring-1 ring-brand-white/40 transition-[background-color,transform,box-shadow] duration-300 hover:bg-brand-white/90 hover:shadow-[0_18px_38px_rgb(0_0_0_/_0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white active:translate-y-0 motion-safe:hover:-translate-y-0.5 sm:w-auto sm:min-w-44"
                    href="#projects"
                >
                    <svg
                        aria-hidden="true"
                        className="size-[1.125rem] transition-transform duration-300 motion-safe:group-hover:scale-105"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                        />
                    </svg>
                    {copy.projectsLabel}
                </a>
                {resumeHref && (
                    <a
                        className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-brand-white/25 bg-black/20 px-5 text-sm font-semibold text-brand-white backdrop-blur-sm transition-[background-color,border-color,transform] duration-300 hover:border-brand-white/45 hover:bg-brand-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus active:translate-y-0 motion-safe:hover:-translate-y-0.5 sm:w-auto"
                        href={resumeHref}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {copy.resumeLabel}
                    </a>
                )}
                <a
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-brand-white/25 bg-black/20 px-5 text-sm font-semibold text-brand-white shadow-[0_10px_30px_rgb(0_0_0_/_0.16)] backdrop-blur-sm transition-[background-color,border-color,transform] duration-300 hover:border-brand-white/45 hover:bg-brand-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus active:translate-y-0 motion-safe:hover:-translate-y-0.5 sm:w-auto"
                    href="https://github.com/MarcoVegaR"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <svg
                        aria-hidden="true"
                        className="size-[1.125rem] text-brand-white/90 transition-transform duration-300 motion-safe:group-hover:scale-105"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17a4.6 4.6 0 0 1 1.24 3.22c0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                    </svg>
                    {copy.githubLabel}
                </a>
            </div>
        </div>
    );
}
