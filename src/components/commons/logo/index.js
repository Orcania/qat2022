/* eslint-disable @next/next/no-img-element */
import styles from './logo.module.scss';

const { logo } = styles;

const LogoComponent = () => {
    return (
        <div className={`is-flex is-align-items-center ${logo}`}>
            <img src="/media/logo.png" alt="" width="100px" />
            <div className="has-text-left" style={{ position: 'relative', top: '-15px' }}>
                <h1 className="title is-4 has-text-cream has-font-qatar-bold mb-0">World Fantasy Cup</h1>
                <h1 className="title has-text-cream has-font-qatar-bold has-text-centered">QAT2022</h1>
            </div>
        </div>
    );
};

export default LogoComponent;
