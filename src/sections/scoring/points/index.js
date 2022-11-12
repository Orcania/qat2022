/* eslint-disable @next/next/no-img-element */
import styles from './points.module.scss';

const { circle, container, img_container, root, chart, stars } = styles;

const data = [
    {
        id: 1,
        title: 'Visit www.worldfantasycup.com',
    },
    {
        id: 2,
        title: 'Click on Get a Team button',
    },
    {
        id: 3,
        title: 'Select your prefered payment method',
    },
    {
        id: 4,
        title: 'Approve the transaction',
    },
    {
        id: 5,
        title: 'Receive your NFT team',
    },
    {
        id: 6,
        title: 'Sit back, watch the World Cup, and monitor your team’s ranking',
    },
    {
        id: 7,
        title: 'Collect your prizes!',
    },
    {
        id: 8,
        title: 'Share your team with the other fans on Discord and Twitter!',
    },
];

const PointsSection = () => {
    return (
        <section className={`px-2 ${root}`} style={{ marginBottom: '5rem' }}>
            <div className={`${img_container} is-hidden-mobile`}>
                <img src="/media/howitworks/chart.png" alt="" id={chart} />

                <img src="/media/howitworks/stars.png" alt="" id={stars} />
            </div>
            <h1 className="subtitle has-text-ww has-font-akira has-text-centered is-3">Step by Step</h1>
            <br />
            <br />
            <br />
            <div
                className="has-text-white has-font-qatar is-size-5 has-text-justified"
                style={{ zIndex: '5', position: 'relative' }}
            >
                <div className="columns">
                    <div className="column has-bgorange is-flex is-justify-content-center">
                        <div className={container}>
                            <ul>
                                {data.slice(0, 4).map(item => (
                                    <li key={item.id} className="mb-3">
                                        <div className="columns is-vcentered">
                                            <div className="column is-narrow is-flex is-justify-content-center">
                                                <div className={`${circle} has-font-akira`}>{item.id}</div>
                                            </div>
                                            <div className="column">
                                                <div className="has-text-centered-mobile">{item.title}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="column has-bgblue is-flex is-justify-content-center">
                        <div className={container}>
                            <ul>
                                {data.slice(4, 8).map(item => (
                                    <li key={item.id} className="mb-3">
                                        <div className="columns is-vcentered">
                                            <div className="column is-narrow is-flex is-justify-content-center">
                                                <div className={`${circle} has-font-akira`}>{item.id}</div>
                                            </div>
                                            <div className="column">
                                                <div className="has-text-centered-mobile">{item.title}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className="has-text-centered">
                    <button
                        className="button is-blue has-font-akira is-medium shadow2"
                        type="button"
                        style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
                    >
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PointsSection;
