import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import BannerSection from 'src/sections/mint/banner';

const HomePage = () => {
    return (
        <div className="has-bg-burgundy" style={{ minHeight: '100vh' }}>
            <BannerSection />
        </div>
    );
};

HomePage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

export default HomePage;
