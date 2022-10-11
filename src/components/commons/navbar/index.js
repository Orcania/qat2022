/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCelesteSelector, ConnectedWrapper } from '@celeste-js/react';

import { open_modal } from 'src/redux/actions';
import socialMedia from 'src/static/social-media';
import modals from 'src/static/app.modals';

const getAddressReduced = address => `${address.slice(0, 6)}...${address.slice(-4)}`;

const Navbar = () => {
    // local state
    const [mobileActive, setMobileActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);

    const { walletReducer } = useCelesteSelector(state => state);
    // const { globalReducer } = useSelector(state => state);
    const dispatch = useDispatch();

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

    useEffect(() => {
        const elmnt = document.getElementById('__next');
        let oldScroll = 0;
        elmnt.addEventListener('scroll', () => {
            if (elmnt.scrollTop > 50) setBgColor(true);
            else setBgColor(false);

            if (oldScroll && oldScroll > elmnt.scrollTop) setScrollingDown(false);
            else setScrollingDown(true);

            oldScroll = elmnt.scrollTop;
        });
    }, []);

    return (
        <nav
            className={`navbar custom-navbar is-fixed-top has-bg-cream ${bgColor ? 'has-navbar-bg-color' : ''} 
            ${scrollingDown ? 'is-hidden-up' : ''}`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand  py-2">
                    {/* <a
                    href="https://www.chaoticdjs.com/"
                    className="navbar-item"
                    onClick={handleNavbarItemClick}
                    role="button"
                >
                    <img src="./media/logo.png" width="120" alt="" />
                </a> */}

                    <a
                        role="button"
                        className={`navbar-burger  ${burgerActive ? 'is-active' : ''}`}
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
                        <Link href="/mint">
                            <a className="navbar-item " onClick={handleNavbarItemClick} role="button">
                                <span> Home</span>
                            </a>
                        </Link>

                        <Link href="/teams">
                            <a className="navbar-item " onClick={handleNavbarItemClick} role="button">
                                <span> Teams</span>
                            </a>
                        </Link>

                        <Link href="/howto">
                            <a className="navbar-item " onClick={handleNavbarItemClick} role="button">
                                <span> How To</span>
                            </a>
                        </Link>

                        <Link href="/var">
                            <a className="navbar-item " onClick={handleNavbarItemClick} role="button">
                                <span> VAR</span>
                            </a>
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item spc">
                            {socialMedia.map(item => (
                                <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="mx-4">
                                    <span className="icon is-size-4">{item.icon()}</span>
                                </a>
                            ))}
                        </div>
                        <ConnectedWrapper
                            disconnectedComponent={
                                <div className="navbar-item botoncito">
                                    <button
                                        id="connect-button"
                                        className="ccbutton navbar-button connbtn"
                                        type="button"
                                        onClick={handleOpenWalletsModal}
                                        data-content="Connect"
                                    />
                                </div>
                            }
                        >
                            <div className="navbar-item botoncito">
                                <button
                                    className="ccbutton navbar-button "
                                    type="button"
                                    onClick={handleOpenWalletAccountModal}
                                    data-content={walletReducer.address && getAddressReduced(walletReducer.address)}
                                >
                                    {walletReducer.address && getAddressReduced(walletReducer.address)}
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
