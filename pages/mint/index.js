import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

const BannerSection = () => {
    return (
        <section className="banner" style={{ height: '100vh' }}>
            <div className="cc py-6" style={{ height: '100%' }}>
                <h1 className="title is1 has-text-white has-text-centered">
                    Welcome <br />
                    To the Fantasy
                </h1>
            </div>
        </section>
    );
};

const MintPage = () => {
    return (
        <div className="has-bg-burgundy" style={{ minHeight: '100vh' }}>
            <div className="container">
                <BannerSection />
            </div>
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Mint');

export default MintPage;
