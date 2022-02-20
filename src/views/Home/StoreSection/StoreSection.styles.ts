import styled from 'styled-components';

const StoreSectionStyles = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
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
      grid-column: 1 / 10;
      grid-row: 1 / 2;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 10;
      }

      @media only screen and (min-width: 87.5em) {
        grid-column: 2 / 7;
      }
    }

    &--right {
      margin-top: 4.5rem;
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      position: relative;

      @media only screen and (min-width: 25em) {
        margin-top: 20.5rem;
      }

      @media only screen and (min-width: 37.5em) {
        grid-column: 2 / 11;
      }

      @media only screen and (min-width: 87.5em) {
        margin-top: 0;
        grid-row: 1 / 2;
        grid-column: 8 / 12;
      }

      & > :first-child {
        position: relative;
        z-index: 1;
      }

      & > :last-child {
        display: none;
        position: absolute;
        bottom: 8rem;
        left: 8rem;
        z-index: 0;

        @media only screen and (min-width: 25em) {
          display: block;
        }

        @media only screen and (min-width: 37.5em) {
        }
      }
    }
  }
`;

export default StoreSectionStyles;
