import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import TeamSection from 'src/sections/aboutus/team';

const AboutusPage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <TeamSection />
        </div>
    );
};

AboutusPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'About us')), 'About us');

export default AboutusPage;
