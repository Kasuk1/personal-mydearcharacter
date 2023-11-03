import styled from "styled-components";

const NavbarStyles = styled.nav`
  //background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 2rem 3rem;
  transition: all 0.2s;
  position: fixed;
  width: 100%;
  z-index: 100;

  @media only screen and (min-width: 87.5em) {
    padding: 2.5rem 3rem;
  }

  &.scrolled {
    background-color: ${(props) => props.theme.secondaryColor};
    //color: ${(props) => props.theme.tertiaryColor};
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    z-index: 300;

    & a,
    & li {
      //color: ${(props) => props.theme.tertiaryColor};
    }
  }

  .navbar__logo {
    cursor: pointer;
    font-size: 3rem;
    letter-spacing: -0.8rem;

    grid-column: 1 / 4;

    @media only screen and (min-width: 37.5em) {
      grid-column: 2 / 3;
      font-size: 3.5rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 4rem;
    }
  }

  .navbar__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;

    @media only screen and (min-width: 37.5em) {
      grid-column: 4 / 13;
    }
    @media only screen and (min-width: 57.5em) {
      grid-column: 7 / 13;
    }
    @media only screen and (min-width: 87.5em) {
      grid-column: 7 / 12;
    }
  }

  .navbar__item {
    font-size: 1.6rem;
    color: ${(props) => props.theme.paragraphColor};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &.active {
      text-decoration: underline;
    }

    &--avatar {
      font-size: 2.8rem;
    }

    &--icon {
      font-size: 1.6rem;
      cursor: pointer;

      &.bars {
        grid-column: 5 / -1;
        font-size: 2rem;
        margin-left: auto;

        @media only screen and (min-width: 37.5em) {
          grid-column: 11 / 12;
        }
      }

      &.toggle {
        font-size: 1.6rem;
      }

      &.close {
        cursor: pointer;
        position: absolute;
        top: 2rem;
        right: 2.5rem;
      }
    }
  }

  .navbar__list--small {
    background-color: ${(props) => props.theme.secondaryColor};
    position: fixed;
    left: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transform-origin: left;
    transition: all 0.3s ease-in;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & a,
    & li,
    & .navbar__item--icon {
      font-size: 3rem;

      @media only screen and (min-width: 37.5em) {
        font-size: 1.6rem;
      }
    }
  }
`;

export default NavbarStyles;
