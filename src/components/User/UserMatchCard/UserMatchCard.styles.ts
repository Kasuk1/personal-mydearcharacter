import { rayqaza } from "assets";
import styled from "styled-components";

const UserMatchCardStyles = styled.div`
  .user-match-card {
    background: url(${rayqaza}), ${(props) => props.theme.cardPrimaryColor};
    background-position: left 5rem bottom -8rem;
    background-repeat: no-repeat;
    background-size: 110%;
    border-radius: 2rem;
    box-shadow: 0.2rem 1rem 3rem rgba(0, 0, 0, 0.4);
    color: ${(props) => props.theme.cardSingleTextColor};
    padding: 2rem 1.5rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;

    @media only screen and (min-width: 27.5em) {
      background-position: left 15rem bottom -15rem;
    }

    @media only screen and (min-width: 37.5em) {
      background-size: 80%;
      background-position: left 25rem bottom -15rem;
    }

    @media only screen and (min-width: 57.5em) {
      background-position: right -10% top 50%;
      background-size: 45%;
      padding: 1rem 1.5rem;
      gap: 5rem;
    }

    &.winner {
      opacity: 1;
    }
    &.loser {
      opacity: 0.55;

      &:hover {
        opacity: 1;
      }
    }

    &__headers {
      align-self: flex-start;

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &--title {
        font-size: 2.5rem;
        font-weight: bold;
      }
    }

    &__winner {
      font-size: 3rem;
      font-style: italic;
    }

    &__turns {
      font-size: 1.3rem;
    }

    &__decks {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1rem;
    }

    &__deck {
      display: flex;
      gap: 1rem;

      @media only screen and (min-width: 37.5em) {
        //width: 50rem;
      }

      &-list {
        display: flex;
        flex-wrap: wrap;

        & > * {
          background-color: ${(props) =>
            props.theme.buttonPrimaryBackgroundColor};
          color: ${(props) => props.theme.paragraphColor};
          transform-origin: top left;
          transform: scale(0.4);
          margin-right: -6.7rem;
          margin-bottom: -10rem;

          &:hover {
            transform: scale(1.2);
            z-index: 2;
          }
        }
      }

      &__player {
        & p {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default UserMatchCardStyles;
