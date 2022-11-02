import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import ScoreBanner from 'src/sections/scoring/banner';
import VideoSection from 'src/sections/scoring/video';
import PointsSection from 'src/sections/scoring/points';
import ExampleSection from 'src/sections/scoring/example';
import RulesSection from 'src/sections/scoring/rules';

const ScoringPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <ScoreBanner />
            <VideoSection />
            <PointsSection />
            <ExampleSection />
            <RulesSection />
        </div>
    );
};

ScoringPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Scoring')), 'Scoring');

export default ScoringPage;
