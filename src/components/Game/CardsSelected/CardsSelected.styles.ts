import styled from "styled-components";

const CardsSelectedStyles = styled.div`
  border-radius: 0.9rem;
  padding: 1.5rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  transition: all 0.2s;

  @media only screen and (min-width: 57.5em) {
    flex-direction: row;
  }

  .card-selected {
    width: 18rem;
    min-width: 15rem;

    &__vs {
      font-size: 6rem;
      font-style: oblique;
    }

    &__header {
      position: relative;
      & img {
        width: 100%;
      }
    }

    &__level {
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${(props) => props.theme.cardPrimaryColor};
      color: ${(props) => props.theme.cardSingleTextColor};
      font-size: 1.6rem;
      font-weight: 600;
      clip-path: circle();
      padding: 1rem;
    }

    &__info {
      display: flex;
      justify-content: center;
    }

    &__wrapper {
      text-align: center;

      & span {
        color: ${(props) => props.theme.paragraphColor};
        font-size: 1.2rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      & p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: ${(props) => props.theme.paragraphColor};
        font-size: 2.4rem;
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

export default CardsSelectedStyles;
