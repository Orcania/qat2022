import Logo from 'src/components/commons/logo';

import useCountdown from 'src/hooks/useCountdown';

const BannerSection = () => {
    const [timeLeft, live] = useCountdown(1668902400000);

    const onMintClick = () => {
        console.log('minting');
    };

    return (
        <section className="banner" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="cc pt-6" style={{ minHeight: '100%' }}>
                    <div className="divbanner">
                        <Logo />
                    </div>
                    <div className="divbanner">
                        <h1 className="maintitle title  has-text-cream has-text-centered has-font-qatar">
                            Welcome <br />
                            To the Fantasy
                        </h1>
                    </div>
                    <div className="divbanner" style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
                        {live ? null : (
                            <div className="is-flex">
                                <div className="ccont is-flex is-flex-direction-column is-align-items-center">
                                    <h1 className="title ctitle has-text-cream has-font-qatar">{timeLeft.D}</h1>
                                    <h1 className="subtitle has-text-cream has-font-qatar">Days</h1>
                                </div>
                                <div className="ccont is-flex is-flex-direction-column is-align-items-center">
                                    <h1 className="title ctitle has-text-cream has-font-qatar">{timeLeft.H}</h1>
                                    <h1 className="subtitle has-text-cream has-font-qatar">Hours</h1>
                                </div>
                                <div className="ccont is-flex is-flex-direction-column is-align-items-center">
                                    <h1 className="title ctitle cnone has-text-cream has-font-qatar">{timeLeft.M}</h1>
                                    <h1 className="subtitle has-text-cream has-font-qatar">Minutes</h1>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="divbanner" style={{ display: 'grid', placeItems: 'center' }}>
                        <button className="mint-button" type="button" onClick={onMintClick}>
                            Mint
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
