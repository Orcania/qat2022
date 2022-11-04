import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import { getDecorator as getWalletDecorator } from 'src/decorators/walletdecorator';

import BannerSection from 'src/sections/mint/banner';

const MintPage = () => {
    return (
        <div className="has-bg-burgundy " style={{ minHeight: '100vh', paddingTop: '6rem' }}>
            <BannerSection />
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

MintPage.getDecorators = page => getWalletDecorator(page);

export default MintPage;
