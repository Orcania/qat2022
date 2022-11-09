import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import ScoreBanner from 'src/sections/scoring/banner';
import PointsSection from 'src/sections/scoring/points';
import RulesSection from 'src/sections/scoring/rules';
import HowToBuy from 'src/sections/scoring/how-to-buy';
import Video from 'src/sections/scoring/video';

const ScoringPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <br />
            <br />
            <br />
            <br />
            <ScoreBanner />
            {/* <ExampleSection /> */}
            <br />
            <br />
            <Video />
            <br />
            <br />
            <PointsSection />
            <br />
            <br />
            <RulesSection />
            <br />
            <br />
            <HowToBuy />
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
