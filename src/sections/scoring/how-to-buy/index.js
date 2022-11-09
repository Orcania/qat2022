import styles from './buy.module.scss';

const { container } = styles;

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
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle3 has-text-centered has-font-akira mb-6 p-5">How to buy</h1>
            <br />
            <div className="has-text-white has-font-qatar is-size-5 has-text-justified">
                <div className={container}>
                    {data.map(item => (
                        <div className="mb-6" key={item.id}>
                            <figure className="image is-16by9 has-border-3-ww-o-100">
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
            </div>
        </section>
    );
};

export default HowToBuy;
