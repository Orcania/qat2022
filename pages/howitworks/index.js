import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import ScoreBanner from 'src/sections/scoring/banner';
import PointsSection from 'src/sections/scoring/points';
import ExampleSection from 'src/sections/scoring/example';
import RulesSection from 'src/sections/scoring/rules';

const ScoringPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <br />
            <br />
            <br />
            <br />
            <ScoreBanner />
            <PointsSection />
            <ExampleSection />
            <br />
            <br />
            <RulesSection />
        </div>
    );
};

ScoringPage.getLayout = page =>
    getPageTitleLayout(
        getMainLayout(
            getSectionLayout(page, () => (
                <span className="ignore-font">
                    How it <br /> works
                </span>
            ))
        ),
        'How it works'
    );

export default ScoringPage;
