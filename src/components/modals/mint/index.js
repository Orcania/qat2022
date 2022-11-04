/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCelesteSelector, ConnectedWrapper, NetworkWrapper, SwitchNetworkButton } from '@celeste-js/react';
import BigNumber from 'bignumber.js';

import { close_modal, open_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';
// import { onConnectError } from 'src/static/notifications-functions';

import MintController from 'src/controllers/mint.controller';
// import WalletController from 'src/controllers/wallet.controler';

import NftModel from 'src/models/nft.model';

import modals from 'src/static/app.modals';

import { formatNumber, BigNum2NormalNum } from 'src/utils';

import { rpcs } from 'celeste.config';

const max = 100000;

const MintModal = () => {
    // app state
    const dispatch = useDispatch();
    const mintModal = useSelector(state => state.modalReducer[modals.MINTMODAL]);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    // local state
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);
    const [isloading, setIsLoading] = useState(false);

    // controllers
    const [nftController] = useState(new MintController());
    // const [walletController] = useState(new WalletController());

    // models
    const [nftModel, setNftModel] = useState(new NftModel());
    // const { walletModelReducer } = useSelector(state => state);

    const closeModal = () => dispatch(close_modal());

    const openWalletModal = () => dispatch(open_modal({ modalName: modals.WALLETSMODAL }));

    const handleIncreaseClick = () => {
        if (amount < max) {
            setAmount(+amount + 1);
        }
    };

    const handleDecreaseClick = () => {
        if (+amount > 1) {
            setAmount(+amount - 1);
        }
    };

    const onAmountChange = e => {
        const value = e.target.value.replace(/,/g, '');

        // check value does not include decimls or symbols and allow empty string and is less than 50k
        if (value === '' || (value.match(/^[0-9]*$/) && value <= max) || +value === 0) {
            setAmount(value);
            // setFormatedAmount(formatNumber(value));
        }
    };

    const handleBuy = async e => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const value = BigNumber(amount).multipliedBy(nftModel.price).toFixed(0).toString();
            const txRes = await nftController.buy({
                from: walletReducer.address,
                value,
            });

            // dispatch(open_modal({ modalName: modals.WHILEMINTINGMODAL }));

            const toastContent = () => (
                <div className="">
                    <div className="">
                        <h1 className="subtitle is-6 has-text-success mb-0">
                            <span>Successfull Transaction!</span>
                        </h1>{' '}
                        <a href={`${rpcs.ETH.explorer}/tx/${txRes.transactionHash}`} target="_blank" rel="noreferrer">
                            View on Etherscan
                        </a>
                    </div>
                </div>
            );

            toast.success(toastContent, {
                closeOnClick: false,
                pauseOnHover: true,
            });
        } catch (err) {
            toast.error(err.message);
            console.log(err);
        }

        setIsLoading(false);
        setAmount(1);
        setTotal(0);
    };

    // get nft data
    useEffect(() => {
        (async () => {
            const nft = await nftController.getNftData();
            setNftModel(nft);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [web3Reducer.readonly_initialized]);

    // calculate total price
    useEffect(() => {
        if (+amount === 0) {
            setTotal(0);
            return;
        }

        const tottal = new BigNumber(amount).multipliedBy(nftModel.price).toFixed(0).toString();
        setTotal(tottal);
    }, [amount, nftModel]);

    return (
        <Dialog
            visible={mintModal.isOpen}
            header="Assemble your Teams"
            onHide={closeModal}
            draggable={false}
            className="resize-manager"
            headerClassName="has-font-akira"
        >
            <form onSubmit={handleBuy}>
                <div className="box has-bg-darkpurple-o-50 has-border-radius-12">
                    <div className="field is-flex is-justify-content-space-between is-align-items-center mb-0">
                        <div className="control">
                            <button
                                className="button has-border-radius-12"
                                type="button"
                                id="btn-left"
                                onClick={handleDecreaseClick}
                            >
                                <span className="icon is-small">
                                    <i className="fas fa-angle-left" />
                                </span>
                            </button>
                        </div>
                        <div className="control">
                            <input
                                id="input-amount"
                                className="input has-font-ptmono has-text-centered"
                                type="text"
                                placeholder="Name"
                                value={formatNumber(amount)}
                                onChange={onAmountChange}
                            />
                        </div>
                        <div className="control">
                            <button
                                className="button has-border-radius-12"
                                type="button"
                                id="btn-right"
                                onClick={handleIncreaseClick}
                            >
                                <span className="icon is-small">
                                    <i className="fas fa-angle-right" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="box has-bg-darkpurple-o-50 is-flex is-justify-content-space-between is-align-items-ceanter total-box">
                    <h3 className="has-text-ww-o-75">Total</h3>
                    <h1 className="subtitle  mb-0 " sytle={{ height: '10px !important' }}>
                        <span className="has-font-ptmono">{+BigNum2NormalNum(total, 18, 10)}</span> ETH
                    </h1>
                </div>
                <div>
                    <ConnectedWrapper
                        disconnectedComponent={
                            <div className=" buy-btn">
                                <button
                                    className="button has-text-white is-medium"
                                    type="button"
                                    onClick={openWalletModal}
                                >
                                    <span className="mr-2">
                                        <i className="fas fa-wallet mr-2" style={{ transform: 'rotate(-135deg)' }} />
                                    </span>
                                    Connect Wallet
                                </button>
                            </div>
                        }
                    >
                        <NetworkWrapper
                            info={
                                <SwitchNetworkButton
                                    className="button has-text-white is-medium"
                                    chainId={+rpcs.ETH.chainId}
                                    onErrorCB={toast.error}
                                >
                                    Change to Eth
                                </SwitchNetworkButton>
                            }
                        >
                            <div className=" buy-btn">
                                <button
                                    label="Buy"
                                    type="submit"
                                    disabled={+amount === 0}
                                    className={`button is-fullwidth ${isloading ? 'is-loading' : ''}`}
                                >
                                    Mint
                                </button>
                            </div>
                        </NetworkWrapper>
                    </ConnectedWrapper>
                </div>
            </form>
            {/* <video autoPlay loop muted>
                <source src="/media/video/mint.mp4" type="video/mp4" />
            </video> */}
        </Dialog>
    );
};

export default MintModal;
