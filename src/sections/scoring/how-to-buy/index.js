/* eslint-disable @next/next/no-img-element */

import { open_modal } from 'src/redux/actions';

import modals from 'src/static/app.modals';
import { useDispatch } from 'react-redux';

import styles from './buy.module.scss';

const { container, root, cardImg, card_c } = styles;

const data = [
    {
        id: 1,
        title: 'Buy with Credit Card',
        videoSrc: 'https://www.youtube.com/embed/2WYRboKpKjk',
    },
    {
        id: 2,
        title: 'Buy with Crypto',
        videoSrc: 'https://www.youtube.com/embed/5aD9KP-OvIQ',
    },
    {
        id: 3,
        title: 'How to transfer your team from crossmint to another wallet',
        videoSrc: 'https://www.youtube.com/embed/tqPXoAyxRPw',
    },
];

const HowToBuy = () => {
    const dispath = useDispatch();

    const openMintModal = () => {
        dispath(open_modal({ modalName: modals.MINTMODAL }));
    };

    return (
        <section className={`px-2 ${root}`} style={{ marginBottom: '5rem' }}>
            <h1 className="subtitle has-text-ww has-font-akira has-text-centered is-3">How to buy</h1>
            <br />
            <div className="has-text-white has-font-qatar is-size-5 has-text-justified">
                <div className={container}>
                    {data.map(item => (
                        <div className="mb-6" key={item.id}>
                            <figure className="image is-16by9 has-border-2-ww-o-25">
                                <iframe
                                    src={item.videoSrc}
                                    className="has-ratio"
                                    width="640"
                                    height="360"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="How it works"
                                />
                            </figure>
                            <h1 className="subtitle has-text-white has-text-centered mt-6">{item.title}</h1>
                        </div>
                    ))}
                </div>
                <div className={`has-text-centered ${card_c}`}>
                    <br />
                    <br />
                    <div className="is-hidden-desktop">
                        <br />
                        <br />
                    </div>
                    <img src="/media/howitworks/card.png" alt="" id={cardImg} />
                    <button
                        className="button is-blue has-font-akira is-medium shadow2"
                        type="button"
                        onClick={openMintModal}
                        style={{ padding: '2rem 2.5rem' }}
                    >
                        Buy now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowToBuy;
