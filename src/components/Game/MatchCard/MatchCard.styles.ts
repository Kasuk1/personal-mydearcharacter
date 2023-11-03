import styled from "styled-components";

const MatchCardStyles = styled.div`
  background-color: ${(props) => props.theme.cardPrimaryColor};
  border-radius: 0.9rem;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  width: 11.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.6);
    z-index: 2;
  }

  .match-card {
    &__header {
      position: relative;

      & img {
        width: 100%;
      }
    }

    &__level {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: ${(props) => props.theme.cardSecondaryColor};
      color: ${(props) => props.theme.cardSingleTextColor};
      font-size: 1rem;
      font-weight: 600;
      clip-path: circle();
      padding: 1rem;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__statistics {
      display: flex;
      justify-content: space-between;

      & p {
        font-size: 2rem;
      }
    }

    &__wrapper {
      & span {
        color: ${(props) => props.theme.paragraphColor};
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      & p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: ${(props) => props.theme.paragraphColor};
        font-size: 1rem;
        text-transform: uppercase;
      }
    }
  }
`;

export default MatchCardStyles;
