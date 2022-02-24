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
  align-items: center;
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
      & span {
        font-size: 1.2rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      & p {
        font-size: 1.9rem;

        &.waiting {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 2rem;
          color: #c3ff00;
          font-size: 1.6rem;
          font-weight: 800;
          padding: 0.1rem 1rem;
          text-transform: uppercase;
          animation: opacityLoadingFull 0.6s infinite alternate;
        }

        &.full {
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 2rem;
          color: #f9394f;
          font-size: 1.6rem;
          font-weight: 600;
          padding: 0.1rem 1rem;
          text-transform: uppercase;
        }
      }
    }

    &__type {
      background-color: ${(props) => props.theme.cardSingleTextColor};
      border-radius: 50%;
      padding: 1rem;
      color: ${(props) => props.theme.cardPrimaryColor};
    }
  }
`;

export default LobbyItemStyles;
