import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import TeamSection from 'src/sections/mint/teams';

const TeamsPage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <TeamSection />
        </div>
    );
};

TeamsPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Teams');

export default TeamsPage;
