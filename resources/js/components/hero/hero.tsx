import HeroContent from '@/components/hero/hero-content';
import HeroVisual from '@/components/hero/hero-visual';
import PageContainer from '@/components/layout/page-container';

type HeroProps = {
    resumeHref: string | null;
};

export default function Hero({ resumeHref }: HeroProps) {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative isolate min-h-[42rem] overflow-hidden py-8 sm:min-h-[48rem] sm:py-12 lg:min-h-[100svh] lg:py-16"
        >
            <HeroVisual />
            <PageContainer className="relative z-10 flex min-h-[40rem] items-start pt-28 sm:min-h-[46rem] sm:pt-28 lg:min-h-[100svh] lg:items-center lg:pt-0">
                <HeroContent resumeHref={resumeHref} />
            </PageContainer>
        </section>
    );
}
