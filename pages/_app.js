/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { Provider } from 'react-redux';

import MusicLayout from 'src/layouts/music';

import WalletsModal from 'src/components/modals/wallets-modal';
import WalletAccountModal from 'src/components/modals/wallet-account-modal';
import MintModal from 'src/components/modals/mint';
import WhileMintModal from 'src/components/modals/while-mint';
import AfterMintModal from 'src/components/modals/after-mint';
import MintNotStartedYetModal from 'src/components/modals/mint-not-started-yet';
import InfluencerMintModal from 'src/components/modals/influencer-mint';

import { ToastContainer } from 'react-toastify';

import store from 'src/redux/store';

import appConfig from 'src/static/app.config';

import 'src/scss/main.scss';

const CelesteProvider = dynamic(() => import('src/components/celeste'), { ssr: false });

const { FONT_AWESOME_KEY } = process.env;
const { appName } = appConfig;

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page);
    const getDecorators = Component.getDecorators || (c => c);
    return (
        <>
            <Head>
                <title>{appName}</title>
                <meta name="description" content={appConfig.description} />
            </Head>
            <Script src={`https://kit.fontawesome.com/${FONT_AWESOME_KEY}.js`} />
            <Script src="https://unpkg.com/@crossmint/client-sdk-vanilla-ui@0.1.0/lib/index.global.js" />

            <CelesteProvider>
                <ToastContainer theme="dark" />

                <Provider store={store}>
                    <WalletsModal />
                    <WalletAccountModal />
                    <MintModal />
                    <InfluencerMintModal />
                    <WhileMintModal />
                    <AfterMintModal />
                    <MintNotStartedYetModal />
                    <MusicLayout>{getDecorators(getLayout(<Component {...pageProps} />))}</MusicLayout>
                </Provider>
            </CelesteProvider>
        </>
    );
}

export default MyApp;
