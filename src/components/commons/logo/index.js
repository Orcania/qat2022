/* eslint-disable @next/next/no-img-element */
import styles from './logo.module.scss';

const { logo } = styles;

const LogoComponent = () => {
    return (
        <div className={`is-flex is-align-items-center ${logo}`}>
            <img src="/media/logo.png" alt="" width="100px" />
            <div className="has-text-centered">
                <h1 className="title is-5 has-text-cream has-font-qatar mb-0">World Fantasy Cup</h1>
                <h1 className="title has-text-cream has-font-qatar">QAT2022</h1>
            </div>
        </div>
    );
};

export default LogoComponent;
