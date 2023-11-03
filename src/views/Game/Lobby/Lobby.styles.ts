import styled from "styled-components";

const LobbyStyles = styled.section`
  //background-color: ${(props) => props.theme.primaryColor};
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
    }

    &__rooms {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default LobbyStyles;
