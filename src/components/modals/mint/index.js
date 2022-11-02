/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { close_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';
// import { onConnectError } from 'src/static/notifications-functions';

import modals from 'src/static/app.modals';
import { toast } from 'react-toastify';

const MintModal = () => {
    // app state
    const dispatch = useDispatch();
    const mintModal = useSelector(state => state.modalReducer[modals.MINTMODAL]);

    const closeModal = () => dispatch(close_modal());

    useEffect(() => {
        if (!mintModal.isOpen) return;
        // sleep 5 seconds
        setTimeout(() => {
            const toastContent = () => (
                <div className="has-bg-cream">
                    <p className="has-font-qatar">
                        <h1 className="subtitle is-6 has-text-success mb-0">
                            <span>Successfull Min!</span>
                        </h1>{' '}
                        <a href="example.com" target="_blank" rel="noreferrer">
                            View on Etherscan
                        </a>
                    </p>
                </div>
            );

            toast.success(toastContent, {
                closeOnClick: false,
                pauseOnHover: true,
            });

            // close modal
            dispatch(close_modal());
        }, 3000);
    }, [dispatch, mintModal.isOpen]);

    return (
        <Dialog
            visible={mintModal.isOpen}
            header="Your Team is Being Assembled"
            onHide={closeModal}
            draggable={false}
            className="resize-manager has-font-qatar"
        >
            <video autoPlay loop muted>
                <source src="/media/video/mint.mp4" type="video/mp4" />
            </video>
        </Dialog>
    );
};

export default MintModal;
