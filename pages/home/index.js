import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import { getDecorator as getWalletDecorator } from 'src/decorators/walletdecorator';

import BannerSection from 'src/sections/mint/banner';
import { set_video } from 'src/redux/actions';

const MintPage = () => {
    const dispatch = useDispatch();
    const { homeReducer } = useSelector(state => state);

    useEffect(() => {
        // if esc is pressed, change isVideoActive to false
        // is user touches the screen, change isVideoActive to false
        // if user scrolls, change isVideoActive to false

        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                dispatch(set_video(false));
            }
        };

        const handleTouchStart = () => {
            dispatch(set_video(false));
        };

        const handleScroll = () => {
            dispatch(set_video(false));
        };

        const handleClick = () => {
            dispatch(set_video(false));
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClick);
        };
    }, [dispatch]);

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
