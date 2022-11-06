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

import styles from './mint.module.scss';

const { inputs } = styles;

const max = 100000;

const MintModal = () => {
    // app state
    const dispatch = useDispatch();
    const mintModal = useSelector(state => state.modalReducer[modals.MINTMODAL]);
    const { web3Reducer } = useCelesteSelector(state => state);

    // local state
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);
    const [isloading] = useState(false);

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

        const value = BigNumber(amount).multipliedBy(nftModel.price).toFixed(0).toString();

        // wait until tx has been sent or cancelled then open modal

        // const txRes = nftController.buy({
        //     from: walletReducer.address,
        //     value,
        // });

        dispatch(
            open_modal({
                modalName: modals.WHILEMINTINGMODAL,
                modalData: {
                    value,
                },
            })
        );

        setAmount(1);
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
            header="GET YOUR TEAM"
            onHide={closeModal}
            draggable={false}
            className="resize-manager"
            headerClassName="mintheader has-font-akira"
        >
            <form onSubmit={handleBuy}>
                <div className={` ${inputs} mb-5 mt-5`}>
                    <div className="field is-flex is-justify-content-space-between is-align-items-center mb-0">
                        <div className="control">
                            <button
                                className="button has-border-radius-12 is-medium"
                                type="button"
                                id="btn-left"
                                onClick={handleDecreaseClick}
                            >
                                <span className="icon is-size-6">
                                    <i className="fa-solid fa-minus" />
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
                                className="button has-border-radius-12 is-medium"
                                type="button"
                                id="btn-right"
                                onClick={handleIncreaseClick}
                            >
                                <span className="icon is-size-6">
                                    <i className="fa-solid fa-plus" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="is-flex is-justify-content-center my-5">
                    <img src="media/teams.png" alt="" width="40%" />
                </div>

                <div className="box has-bg-grey is-flex is-justify-content-space-between is-align-items-ceanter total-box">
                    <div>
                        <h3 className="has-text-ww-o-75 is-size-4 has-font-montserrat">
                            <b>Total</b>
                        </h3>
                        <h3 className="has-text-burgundy-o-6 is-size-6 has-font-montserrat">Ethereum</h3>
                    </div>
                    <h1 className="subtitle  mb-0 " sytle={{ height: '10px !important' }}>
                        <span className="has-font-ptmono is-size-4">
                            <b>{+BigNum2NormalNum(total, 18, 18)}</b>
                        </span>
                    </h1>
                </div>
                <div>
                    <ConnectedWrapper
                        disconnectedComponent={
                            <div className=" buy-btn">
                                <button
                                    className="button is-fullwidth is-burgundy is-large "
                                    type="button"
                                    onClick={openWalletModal}
                                >
                                    <b>
                                        <span className="mr-2">
                                            <i
                                                className="fas fa-wallet mr-2"
                                                style={{ transform: 'rotate(-135deg)' }}
                                            />
                                        </span>
                                        Connect Wallet
                                    </b>
                                </button>
                            </div>
                        }
                    >
                        <NetworkWrapper
                            info={
                                <SwitchNetworkButton
                                    className="button is-fullwidth is-burgundy is-large "
                                    chainId={+rpcs.ETH.chainId}
                                    onErrorCB={toast.error}
                                >
                                    <b>
                                        <span className="mr-2">
                                            <i className="fa-brands fa-ethereum" />
                                        </span>
                                        Change to Eth
                                    </b>
                                </SwitchNetworkButton>
                            }
                        >
                            <div className=" buy-btn">
                                <button
                                    label="Buy"
                                    type="submit"
                                    disabled={+amount === 0}
                                    className={`button is-fullwidth is-burgundy is-large ${
                                        isloading ? 'is-loading' : ''
                                    }`}
                                >
                                    <b>Let&apos;s Go!</b>
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
