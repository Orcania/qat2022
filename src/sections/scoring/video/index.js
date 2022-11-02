import styles from './styles.module.scss';

const { container } = styles;

const VideoSection = () => {
    return (
        <section className="px-2" style={{ marginBottom: '5rem' }}>
            <h1 className="cooltitle2 has-text-centered has-font-qatar mb-6">How it works</h1>
            <div className={container}>
                <div>
                    <figure className="image is-16by9">
                        <iframe
                            src="https://drive.google.com/file/d/1nEvonRJ1OS1W_io4iozdyZjyhA1kOQYn/preview"
                            className="has-ratio"
                            width="640"
                            height="360"
                            frameBorder="0"
                            allowFullScreen
                            title="How it works"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
