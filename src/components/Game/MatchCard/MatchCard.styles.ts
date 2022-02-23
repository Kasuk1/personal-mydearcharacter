import styled from 'styled-components';

const MatchCardStyles = styled.div`
  background-color: ${(props) => props.theme.cardPrimaryColor};
  border-radius: 0.9rem;
  cursor: pointer;
  padding: 1.5rem 2rem 1rem;
  width: 20rem;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2%);
  }

  .match-card {
    &__header {
      position: relative;

      & img {
        width: 100%;
      }
    }

    &__level {
      background-color: ${(props) => props.theme.cardSingleTextColor};
      border-radius: 5rem;
      color: ${(props) => props.theme.cardPrimaryColor};
      font-size: 1.6rem;
      font-weight: 600;
      padding: 0.1rem 2rem;
      position: absolute;
      bottom: -1.5rem;
      right: 0;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__wrapper {
      & span {
        color: ${(props) => props.theme.cardSingleTextColor};
        font-size: 1rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      & p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: ${(props) => props.theme.cardSingleTextColor};
        font-size: 1.7rem;
        text-transform: uppercase;
      }
    }

    &__statistics {
      display: flex;
      justify-content: space-between;

      & p {
        font-size: 2.5rem;
      }
    }
  }
`;

export default MatchCardStyles;
