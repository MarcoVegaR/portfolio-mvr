import { Head } from '@inertiajs/react';

import About from '@/components/about/about';
import Hero from '@/components/hero/hero';
import PortfolioLayout from '@/layouts/portfolio-layout';

type PortfolioPageProps = {
    resumeHref: string | null;
};

function PortfolioPage({ resumeHref }: PortfolioPageProps) {
    return (
        <>
            <Head title="Marco Vega" />
            <PortfolioLayout>
                <Hero resumeHref={resumeHref} />
                <About />
            </PortfolioLayout>
        </>
    );
}

export default PortfolioPage;
