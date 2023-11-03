import styled from "styled-components";

const StoreSectionStyles = styled.section`
  //background-color: ${(props) => props.theme.primaryColor};
  padding: 7rem 3rem;
  transition: all 0.2s;

  @media only screen and (min-width: 37.5em) {
    padding: 12rem 3rem;
  }

  @media only screen and (min-width: 87.5em) {
    padding: 18rem 3rem;
  }

  .store-section {
    &--left {
      grid-column: 1 / 13;
      grid-row: 1 / 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      text-align: center;

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 2 / 7;
        text-align: start;
        align-items: flex-start;
      }
    }

    &--right {
      margin-top: 1rem;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      position: relative;
      display: flex;
      justify-content: center;

      @media only screen and (min-width: 25em) {
        margin-top: 0;
      }

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 12;
      }

      @media only screen and (min-width: 87.5em) {
        grid-row: 1 / 2;
        grid-column: 8 / 12;
      }

      & > :first-child {
        position: relative;
        transform: scale(0.85);
        //animation: 4s ease-in infinite alternate pulse;
      }

      /* & > :last-child {
        display: none;
        position: absolute;
        bottom: 8rem;
        left: 8rem;
        z-index: 0;

        @media only screen and (min-width: 25em) {
        }

        @media only screen and (min-width: 37.5em) {
          display: block;
        }
        
      } */
    }
  }
`;

export default StoreSectionStyles;
