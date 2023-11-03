import styled from "styled-components";

const CharactersStyles = styled.section`
  //background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 0 3rem;
  padding-top: 10rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  @media only screen and (min-width: 87.5em) {
    padding-top: 13rem;
    padding-bottom: 8rem;
  }

  @media only screen and (min-width: 112.5em) {
    padding-top: 18rem;
  }

  .characters {
    &__cards {
      grid-column: 1 / -1;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        justify-content: flex-start;
      }
    }

    &__titles {
      width: 100%;
      margin-bottom: 2rem;

      @media only screen and (min-width: 87.5em) {
        margin-bottom: 8rem;
      }
    }

    &__buttons {
      margin-top: 5rem;
      width: 100%;

      display: flex;
      justify-content: center;
      gap: 1.5rem;

      @media only screen and (min-width: 87.5em) {
        margin-top: 8rem;
      }

      & button {
        background-color: ${(props) =>
          props.theme.buttonPrimaryBackgroundColor};
        border: none;
        border-radius: 3rem;
        color: ${(props) => props.theme.buttonPrimaryTextColor};
        cursor: pointer;
        font-size: 1.8rem;
        padding: 0.7rem 1.8rem;
        transition: all 0.2s;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          background-color: ${(props) =>
            props.theme.buttonPrimaryBackgroundColorHover};
          color: ${(props) => props.theme.buttonPrimaryTextColorHover};
        }

        &.disabled {
          cursor: not-allowed;
          opacity: 0.7;

          &:hover {
            background-color: ${(props) =>
              props.theme.buttonPrimaryBackgroundColor};
            color: ${(props) => props.theme.buttonPrimaryTextColor};
          }
        }
      }
    }
  }
`;

export default CharactersStyles;
