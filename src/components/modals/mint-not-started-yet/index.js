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
                    <b>Hey! Wait! Only few more days before we open the mint ;)</b>
                </p>
            </div>
        </Dialog>
    );
};

export default MintNotStartedYetModal;
