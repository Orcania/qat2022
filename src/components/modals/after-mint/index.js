/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

import { close_modal } from 'src/redux/actions/modalActions';

import { Dialog } from 'primereact/dialog';
// import { onConnectError } from 'src/static/notifications-functions';

import modals from 'src/static/app.modals';

const AfterMintModal = () => {
    // app state
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modalReducer[modals.AFTER_MINT_MODAL]);

    const { data } = modal;

    console.log('data', data);

    const closeModal = () => dispatch(close_modal());

    const productTemplate = nft => {
        return (
            <div
                className="has-bg-oraange has-border-2-grey-o-100 is-flex is-justify-content-center"
                style={{ height: '100%' }}
            >
                <div
                    className="is-flex is-flex-direction-column is-justify-content-space-evenly"
                    style={{ width: '80%', height: '100%' }}
                >
                    <img src={nft.url} alt="" />
                    <div className="is-flex is-justify-content-center">
                        <Tag value={`NFT Id: ${nft.id}`} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Dialog
            visible={modal.isOpen}
            header="Your nfts"
            onHide={closeModal}
            draggable={false}
            className="resize-manager"
            headerClassName="mintheader has-font-akira"
        >
            <div>
                {data ? (
                    <Carousel
                        value={data.images}
                        numVisible={1}
                        numScroll={1}
                        orientation="vertical"
                        verticalViewPortHeight="360px"
                        itemTemplate={productTemplate}
                    />
                ) : null}
            </div>
        </Dialog>
    );
};

export default AfterMintModal;
