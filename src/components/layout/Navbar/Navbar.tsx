import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faToggleOn,
  faToggleOff,
  faUserAstronaut,
  faGamepad,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  handleShowMenu,
  handleTheme,
  selectDarkTheme,
  selectShowMenu,
} from '../../../features/layout/layout.slice';
import { Container } from '../Container/Container';

import NavbarStyles from './Navbar.styles';
import {
  logout,
  selectUser,
} from 'features/authentication/authentication.slice';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isTabletScreen = useMediaQuery({ query: '(min-width: 37.5em)' });
  /* const isDesktopScreen = useMediaQuery({ query: '(min-width: 87.5em)' }); */
  const isDarkTheme = useAppSelector(selectDarkTheme);
  const showMenu = useAppSelector(selectShowMenu);
  const [scrolled, setScrolled] = useState(false);
  const { nickname, isLogged, level } = useAppSelector(selectUser);

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
  };

  useEffect(() => {
    handleScroll();
  }, []);

  window.addEventListener('scroll', handleScroll);

  const navbarList = () => (
    <ul
      className={isTabletScreen ? 'navbar__list' : 'navbar__list--small'}
      style={
        isTabletScreen && showMenu
          ? { left: '80%' }
          : showMenu
          ? { left: '70%' }
          : {}
      }
    >
      <li>
        <NavLink
          className={({ isActive }) =>
            'navbar__item' + (isActive ? ' active' : '')
          }
          to='/game'
        >
          {isTabletScreen ? 'Game' : <FontAwesomeIcon icon={faGamepad} />}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            'navbar__item' + (isActive ? ' active' : '')
          }
          to='/characters'
        >
          {isTabletScreen ? (
            'Characters'
          ) : (
            <FontAwesomeIcon icon={faUserAstronaut} />
          )}
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            'navbar__item' + (isActive ? ' active' : '')
          }
          to='/boxes'
        >
          {isTabletScreen ? 'Boxes' : <FontAwesomeIcon icon={faBox} />}
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            'navbar__item' + (isActive ? ' active' : '')
          }
          to='/coins'
        >
          {isTabletScreen ? 'Coins' : <FontAwesomeIcon icon={faCoins} />}
        </NavLink>
      </li> */}

      <li className='navbar__item'>
        {isDarkTheme && isTabletScreen
          ? 'Light '
          : !isDarkTheme && isTabletScreen
          ? 'Dark'
          : ''}
        <FontAwesomeIcon
          className='navbar__item--icon toggle'
          icon={isDarkTheme ? faToggleOn : faToggleOff}
          onClick={handleToggle}
        />
      </li>
      <li className='navbar__item'>
        {isLogged ? (
          <NavLink
            className={({ isActive }) =>
              'navbar__item' + (isActive ? ' active' : '')
            }
            to='/profile'
          >
            <FontAwesomeIcon
              className='navbar__item--avatar'
              icon={faUserCircle}
            />
            <span
              style={{
                color: `${isDarkTheme ? '#B1FF05' : '#418F6E'}`,
              }}
            >
              Lvl. {level}{' '}
              <span style={{ fontWeight: '800', fontSize: '1.8rem' }}>
                | {nickname}
              </span>
            </span>
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              'navbar__item' + (isActive ? ' active' : '')
            }
            to='/auth/login'
          >
            {isTabletScreen ? 'Login' : <FontAwesomeIcon icon={faSignInAlt} />}
          </NavLink>
        )}
      </li>
      <li className='navbar__item'>
        {isLogged && (
          <NavLink
            className={({ isActive }) =>
              'navbar__item' + (isActive ? ' active' : '')
            }
            to='/auth/login'
            onClick={() => dispatch(logout())}
          >
            <FontAwesomeIcon
              className='navbar__item--avatar'
              icon={faSignOutAlt}
            />
          </NavLink>
        )}
      </li>
    </ul>
  );

  return (
    <header>
      <NavbarStyles className={scrolled ? 'scrolled' : ''}>
        <Container>
          <span className='navbar__logo' onClick={() => navigate('/')}>
            MDC
          </span>
          {isTabletScreen ? (
            navbarList()
          ) : (
            <>
              {navbarList()}
              <FontAwesomeIcon
                className='navbar__item--icon bars'
                icon={showMenu ? faTimes : faBars}
                onClick={handleClickBars}
              />
            </>
          )}
        </Container>
      </NavbarStyles>
    </header>
  );
};
