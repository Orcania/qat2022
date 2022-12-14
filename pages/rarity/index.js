import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import TeamSection from 'src/sections/teams/teams-section';

const TeamsPage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <br />
            <br />
            <TeamSection />
        </div>
    );
};

TeamsPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Rarity')), 'Rarity');

export default TeamsPage;
