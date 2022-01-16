import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faToggleOn, faToggleOff, faUserAstronaut, faBox, faCoins, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import { handleShowMenu, handleTheme, selectDarkTheme, selectShowMenu } from '../../../features/layout/layout.slice';
import { Container } from '../Container/Container';

import NavbarStyles from './Navbar.styles';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const isTabletScreen = useMediaQuery({ query: '(min-width: 37.5em)' });
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 87.5em)' });
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectDarkTheme);
    const showMenu = useSelector(selectShowMenu);
    const [scrolled, setScrolled] = useState(false);

    const handleClickBars = () => {
        dispatch(handleShowMenu());
    };

    const handleToggle = () => {
        dispatch(handleTheme());
    };

    const handleScroll = () => {
        if (window.pageYOffset >= 90) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        handleScroll();
    }, [])

    window.addEventListener('scroll', handleScroll);

    const navbarList = () => (
        <ul className={isDesktopScreen ? "navbar__list" : "navbar__list--small"}
            style={isTabletScreen && showMenu ? { left: '80%' } : showMenu ? { left: '70%' } : {}}>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="characters">
                {isTabletScreen ? 'Characters' : <FontAwesomeIcon icon={faUserAstronaut} />}
            </NavLink></li>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="boxes">
                {isTabletScreen ? 'Boxes' : <FontAwesomeIcon icon={faBox} />}
            </NavLink></li>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="coins">
                {isTabletScreen ? 'Coins' : <FontAwesomeIcon icon={faCoins} />}
            </NavLink></li>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="about">
                {isTabletScreen ? 'About' : <FontAwesomeIcon icon={faCommentDots} />}
            </NavLink></li>
            <li className="navbar__item">
                {isDarkTheme && isTabletScreen ? 'Light ' : !isDarkTheme && isTabletScreen ? 'Dark' : ''}
                <FontAwesomeIcon className="navbar__item--icon toggle" icon={isDarkTheme ? faToggleOn : faToggleOff} onClick={handleToggle} />
            </li>
            <li className="navbar__item"><NavLink className={({ isActive }) => "navbar__item" + (isActive ? "active" : "")} to="profile">
                <img className="navbar__item--avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQH4NtwgxrZSjQ/profile-displayphoto-shrink_800_800/0/1632448218935?e=1645056000&v=beta&t=-NcjpqU0stNIyEixTZHiIhc4BVIwUhMx2W0BS-RtrUo" alt="Profile avatar"></img>
            </NavLink></li>
        </ul>
    );

    return (
        <header>
            <NavbarStyles className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <span className="navbar__logo" onClick={() => navigate("/")}>MDC</span>
                    {
                        isDesktopScreen
                            ?
                            navbarList()
                            :
                            (
                                <>
                                    {navbarList()}
                                    <FontAwesomeIcon className="navbar__item--icon bars" icon={showMenu ? faTimes : faBars} onClick={handleClickBars} />
                                </>
                            )
                    }
                </Container>
            </NavbarStyles>
        </header>
    )
}
