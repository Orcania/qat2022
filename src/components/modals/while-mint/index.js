/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from '@celeste-js/react';

import { close_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';
// import { onConnectError } from 'src/static/notifications-functions';

import api from 'src/api';

import MintController from 'src/controllers/mint.controller';

import modals from 'src/static/app.modals';
import { toast } from 'react-toastify';
import { rpcs } from 'celeste.config';
// import { toast } from 'react-toastify';

const WhileMintModal = () => {
    // app state
    const dispatch = useDispatch();
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);
    const modal = useSelector(state => state.modalReducer[modals.WHILEMINTINGMODAL]);

    const closeModal = () => dispatch(close_modal());

    const [nftController] = useState(new MintController());

    useEffect(() => {
        if (!modal.isOpen || !web3Reducer.initialized || walletReducer.address === null) return;
        // sleep 5 seconds

        (async () => {
            const { value } = modal.data;

            try {
                const txRes = await nftController.buy({
                    value,
                    from: walletReducer.address,
                });

                await new Promise(resolve => {
                    setTimeout(resolve, 5000);
                });

                const res = await api.get.mintedNfts(walletReducer.address);

                console.log(res);

                const toastContent = () => (
                    <div className="">
                        <div className="">
                            <h1 className="subtitle is-6 has-text-success mb-0">
                                <span>Successfull Transaction!</span>
                            </h1>{' '}
                            <a
                                href={`${rpcs.ETH.explorer}/tx/${txRes.transactionHash}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on Etherscan
                            </a>
                        </div>
                    </div>
                );

                toast.success(toastContent, {
                    closeOnClick: false,
                    pauseOnHover: true,
                });
            } catch (e) {
                toast.error(e.message);
                dispatch(close_modal());
            }
        })();

        setTimeout(() => {
            // const toastContent = () => (
            //     <div className="has-bg-cream">
            //         <p className="has-font-qatar">
            //             <h1 className="subtitle is-6 has-text-success mb-0">
            //                 <span>Successfull Min!</span>
            //             </h1>{' '}
            //             <a href="example.com" target="_blank" rel="noreferrer">
            //                 View on Etherscan
            //             </a>
            //         </p>
            //     </div>
            // );
            // toast.success(toastContent, {
            //     closeOnClick: false,
            //     pauseOnHover: true,
            // });
            // close modal
            // dispatch(close_modal());
        }, 5000);
    }, [dispatch, modal.isOpen, web3Reducer.initialized, walletReducer.address]);

    return (
        <Dialog
            visible={modal.isOpen}
            header="Your Team is Being Assembled"
            onHide={closeModal}
            draggable={false}
            className="resize-manager"
            headerClassName="has-font-akira"
            modal
        >
            <video autoPlay loop muted>
                <source src="/media/video/mint.mp4" type="video/mp4" />
            </video>
        </Dialog>
    );
};

export default WhileMintModal;
