/* eslint-disable @next/next/no-img-element */
import styles from './logo.module.scss';

const { logo, title, img } = styles;

const LogoComponent = () => {
    return (
        <div className={`is-flex is-align-items-center ${logo}`}>
            <img src="/media/logo.png" alt="" width="150px" id={img} />
            <div className="has-text-left" style={{ position: 'relative' }}>
                <h1 className={`title is-1 has-text-ww has-font-akira mb-0 ${title}`}>
                    WORLD <br /> FANTASY <br /> CUP
                </h1>
            </div>
        </div>
    );
};

export default LogoComponent;
