import styled from "styled-components";

const HeroSectionStyles = styled.section`
  //background-color: ${(props) => props.theme.primaryColor};
  padding: 0 3rem;
  padding-top: 7rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  @media only screen and (min-width: 87.5em) {
    padding-top: 8rem;
  }

  @media only screen and (min-width: 112.5em) {
    padding-top: 10rem;
  }

  .hero-section {
    &--left {
      width: 100%;
      height: 100%;
      grid-column: 1 / 8;
      grid-row: 1 / 2;
      z-index: 10;
      padding: 11vw 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1.8rem;

      @media only screen and (min-width: 27.5em) {
        padding: 15vw 0;
      }

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 9;
        padding: 14vw 0;
      }

      @media only screen and (min-width: 57.5em) {
        grid-column: 2 / 8;
        padding: 18rem 0;
      }

      @media only screen and (min-width: 87.5em) {
        padding: 20rem 0;
      }

      @media only screen and (min-width: 112.5em) {
        padding: 30rem 0;
      }
    }

    &--right {
      grid-column: 5 / -1;
      grid-row: 1 / 2;
      width: 100%;
      height: 100%;
      z-index: 5;
      position: relative;

      @media only screen and (min-width: 25em) {
      }

      @media only screen and (min-width: 37.5em) {
        grid-column: 5 / -1;
      }

      @media only screen and (min-width: 57.5em) {
        grid-column: 4 / 12;
      }

      @media only screen and (min-width: 87.5em) {
      }
    }

    &__title {
      color: ${(props) => props.theme.headerColor};
      font-family: "Advent Pro", sans-serif;
      font-size: 9.5vw;
      line-height: 8vw;
      font-weight: 900;
      text-transform: uppercase;
      text-shadow: 2px 2px 4px black;

      @media only screen and (min-width: 37.5em) {
        //line-height: 6rem;
      }

      @media only screen and (min-width: 57.5em) {
        line-height: 8rem;
        font-size: 8rem;
      }

      @media only screen and (min-width: 87.5em) {
        line-height: 10rem;
        font-size: 11rem;
      }

      @media only screen and (min-width: 112.5em) {
        font-size: 13rem;
        line-height: 11.5rem;
      }
    }

    &__actions {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.5rem;

      @media only screen and (min-width: 37.5em) {
        margin-top: 3.5rem;
      }

      @media only screen and (min-width: 87.5em) {
        flex-direction: row;
        align-items: center;
      }
    }

    &__span {
      color: ${(props) => props.theme.paragraphColor};
      font-size: 1.4rem;
      width: max-content;
      transition: all 0.25s;

      @media only screen and (min-width: 87.5em) {
        font-size: 1.8rem;
      }

      &:hover {
        margin-left: 0.5rem;
      }
    }

    &__image {
      width: 100%;
      position: absolute;
      top: 8vw;

      @media only screen and (min-width: 37.5em) {
        top: 2.5vw;
      }

      @media only screen and (min-width: 125em) {
        top: 1vw;
      }

      & img {
        width: 100%;
      }

      &::before {
        content: "";
        background: linear-gradient(
          90deg,
          hsla(0, 0%, 0%, 1) 0%,
          hsla(30, 6%, 7%, 1) 7%,
          hsla(44, 30%, 88%, 1) 100%
        );
        border-radius: 50%;
        width: 70%;
        height: 70%;
        position: absolute;
        bottom: 18%;
        right: 0;
        z-index: -1;
        animation: 2.5s ease-in infinite alternate pulse;
      }
    }
  }
`;

export default HeroSectionStyles;
