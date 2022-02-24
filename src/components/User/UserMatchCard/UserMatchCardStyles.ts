import { rayqaza } from 'assets';
import styled from 'styled-components';

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
    justify-content: space-between;
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
      padding: 1rem 3rem;
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
      width: 20rem;
      min-width: 15rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__info {
      display: flex;
      flex-direction: column;

      & p {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: -0.5rem;
      }
      & span {
        background-color: ${(props) => props.theme.primaryColor};
        border-radius: 5rem;
        color: ${(props) => props.theme.paragraphColor};
        font-size: 1.3rem;
        font-weight: 600;
        padding: 0.5rem 2rem;
        align-self: flex-start;
      }
    }

    &__winner {
      border-radius: 50%;
      color: #fff;
      text-transform: uppercase;
      font-size: 1.8rem;
      font-style: italic;
      width: 6rem;
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__player {
      width: 15rem;
      display: flex;
      flex-direction: column;

      & p {
        font-size: 1.8rem;
      }
    }

    &__turns {
      font-size: 1.3rem;
    }

    &__decks {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1rem;
    }

    &__deck {
      min-width: 20rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      @media only screen and (min-width: 37.5em) {
        width: 50rem;
      }

      @media only screen and (min-width: 87.5em) {
      }

      @media only screen and (min-width: 112.5em) {
      }

      &-title {
      }

      &-list {
        display: flex;
        flex-wrap: wrap;

        & > * {
          background-color: ${(props) => props.theme.tertiaryColor};
          transform-origin: top left;
          transform: scale(0.2);
          margin-right: -17rem;
          margin-bottom: -26rem;

          &:hover {
            transform: scale(0.9);
            z-index: 2;
          }
        }
      }
    }
  }
`;

export default UserMatchCardStyles;
