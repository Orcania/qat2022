/* eslint-disable @next/next/no-img-element */
import { useDispatch } from 'react-redux';

import { ConnectedWrapper, NetworkWrapper } from '@celeste-js/react';

import Logo from 'src/components/commons/logo';

import useCountdown from 'src/hooks/useCountdown';

import { open_modal } from 'src/redux/actions';

import modals from 'src/static/app.modals';
import { toast } from 'react-toastify';

const BannerSection = () => {
    const dispath = useDispatch();

    const [timeLeft, live] = useCountdown(1668902400000);

    const onMintClick = () => {
        dispath(open_modal({ modalName: modals.MINTMODAL }));
    };

    const openWalletsModal = () => {
        dispath(open_modal({ modalName: modals.WALLETSMODAL }));
    };

    const pleaseChangeToEth = () => {
        toast.info('Please change to Ethereum network', {
            closeOnClick: false,
            pauseOnHover: true,
        });
    };

    return (
        <section className="banner" style={{ minHeight: '100vh' }}>
            <div className="container px-5">
                <div className="cc pt-6" style={{ minHeight: '100%' }}>
                    <div className="mb-5">
                        <Logo />
                    </div>
                    <div className="divbanner">
                        <h1 className="subtitle  has-text-white  has-font-qatar has-text-centered-mobile">
                            Register and Mint your NFT <br />
                            Activate your legendary fantasy football team and collect points. <br />
                            Play the unofficial Fantasy game of the World Cup & Make your winnings official.
                        </h1>
                    </div>
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
                        <ConnectedWrapper
                            disconnectedComponent={
                                <button className="mint-button" type="button" onClick={openWalletsModal}>
                                    Connect Wallet
                                </button>
                            }
                        >
                            <NetworkWrapper
                                info={
                                    <button className="mint-button" type="button" onClick={pleaseChangeToEth}>
                                        eth
                                    </button>
                                }
                            >
                                <button className="mint-button" type="button" onClick={onMintClick}>
                                    Mint
                                </button>
                            </NetworkWrapper>
                        </ConnectedWrapper>
                    </div>

                    <div className="divbanner" style={{ display: 'grid', placeItems: 'center' }}>
                        <img src="/media/phones.png" alt="" width="75%" className="is-hidden-touch" />
                        <img src="/media/phones.png" alt="" width="100%" className="is-hidden-desktop" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
