import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

import { handleNavbarScroll, handleShowMenu, handleTheme, selectDarkTheme, selectNavbarScroll, selectShowMenu } from '../../../features/layout/layout.slice';

import NavbarStyles from './Navbar.styles';
import { useSelector } from 'react-redux';

export const Navbar = () => {
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
        if (window.scrollY >= 90) {
            dispatch(handleNavbarScroll(true));
        } else {
            dispatch(handleNavbarScroll(false));
        }
    };

    window.addEventListener('scroll', handleNavbarSCroll);

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
                {isDarkTheme ? 'Dark' : 'Light'} <FontAwesomeIcon className="navbar__item--icon toggle" icon={isDarkTheme ? faToggleOn : faToggleOff} onClick={handleToggle} />
            </li>
            <li className="navbar__item"><NavLink className={({ isActive }) => "navbar__item" + (isActive ? "active" : "")} to="profile">
                <img className="navbar__item--avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQH4NtwgxrZSjQ/profile-displayphoto-shrink_800_800/0/1632448218935?e=1645056000&v=beta&t=-NcjpqU0stNIyEixTZHiIhc4BVIwUhMx2W0BS-RtrUo" alt="Profile avatar"></img>
            </NavLink></li>
        </ul>
    );

    return (
        <NavbarStyles style={isNavbarScroll ? scrollNavbarStyles : {}}>
            <span className="navbar__logo">MDC</span>
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
        </NavbarStyles>
    )
}
