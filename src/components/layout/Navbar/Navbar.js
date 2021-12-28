import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import { handleNavbarScroll, handleShowMenu, handleTheme, selectDarkTheme, selectNavbarScroll, selectShowMenu } from '../../../features/layout/layout.slice';
import { Container } from '../Container/Container';

import NavbarStyles from './Navbar.styles';
import { useEffect } from 'react';

export const Navbar = () => {
    const navigate = useNavigate();
    const isMediumScreen = useMediaQuery({
        query: '(min-width: 87.5em)'
    });
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectDarkTheme);
    const showMenu = useSelector(selectShowMenu);
    const isNavbarScroll = useSelector(selectNavbarScroll);

    const handleClickBars = () => {
        dispatch(handleShowMenu());
    };

    const handleToggle = () => {
        dispatch(handleTheme());
    };

    const handleNavbarSCroll = () => {

    };

    useEffect(() => {
        const scroll = window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) {
                dispatch(handleNavbarScroll(true));
            }
            if (window.scrollY < 90) {
                dispatch(handleNavbarScroll(false));
            }
            return;
        });

        return () => window.removeEventListener('scroll', scroll);
    }, [dispatch])


    const scrollNavbarStyles = {
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem'
    };

    const navbarList = () => (
        <ul className={isMediumScreen ? "navbar__list" : "navbar__list--small"} style={!isMediumScreen && showMenu ? { right: 0 } : {}}>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="characters">Characters</NavLink></li>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="boxes">Boxes</NavLink></li>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="coins">Coins</NavLink></li>
            <li><NavLink className={({ isActive }) => "navbar__item" + (isActive ? " active" : "")} to="about">About</NavLink></li>
            <li className="navbar__item">
                {isDarkTheme ? 'Light' : 'Dark'} <FontAwesomeIcon className="navbar__item--icon toggle" icon={isDarkTheme ? faToggleOn : faToggleOff} onClick={handleToggle} />
            </li>
            <li className="navbar__item"><NavLink className={({ isActive }) => "navbar__item" + (isActive ? "active" : "")} to="profile">
                <img className="navbar__item--avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQH4NtwgxrZSjQ/profile-displayphoto-shrink_800_800/0/1632448218935?e=1645056000&v=beta&t=-NcjpqU0stNIyEixTZHiIhc4BVIwUhMx2W0BS-RtrUo" alt="Profile avatar"></img>
            </NavLink></li>
        </ul>
    );

    return (
        <header>
            <NavbarStyles style={isNavbarScroll ? scrollNavbarStyles : {}}>
                <Container>
                    <span className="navbar__logo" onClick={() => navigate("/")}>MDC</span>
                    {
                        isMediumScreen
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
