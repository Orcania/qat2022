import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import BannerSection from 'src/sections/mint/banner';

import TeamSection from 'src/sections/mint/teams';

const WarningSection = () => {
    return (
        <div className="hero has-bg-cream">
            <div className="hero-body">
                <div className="container">
                    <h1 className="subtitle is-6 has-text-centered has-text-burgundy has-font-qatar">
                        World Fantasy Cup is not affiliated with the FIFA, and not accredited by the <br /> Official
                        World Cup Qatar 2022 Tournament.
                    </h1>
                </div>
            </div>
        </div>
    );
};

const MintPage = () => {
    return (
        <div className="has-bg-burgundy" style={{ minHeight: '100vh' }}>
            <BannerSection />
            <WarningSection />
            <TeamSection />
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Mint');

export default MintPage;
