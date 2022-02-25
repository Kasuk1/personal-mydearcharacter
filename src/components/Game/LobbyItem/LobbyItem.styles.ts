import styled from 'styled-components';
import { lugia } from 'assets';

const LobbyItemStyles = styled.div`
  background: url(${lugia}), ${(props) => props.theme.cardPrimaryColor};
  background-position: right 5% top 8%;
  background-repeat: no-repeat;
  background-size: 50%;
  border-radius: 5rem;
  box-shadow: 0.2rem 1rem 3rem rgba(0, 0, 0, 0.4);
  color: ${(props) => props.theme.cardSingleTextColor};
  padding: 1rem 3rem;
  opacity: 0.85;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5%);
    opacity: 1;
  }

  &.waiting {
    cursor: pointer;
  }

  &.full {
    cursor: default;

    &:hover {
      transform: translateY(0);
      opacity: 0.85;
    }
  }

  .lobby-item {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      & span {
        font-size: 1.4rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      & .id {
        display: none;

        @media only screen and (min-width: 57.5em) {
          display: block;
        }
      }

      & p {
        font-size: 2rem;

        &.status {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 2rem;
          font-size: 1.6rem;
          font-weight: 600;
          padding: 0.1rem 1rem;
          text-transform: uppercase;

          &.waiting {
            color: #c3ff00;
            animation: opacityLoadingFull 0.6s infinite alternate;
          }
          &.full {
            color: #f9394f;
          }
        }
      }
    }

    &__type {
      background-color: ${(props) => props.theme.cardSingleTextColor};
      border-radius: 5rem;
      font-size: 1.6rem !important;
      padding: 0.1rem 2rem;
      color: ${(props) => props.theme.cardPrimaryColor};
    }
  }
`;

export default LobbyItemStyles;
