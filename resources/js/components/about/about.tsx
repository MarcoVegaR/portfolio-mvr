import { useEffect, useRef, useState } from 'react';

import MatrixTerminal from '@/components/about/matrix-terminal';
import PageContainer from '@/components/layout/page-container';
import { ABOUT_COPY } from '@/data/about';
import { useLocale } from '@/hooks/use-locale';

export default function About() {
    const { locale } = useLocale();
    const copy = ABOUT_COPY[locale];
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="about-heading"
            className="about-section relative z-10 -mt-20 pt-24 pb-12 sm:-mt-24 sm:pt-28 sm:pb-16"
            id="about"
        >
            <PageContainer>
                <header className="flex items-center gap-4">
                    <span aria-hidden="true" className="h-px w-10 bg-accent" />
                    <h2
                        className="text-3xl font-semibold tracking-[-0.04em] text-accent sm:text-4xl"
                        id="about-heading"
                    >
                        {copy.heading}
                    </h2>
                </header>

                <div className="about-terminal-stage">
                    <MatrixTerminal active={isVisible} copy={copy} />
                </div>
            </PageContainer>
        </section>
    );
}
