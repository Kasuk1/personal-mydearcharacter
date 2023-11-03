import styled from "styled-components";

const CharacterDetailStyles = styled.section`
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
    padding-top: 20rem;
  }

  .character-detail {
    &__left {
      width: 100%;
      grid-column: 1 / -1;

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        //grid-column: 2 / 6;
      }
    }

    &__right {
    }
  }
`;

export default CharacterDetailStyles;
