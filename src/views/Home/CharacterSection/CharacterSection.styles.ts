import styled from 'styled-components';

const CharacterSectionStyles = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
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
      grid-column: 1 / 5;
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 6;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 2 / 7;
        column-gap: 16rem;
        row-gap: 12rem;
      }
    }

    &--right {
      grid-column: 6 / 13;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media only screen and (min-width: 37.5em) {
        grid-column: 7 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 8 / 12;
      }
    }

    &__image {
      width: 100%;

      @media only screen and (min-width: 37.5em) {
        width: 15rem;
      }

      @media only screen and (min-width: 87.5em) {
        width: 18rem;
      }
    }

    &__text {
      margin-bottom: 3rem;
    }
  }
`;

export default CharacterSectionStyles;
