import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCelesteSelector } from '@celeste-js/react';

import WalletController from 'src/controllers/wallet.controler';

import { set_wallet } from 'src/redux/actions';

const WalletDecorator = ({ children }) => {
    const dispatch = useDispatch();

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const [walletController] = useState(new WalletController());

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) {
            dispatch(set_wallet(walletController.create()));
            return;
        }

        (async () => {
            let wallet = walletController.create(walletReducer.address);
            wallet = await walletController.loadWalletData(wallet);
            dispatch(set_wallet(wallet));
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [web3Reducer.initialized, walletReducer.address, walletController]);

    // return view with walletModel
    return children;
};

export const getDecorator = component => <WalletDecorator>{component}</WalletDecorator>;

export default WalletDecorator;
