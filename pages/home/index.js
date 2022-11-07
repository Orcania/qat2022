import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import { getDecorator as getWalletDecorator } from 'src/decorators/walletdecorator';

import BannerSection from 'src/sections/mint/banner';
import { set_video, set_music } from 'src/redux/actions';

const MintPage = () => {
    const dispatch = useDispatch();
    const { homeReducer } = useSelector(state => state);

    const [done, setDone] = useState(false);

    useEffect(() => {
        // if esc is pressed, change isVideoActive to false
        // is user touches the screen, change isVideoActive to false
        // if user scrolls, change isVideoActive to false

        if (done) return undefined;

        const c = () => {
            dispatch(set_video(false));
            dispatch(set_music(true));
            setDone(true);
        };

        document.addEventListener('keydown', c);
        document.addEventListener('touchstart', c);
        document.addEventListener('scroll', c);
        document.addEventListener('click', c);

        return () => {
            document.removeEventListener('keydown', c);
            document.removeEventListener('touchstart', c);
            document.removeEventListener('scroll', c);
            document.removeEventListener('click', c);
        };
    }, [dispatch, done]);

    return (
        <div className="has-bg-burgundy " style={{ minHeight: '100vh' }}>
            {homeReducer.isVideoActive ? (
                <div className="videoo-container" style={{ height: '100%', overflow: 'hidden' }}>
                    <video autoPlay loop muted>
                        <source src="/media/video/promo.mp4" type="video/mp4" />
                    </video>
                </div>
            ) : (
                <div style={{ paddingTop: '6rem' }}>
                    <BannerSection />
                </div>
            )}
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

MintPage.getDecorators = page => getWalletDecorator(page);

export default MintPage;
