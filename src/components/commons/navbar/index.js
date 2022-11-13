/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCelesteSelector, ConnectedWrapper } from '@celeste-js/react';

import { open_modal, set_music } from 'src/redux/actions';
import modals from 'src/static/app.modals';

const getAddressReduced = address => `${address.slice(0, 6)}...${address.slice(-4)}`;

const Navbar = () => {
    // global state
    const { pathname } = useRouter();
    const dispatch = useDispatch();
    const { homeReducer } = useSelector(state => state);

    // local state
    const [mobileActive, setMobileActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);

    const { walletReducer } = useCelesteSelector(state => state);
    // const { globalReducer } = useSelector(state => state);

    const handleHamburgerClick = () => {
        const newValue = !mobileActive;

        setBurgerActive(newValue);
        setMobileActive(newValue);
    };

    const handleOpenWalletsModal = () => {
        dispatch(open_modal({ modalName: modals.WALLETSMODAL }));
        handleHamburgerClick();
    };

    const handleOpenWalletAccountModal = () => {
        dispatch(open_modal({ modalName: modals.WALLETACCOUNT }));
        handleHamburgerClick();
    };

    // const handleOpenNetworksModal = () => {
    //     dispatch(open_modal({ modalName: modals.networksModal }));
    //     handleHamburgerClick();
    // };

    const handleNavbarItemClick = () => {
        handleHamburgerClick();
    };

    const handleSound = () => {
        dispatch(set_music(!homeReducer.isMusicActive));
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (+window.scrollY > 50) setBgColor(true);
            else setBgColor(false);
        });
    }, []);

    return (
        <nav
            className={`navbar custom-navbar is-fixed-top  ${
                bgColor ? 'has-bg-burgundy-o-8 has-bg-blur-1' : 'has-bg-transparent'
            }`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand  py-2">
                    <Link href="/home">
                        <a className="navbar-item " onClick={handleNavbarItemClick} role="button">
                            <img src="/media/logo2.webp" alt="" />
                        </a>
                    </Link>

                    <a
                        role="button"
                        className={`navbar-burger  ${burgerActive ? 'is-active' : ''} has-text-white`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={handleHamburgerClick}
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div className={`navbar-menu ${mobileActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link href="/home">
                            <a
                                className={`navbar-item has-font-montserrat ${pathname === '/home' ? 'is-active' : ''}`}
                                onClick={handleNavbarItemClick}
                                role="button"
                            >
                                <span> Home</span>
                            </a>
                        </Link>

                        <Link href="/howitworks">
                            <a
                                className={`navbar-item has-font-montserrat ${
                                    pathname === '/howitworks' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                                role="button"
                            >
                                <span> How it works</span>
                            </a>
                        </Link>

                        <Link href="/aboutus">
                            <a
                                className={`navbar-item has-font-montserrat ${
                                    pathname === '/aboutus' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                                role="button"
                            >
                                <span> About us</span>
                            </a>
                        </Link>

                        <Link href="/roadmap">
                            <a
                                className={`navbar-item has-font-montserrat ${
                                    pathname === '/roadmap' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                                role="button"
                            >
                                <span> Roadmap</span>
                            </a>
                        </Link>

                        <Link href="/var">
                            <a
                                className={`navbar-item has-font-montserrat ${pathname === '/var' ? 'is-active' : ''}`}
                                onClick={handleNavbarItemClick}
                                role="button"
                            >
                                <span> Project</span>
                            </a>
                        </Link>

                        <Link href="/rarity">
                            <a
                                className={`navbar-item has-font-montserrat ${
                                    pathname === '/rarity' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                                role="button"
                            >
                                <span> Rarity</span>
                            </a>
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item spc">
                            {/* {socialMedia.map(item => (
                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="mx-4">
                                    <span className="icon is-size-4">{item.icon()}</span>
                                </a>
                            ))} */}
                            <button
                                type="button"
                                className="unstyled-button is-hidden-touch mx-4"
                                onClick={handleSound}
                            >
                                <span className="icon is-size-4">
                                    <img
                                        src={`/media/icons/${homeReducer.isMusicActive ? 'sound' : 'mute'}.png`}
                                        alt=""
                                    />
                                </span>
                            </button>
                        </div>
                        <ConnectedWrapper
                            disconnectedComponent={
                                <div className="navbar-item botoncito">
                                    <button
                                        className="button is-blue is-rounded connect-btn"
                                        type="button"
                                        onClick={handleOpenWalletsModal}
                                    >
                                        <b>Connect</b>
                                    </button>
                                </div>
                            }
                        >
                            <div className="navbar-item ">
                                <button
                                    className="button is-blue is-rounded connect-btn"
                                    type="button"
                                    onClick={handleOpenWalletAccountModal}
                                >
                                    <b>{walletReducer.address && getAddressReduced(walletReducer.address)}</b>
                                </button>
                            </div>
                        </ConnectedWrapper>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
