import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';

import Logo from 'src/components/commons/logo';
import HowToBuy from 'src/sections/scoring/how-to-buy';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import { getDecorator as getWalletDecorator } from 'src/decorators/walletdecorator';

import { open_modal } from 'src/redux/actions';

import modals from 'src/static/app.modals';

import { StringToHex, HexToBn } from 'src/utils';

const MintPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!router.query.sponsor) {
            // redirect to home
            router.push('/home');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.sponsor]);

    const onMintClick = () => {
        const referralId = HexToBn(StringToHex(router.query.sponsor.toLowerCase()));
        dispatch(open_modal({ modalName: modals.INFLUENCER_MINT_MODAL, modalData: { referralId } }));
    };

    return (
        <div className="has-bg-burgundy " style={{ minHeight: '100vh' }}>
            <div style={{ paddingTop: '6rem' }}>
                <section className="banner" style={{ minHeight: '100vh' }}>
                    <div className="container px-5">
                        <div className="cc pt-6" style={{ minHeight: '100%' }}>
                            <div className="mb-5">
                                <Logo />
                                <br />
                                <h1 className="subtitle  has-text-white  has-font-qatar has-text-centered-mobile is-size-6">
                                    Register and Mint your NFT. <br />
                                    Activate your legendary fantasy football team and collect points. <br />
                                    Play the unofficial Fantasy game of the World Cup & Make your winnings official.
                                </h1>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="divbanner" style={{ display: 'grid', placeItems: 'center' }}>
                                <button className="mint-button" type="button" onClick={onMintClick}>
                                    Mint
                                </button>
                            </div>

                            <div className="divbanner" style={{ display: 'grid', placeItems: 'center' }}>
                                <HowToBuy />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

MintPage.getDecorators = page => getWalletDecorator(page);

export default MintPage;
