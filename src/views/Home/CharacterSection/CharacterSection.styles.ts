import styled from "styled-components";

const CharacterSectionStyles = styled.section`
  //background-color: ${(props) => props.theme.primaryColor};
  padding: 4rem 3rem;
  transition: all 0.2s;

  @media only screen and (min-width: 37.5em) {
    padding: 12rem 3rem;
  }

  @media only screen and (min-width: 87.5em) {
    padding: 18rem 3rem;
  }

  .character-section {
    &--left {
      grid-column: 1 / 7;
      position: relative;
      z-index: 0;

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 6;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 2 / 7;
        column-gap: 16rem;
        row-gap: 12rem;
      }

      &::before {
        content: "";
        background: linear-gradient(
          90deg,
          hsla(0, 0%, 0%, 1) 0%,
          hsla(30, 6%, 7%, 1) 7%,
          hsla(44, 30%, 88%, 1) 100%
        );
        width: 60%;
        height: 50%;
        position: absolute;
        bottom: 30%;
        right: 20%;
        z-index: -1;
        animation: 2s ease-in alternate infinite pulse;

        @media only screen and (min-width: 37.5em) {
          width: 70%;
          height: 60%;
          bottom: 20%;
          right: 15%;
        }

        @media only screen and (min-width: 87.5em) {
          bottom: 25%;
        }
      }

      & img {
        width: 110%;
        transform: scaleX(-1);

        @media only screen and (min-width: 37.5em) {
          width: 100%;
        }

        @media only screen and (min-width: 87.5em) {
        }
      }
    }

    &--right {
      grid-column: 7 / 13;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.5rem;
      z-index: 1;

      @media only screen and (min-width: 37.5em) {
        grid-column: 7 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 8 / 12;
      }
    }

    &__text {
      margin-bottom: 3rem;
    }
  }
`;

export default CharacterSectionStyles;
