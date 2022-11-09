/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';

import { close_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';

import modals from 'src/static/app.modals';

const MintNotStartedYetModal = () => {
    // app state
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modalReducer[modals.MINTNOTSTARTEDMODAL]);

    const closeModal = () => dispatch(close_modal());

    return (
        <Dialog
            visible={modal.isOpen}
            header="Hello there!"
            onHide={closeModal}
            draggable={false}
            className="resize-manager"
        >
            <div>
                <p>
                    <b>
                        If you are buying through a sponsor presale link, make sure to click on it again to be
                        redirected to the sponsor buying page.
                        <br /> <br />
                        To all other buyers, we can&apos;t wait to welcome you on Nov-14 for the Public Sale.
                    </b>
                </p>
            </div>
        </Dialog>
    );
};

export default MintNotStartedYetModal;
