import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import useCountdown from 'src/hooks/useCountdown';

const BannerSection = () => {
    const [timeLeft, live] = useCountdown(1668902400000);

    const onMintClick = () => {
        console.log('minting');
    };

    return (
        <section className="banner" style={{ height: '100vh' }}>
            <div className="cc py-6" style={{ height: '100%' }}>
                <div>
                    <h1 className="maintitle title  has-text-cream has-text-centered has-font-qatar">
                        Welcome <br />
                        To the Fantasy
                    </h1>
                </div>
                <div style={{ width: '100%' }}>
                    {live ? null : (
                        <div className="is-flex">
                            <div className="is-flex is-flex-direction-column is-align-items-center mx-5">
                                <h1 className="title has-text-cream has-font-qatar">{timeLeft.D}</h1>
                                <h1 className="subtitle has-text-cream has-font-qatar">Days</h1>
                            </div>
                            <div className="is-flex is-flex-direction-column is-align-items-center mx-5">
                                <h1 className="title has-text-cream has-font-qatar">{timeLeft.H}</h1>
                                <h1 className="subtitle has-text-cream has-font-qatar">Hours</h1>
                            </div>
                            <div className="is-flex is-flex-direction-column is-align-items-center mx-5">
                                <h1 className="title has-text-cream has-font-qatar">{timeLeft.M}</h1>
                                <h1 className="subtitle has-text-cream has-font-qatar">Minutes</h1>
                            </div>
                        </div>
                    )}
                </div>
                <div className="">
                    <button className="mint-button" type="button" onClick={onMintClick}>
                        Mint
                    </button>
                </div>
            </div>
        </section>
    );
};

const WarningSection = () => {
    return (
        <div className="hero has-bg-cream">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-centered has-text-cream has-font-qatar">Warning</h1>
                </div>
            </div>
        </div>
    );
};

const MintPage = () => {
    return (
        <div className="has-bg-burgundy" style={{ minHeight: '100vh' }}>
            <div className="container">
                <BannerSection />
                <WarningSection />
            </div>
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Mint');

export default MintPage;
