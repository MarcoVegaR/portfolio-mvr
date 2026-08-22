import { Head } from '@inertiajs/react';

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
            </PortfolioLayout>
        </>
    );
}

export default PortfolioPage;
