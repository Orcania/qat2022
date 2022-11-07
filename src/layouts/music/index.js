/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { set_music } from 'src/redux/actions';

import styles from './music.module.scss';

const { container } = styles;

const MusicLayout = ({ children }) => {
    const dispatch = useDispatch();
    const { homeReducer } = useSelector(state => state);

    const handleSound = () => {
        dispatch(set_music(!homeReducer.isMusicActive));
    };

    useEffect(() => {
        if (homeReducer.isMusicActive) {
            document.getElementById('music').play();
        } else {
            document.getElementById('music').pause();
        }
    }, [homeReducer.isMusicActive]);

    return (
        <>
            <audio loop id="music">
                <source src="/media/music/music.mp3" type="audio/mp3" />
            </audio>

            <div className={`${container} is-hidden-desktop`}>
                <button type="button" className="unstyled-button  mx-4" onClick={handleSound}>
                    <span className="icon is-size-4">
                        <img src={`/media/icons/${homeReducer.isMusicActive ? 'sound' : 'mute'}.png`} alt="" />
                    </span>
                </button>
            </div>
            {children}
        </>
    );
};

export const getLayout = page => <MusicLayout>{page}</MusicLayout>;

export default MusicLayout;
