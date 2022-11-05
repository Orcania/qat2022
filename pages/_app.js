/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { Provider } from 'react-redux';

import WalletsModal from 'src/components/modals/wallets-modal';
import WalletAccountModal from 'src/components/modals/wallet-account-modal';
import MintModal from 'src/components/modals/mint';
import WhileMintModal from 'src/components/modals/while-mint';
import MintNotStartedYetModal from 'src/components/modals/mint-not-started-yet';

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

            <CelesteProvider>
                <ToastContainer theme="dark" />

                <Provider store={store}>
                    <WalletsModal />
                    <WalletAccountModal />
                    <MintModal />
                    <WhileMintModal />
                    <MintNotStartedYetModal />
                    {getDecorators(getLayout(<Component {...pageProps} />))}
                </Provider>
            </CelesteProvider>
        </>
    );
}

export default MyApp;
