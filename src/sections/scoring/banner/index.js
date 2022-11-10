import styles from './index.module.scss';

const { container } = styles;

const ScoreBanner = () => {
    return (
        <section
            className="is-flex is-flex-direction-column is-justify-content-space-evenly"
            style={{ minHeight: '100vh', background: 'transparent' }}
        >
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
        </section>
    );
};

export default ScoreBanner;
