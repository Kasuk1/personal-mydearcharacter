import styled from 'styled-components';

const LobbyStyles = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.paragraphColor};
  padding: 0 3rem;
  padding-top: 10rem;
  padding-bottom: 5rem;
  transition: all 0.2s;

  .lobby {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media only screen and (min-width: 37.5em) {
      grid-column: 2 / 12;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;

      & button {
        background-color: ${(props) =>
          props.theme.buttonPrimaryBackgroundColor};
        color: ${(props) => props.theme.buttonPrimaryTextColor};
        border: none;
        border-radius: 5rem;
        font-size: 1.5rem;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        padding: 1.2rem 0;
        min-width: 14rem;
        transition: all 0.2s;

        &:hover {
          background-color: #52c616;
          color: #fff;
          transform: translateY(-10%);
        }
      }
    }

    &__rooms {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default LobbyStyles;
