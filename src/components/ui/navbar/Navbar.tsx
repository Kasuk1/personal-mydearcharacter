import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Container } from "components";
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
} from "@fortawesome/free-solid-svg-icons";
import {
  handleShowMenu,
  handleTheme,
  selectDarkTheme,
  selectShowSmallMenu,
  logout,
  selectUser,
} from "features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarStyles from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isTabletScreen = useMediaQuery({ query: "(min-width: 37.5em)" });
  /* const isDesktopScreen = useMediaQuery({ query: '(min-width: 87.5em)' }); */
  const isDarkTheme = useAppSelector(selectDarkTheme);
  const showSmallMenu = useAppSelector(selectShowSmallMenu);
  const [scrolled, setScrolled] = useState(false);
  const { nickname, isLogged, level } = useAppSelector(selectUser);

  const handleScroll = () => {
    if (window.scrollY >= 45) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (showSmallMenu && !isTabletScreen) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [showSmallMenu, isTabletScreen]);

  useEffect(() => {
    handleScroll();
  }, []);

  window.addEventListener("scroll", handleScroll);

  const navbarList = () => (
    <ul
      className={isTabletScreen ? "navbar__list" : "navbar__list--small"}
      style={
        showSmallMenu
          ? {
              left: 0,
              opacity: 1,
              visibility: "visible",
            }
          : {}
      }
    >
      {showSmallMenu && !isTabletScreen && (
        <span className="">
          <FontAwesomeIcon
            className="navbar__item--icon close"
            icon={faTimes}
            onClick={() => dispatch(handleShowMenu())}
          />
        </span>
      )}

      <li>
        <NavLink
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " active" : "")
          }
          to="/game"
          onClick={() => showSmallMenu && dispatch(handleShowMenu())}
        >
          {isTabletScreen ? (
            "Game"
          ) : (
            <>
              <FontAwesomeIcon icon={faGamepad} /> Game
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " active" : "")
          }
          to="/characters"
          onClick={() => showSmallMenu && dispatch(handleShowMenu())}
        >
          {isTabletScreen ? (
            "Characters"
          ) : (
            <>
              <FontAwesomeIcon icon={faUserAstronaut} /> Characters
            </>
          )}
        </NavLink>
      </li>
      <li className="navbar__item">
        {!isTabletScreen && (
          <FontAwesomeIcon
            className="navbar__item--icon toggle"
            icon={isDarkTheme ? faToggleOn : faToggleOff}
            onClick={() => dispatch(handleTheme())}
          />
        )}

        {isDarkTheme ? "Light " : "Dark"}

        {isTabletScreen && (
          <FontAwesomeIcon
            className="navbar__item--icon toggle"
            icon={isDarkTheme ? faToggleOn : faToggleOff}
            onClick={() => dispatch(handleTheme())}
          />
        )}
      </li>
      <li className="navbar__item">
        {isLogged ? (
          <NavLink
            className={({ isActive }) =>
              "navbar__item" + (isActive ? " active" : "")
            }
            to="/profile"
            onClick={() => showSmallMenu && dispatch(handleShowMenu())}
          >
            <FontAwesomeIcon
              className="navbar__item--avatar"
              icon={faUserCircle}
            />

            <span
              style={{
                color: `${isDarkTheme ? "#00ff87" : "#418F6E"}`,
              }}
            >
              Lvl. {level}{" "}
              <span style={{ fontWeight: "800", fontSize: "1.8rem" }}>
                | {nickname}
              </span>
            </span>
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              "navbar__item" + (isActive ? " active" : "")
            }
            to="/auth/login"
          >
            {isTabletScreen ? (
              "Login"
            ) : (
              <>
                <FontAwesomeIcon icon={faSignInAlt} />
                Login
              </>
            )}
          </NavLink>
        )}
      </li>
      <li className="navbar__item">
        {isLogged && (
          <NavLink
            className={({ isActive }) =>
              "navbar__item" + (isActive ? " active" : "")
            }
            to="/auth/login"
            onClick={() => {
              dispatch(logout());
              showSmallMenu && dispatch(handleShowMenu());
            }}
          >
            <FontAwesomeIcon
              className="navbar__item--avatar"
              icon={faSignOutAlt}
            />
            {!isTabletScreen && "Logout"}
          </NavLink>
        )}
      </li>
    </ul>
  );

  return (
    <NavbarStyles className={scrolled ? "scrolled" : ""}>
      <Container>
        <span className="navbar__logo" onClick={() => navigate("/")}>
          MDC
        </span>
        {isTabletScreen ? (
          navbarList()
        ) : (
          <>
            {navbarList()}
            <FontAwesomeIcon
              className="navbar__item--icon bars"
              icon={faBars}
              onClick={() => dispatch(handleShowMenu())}
            />
          </>
        )}
      </Container>
    </NavbarStyles>
  );
};
