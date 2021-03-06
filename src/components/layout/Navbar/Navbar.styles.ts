import styled from 'styled-components';

const NavbarStyles = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
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
    color: ${(props) => props.theme.tertiaryColor};
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;

    & a,
    & li {
      color: ${(props) => props.theme.tertiaryColor};
    }

    & .navbar__list--small {
      background-color: ${(props) => props.theme.secondaryColor};
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
      grid-column: 4 / 12;
    }
    @media only screen and (min-width: 57.5em) {
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
    }
  }

  .navbar__list--small {
    background-color: ${(props) => props.theme.primaryColor};
    border-bottom-left-radius: 0.8rem;
    top: 100%;
    left: 100%;
    padding: 3rem 3rem 2rem 3rem;
    width: 100%;
    position: absolute;
    transition: left 1s, background-color 0.2s, color 0.2s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
