/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCelesteSelector, ConnectedWrapper, NetworkWrapper, SwitchNetworkButton } from '@celeste-js/react';
import BigNumber from 'bignumber.js';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';

import { close_modal, open_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';
// import { onConnectError } from 'src/static/notifications-functions';

import MintController from 'src/controllers/mint.controller';
// import WalletController from 'src/controllers/wallet.controler';

import NftModel from 'src/models/nft.model';

import modals from 'src/static/app.modals';

import { formatNumber, BigNum2NormalNum } from 'src/utils';

import { rpcs } from 'celeste.config';

import styles from '../mint/mint.module.scss';

const { inputs, crossmint_btn } = styles;

const max = 100000;

const InfluencerMintModal = () => {
    // app state
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modalReducer[modals.INFLUENCER_MINT_MODAL]);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    // local state
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);
    const [isloading] = useState(false);
    const buttonsRef = useRef(null);

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

        const { referralId } = modal.data;

        const txMethod = () =>
            nftController.influencerBuy(
                {
                    referralId,
                },
                {
                    from: walletReducer.address,
                    value,
                }
            );

        dispatch(
            open_modal({
                modalName: modals.WHILEMINTINGMODAL,
                modalData: {
                    txMethod,
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

    // useEffect(() => {
    //     if (!buttonsRef.current || !mintModal.isOpen) return;

    //     const buttonsDiv = buttonsRef.current;

    //     const crossmintBtnSpan = buttonsDiv.querySelector('#crossmint-btn span');

    //     crossmintBtnSpan.textContent = 'Buy with card';
    // }, [buttonsRef, mintModal.isOpen]);

    return (
        <Dialog
            visible={modal.isOpen}
            header="GET YOUR TEAM R"
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
                    <img src="media/teams.png" alt="" width="35%" />
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
                    <div className="buttons " ref={buttonsRef}>
                        <ConnectedWrapper
                            disconnectedComponent={
                                <button
                                    className="button is-fullwidth is-burgundy  is-normal  has-border-radius-10 "
                                    type="button"
                                    onClick={openWalletModal}
                                >
                                    <b>
                                        <span className="mr-2">
                                            <i className="fa-brands fa-ethereum mr-2" />
                                        </span>
                                        Buy with ETH
                                    </b>
                                </button>
                            }
                        >
                            <NetworkWrapper
                                info={
                                    <SwitchNetworkButton
                                        className="button is-fullwidth is-burgundy  is-normal  has-border-radius-10 "
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
                                <button
                                    label="Buy"
                                    type="submit"
                                    disabled={+amount === 0}
                                    className={`button is-fullwidth is-burgundy is-normal has-border-radius-10 ${
                                        isloading ? 'is-loading' : ''
                                    }`}
                                >
                                    <span className="icon">
                                        <i className="fa-brands fa-ethereum" />
                                    </span>
                                    <b>Buy with ETH</b>
                                </button>
                            </NetworkWrapper>
                        </ConnectedWrapper>
                        <CrossmintPayButton
                            id="crossmint-btn"
                            className={`button is-fullwidth is-burgundy is-normal has-border-radius-10 ${crossmint_btn}`}
                            clientId="3d71cf98-b158-4371-a56f-97db0eeb9316"
                            disabled={+amount === 0}
                            mintConfig={{
                                type: 'erc-721',
                                totalPrice: BigNum2NormalNum(total).toString(),
                                referralId: modal.data ? modal.data.referralId : '',
                            }}
                            type="button"
                        >
                            Buy with card
                        </CrossmintPayButton>
                    </div>
                </div>
            </form>
        </Dialog>
    );
};

export default InfluencerMintModal;
