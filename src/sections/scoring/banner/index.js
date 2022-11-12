/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss';

const { container, img_container, root } = styles;

const ScoreBanner = () => {
    return (
        <section
            className={`is-flex is-flex-direction-column is-justify-content-space-between px-3 ${root} mb-6`}
            style={{ minHeight: '100vh', background: 'transparent' }}
        >
            <div className={` ${img_container} is-hidden-mobile`}>
                <img src="/media/howitworks/star.png" alt="star" />
                <img src="/media/howitworks/line.png" alt="" />
            </div>

            <h1 className="subtitle has-text-ww has-font-akira has-text-centered is-3">
                Points per Player if his Team
            </h1>

            <div id={container}>
                <div className="columns is-variable is-8">
                    <div className="column">
                        <div className="box has-bg-white">
                            <h1
                                className="title has-text-centered has-font-montserrat"
                                style={{ fontSize: '4rem', fontWeight: '900' }}
                            >
                                0
                            </h1>
                            <div>
                                <figure className="image is-square">
                                    <img src="/media/howitworks/loses.png" alt="" />
                                </figure>
                            </div>
                            <h1 className="title has-text-centered has-font-akira">loses</h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box has-bg-white">
                            <h1
                                className="title has-text-centered has-font-montserrat"
                                style={{ fontSize: '4rem', fontWeight: '900' }}
                            >
                                +3
                            </h1>
                            <div>
                                <figure className="image is-square">
                                    <img src="/media/howitworks/wins.png" alt="" />
                                </figure>
                            </div>
                            <h1 className="title has-text-centered has-font-akira">wins</h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box has-bg-white">
                            <h1
                                className="title has-text-centered has-font-montserrat"
                                style={{ fontSize: '4rem', fontWeight: '900' }}
                            >
                                +1
                            </h1>
                            <div>
                                <figure className="image is-square">
                                    <img src="/media/howitworks/draws.png" alt="" />
                                </figure>
                            </div>
                            <h1 className="title has-text-centered has-font-akira">draws</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-hidden-desktop">
                <br />
                <br />
            </div>

            <div>
                <div className="buttons is-justify-content-center">
                    <button
                        className="button is-blue has-font-akira is-medium shadow2"
                        type="button"
                        style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
                    >
                        Get started
                    </button>
                    <button
                        className="button is-blue has-font-akira is-medium shadow2 outlined"
                        type="button"
                        style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
                    >
                        Project
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ScoreBanner;
