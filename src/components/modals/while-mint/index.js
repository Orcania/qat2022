/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from '@celeste-js/react';

import { close_modal, open_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';
// import { onConnectError } from 'src/static/notifications-functions';

import api from 'src/api';

import modals from 'src/static/app.modals';
import { toast } from 'react-toastify';
import { rpcs } from 'celeste.config';
// import { toast } from 'react-toastify';

const rootUrl = 'https://server.worldfantasycup.com/image?id=';

const WhileMintModal = () => {
    // app state
    const dispatch = useDispatch();
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);
    const modal = useSelector(state => state.modalReducer[modals.WHILEMINTINGMODAL]);

    const closeModal = () => dispatch(close_modal());

    useEffect(() => {
        if (!modal.isOpen || !web3Reducer.initialized || walletReducer.address === null) return;
        // sleep 5 seconds

        (async () => {
            const { txMethod } = modal.data;

            try {
                const txRes = await txMethod();

                await new Promise(resolve => {
                    setTimeout(resolve, 8000);
                });

                const res = await api.get.mintedNfts(walletReducer.address);

                const images = res.data.data.map(item => {
                    return {
                        id: item,
                        url: rootUrl + item,
                    };
                });

                dispatch(
                    open_modal({
                        modalName: modals.AFTER_MINT_MODAL,
                        modalData: {
                            images,
                        },
                    })
                );

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
