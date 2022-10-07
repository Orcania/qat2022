import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import ScoreBanner from 'src/sections/howto/banner';
import ScoringSection from 'src/sections/howto/scoring-section';
import ExampleSection from 'src/sections/howto/example';

const HowtoPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <ScoreBanner />
            <ScoringSection />
            <ExampleSection />
        </div>
    );
};

HowtoPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'How to')), 'How to');

export default HowtoPage;
