import styles from './styles.module.scss';

const { container } = styles;

const VideoSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle3 has-text-centered has-font-akira mb-6 p-4">
                Game
                <br /> simulation
            </h1>
            <br />
            <div className={container}>
                <div>
                    <figure className="image is-16by9">
                        <iframe
                            src="https://youtube.com/embed/EfQ5ytGTmgc"
                            className="has-ratio"
                            width="640"
                            height="360"
                            frameBorder="0"
                            allowFullScreen
                            title="Game simulation"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
