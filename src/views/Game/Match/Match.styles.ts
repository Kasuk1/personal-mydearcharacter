import styled from "styled-components";

const MatchStyles = styled.section`
  //background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 0 3rem;
  padding-top: 15rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  .match {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media only screen and (min-width: 37.5em) {
      grid-column: 2 / 12;
    }

    @media only screen and (min-width: 87.5em) {
      //grid-column: 2 / 6;
    }

    &__headers {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      flex-wrap: wrap;

      @media only screen and (min-width: 37.5em) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      &--info {
        display: flex;
        flex-direction: column;

        & h1 {
          font-size: 4rem;
        }
      }

      & button {
        align-self: flex-end;

        @media only screen and (min-width: 37.5em) {
          align-self: flex-start;
        }
      }
    }

    &__info {
      display: flex;
      gap: 1rem;

      @media only screen and (min-width: 37.5em) {
        flex-direction: row;
      }

      &.player1 {
        flex-direction: column-reverse;
      }

      &.player2 {
        flex-direction: column;
        align-items: flex-end;
      }
    }

    &__player {
      //background-color: ${(props) => props.theme.cardExtraLoadingColor3};
      //padding: 1rem 3rem 1rem 6.5rem;
      z-index: 2;
      display: flex;
      align-items: center;
      position: relative;

      & h2 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
      }

      & img {
        width: 9rem;
        margin-right: -2rem;
        top: 0;
      }
    }

    &__pointer {
      &--player1 {
        position: absolute;
        left: 2.5rem;
        font-size: 3.5rem;
        animation-name: topToBottomPlayer1Pointer, rotateYaxis;
        animation-duration: 0.8s, 2.5s;
        animation-iteration-count: infinite, infinite;
        animation-direction: alternate, reverse;
      }

      &--player2 {
        position: absolute;
        right: 2.5rem;
        font-size: 3.5rem;
        animation-name: bottomToTopPlayer2Pointer, rotateYaxis;
        animation-duration: 0.8s, 2.5s;
        animation-iteration-count: infinite, infinite;
        animation-direction: alternate, reverse;
      }
    }

    &__deck {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    &__state {
      margin: 5rem 0 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      overflow: hidden;

      &--waiting {
        &-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;

          @media only screen and (min-width: 37.5em) {
            flex-direction: row;
          }
        }
        &-vs {
          font-size: 2.5rem;
          font-style: italic;
        }
      }

      &-play {
        background: linear-gradient(
          90deg,
          hsla(145, 45%, 23%, 1) 0%,
          hsla(150, 100%, 41%, 1) 100%
        );
        box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 600;
        width: 8rem;
        height: 8rem;
        position: relative;
        animation: pulsePlayButton 0.8s ease-in infinite alternate;

        display: flex;
        justify-content: center;
        align-items: center;

        & svg {
          color: rgba(0, 0, 0, 0.5);
          font-size: 3rem;
        }

        &:hover {
          box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
          transform: scale(1.05);
        }
      }
    }
  }
`;

export default MatchStyles;
