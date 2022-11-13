/* eslint-disable @next/next/no-img-element */
import { useDispatch } from 'react-redux';

import Logo from 'src/components/commons/logo';

import { open_modal } from 'src/redux/actions';

import modals from 'src/static/app.modals';

const BannerSection = () => {
    const dispath = useDispatch();

    // eslint-disable-next-line no-unused-vars

    const onMintClick = () => {
        dispath(open_modal({ modalName: modals.MINTMODAL }));
    };

    return (
        <section className="banner ">
            <div className="container px-5 ">
                <div
                    className="cc pt-a is-flex is-flex-direction-column is-justify-content-space-evenly"
                    style={{ minHeight: '90vh' }}
                >
                    <div className="columns">
                        <div className="column ">
                            <Logo />
                            <br />
                            <h1 className="subtitle  has-text-white  has-font-qatar has-text-centered-mobile is-size-6">
                                Register and Mint your NFT. Activate your legendary fantasy football team and collect
                                points.Play the unofficial Fantasy game of the World Cup & Make your winnings official.
                            </h1>
                        </div>
                        <div className="column">
                            <figure className="image is-16by9 has-border-2-ww-o-100">
                                <iframe
                                    src="https://youtube.com/embed/EfQ5ytGTmgc"
                                    className="has-ratio"
                                    width="640"
                                    height="360"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Game simulation"
                                />
                            </figure>
                            <br />
                            <h1 className="subtitle  has-text-ww  has-text-centered-mobile">
                                <span className="has-font-akira mr-5"> How does it work?</span>
                                <span className="is-hidden-mobile"> Learn more</span>
                            </h1>
                        </div>
                    </div>
                    <div className="has-text-centered-mobile">
                        <button
                            className="button is-blue is-medium has-font-akira py-5 connect-btn"
                            type="button"
                            onClick={onMintClick}
                        >
                            Get a team
                        </button>
                    </div>
                    {/* <br />
                    <br />
                    <br />
                    <br />
                    <div className="divbanner" style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
                        {live ? null : (
                            <div className="is-flex">
                                <div className="ccont is-flex is-flex-direction-column is-align-items-center">
                                    <h1 className="title ctitle has-text-ww has-font-monserrat">{timeLeft.D}</h1>
                                    <h1 className="subtitle has-text-ww has-font-monserrat is-3">Days</h1>
                                </div>
                                <div className="ccont is-flex is-flex-direction-column is-align-items-center">
                                    <h1 className="title ctitle has-text-ww has-font-monserrat">{timeLeft.H}</h1>
                                    <h1 className="subtitle has-text-ww has-font-monserrat is-3">Hours</h1>
                                </div>
                                <div className="ccont is-flex is-flex-direction-column is-align-items-center">
                                    <h1 className="title ctitle cnone has-text-ww has-font-monserrat">{timeLeft.M}</h1>
                                    <h1 className="subtitle has-text-ww has-font-monserrat is-3">Minutes</h1>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="divbanner" style={{ display: 'grid', placeItems: 'center' }}>
                        <button className="mint-button" type="button" onClick={onMintClick}>
                            Mint
                        </button>
                    </div>

                    <div className="divbanner" style={{ display: 'grid', placeItems: 'center' }}>
                        <img src="/media/phones.png" alt="" width="75%" className="is-hidden-touch" />
                        <img src="/media/phones.png" alt="" width="100%" className="is-hidden-desktop" />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
